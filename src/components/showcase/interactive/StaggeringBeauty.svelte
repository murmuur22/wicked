<script>
    import { onMount } from 'svelte';
    import Desktop from '../../Desktop.svelte';

    export let content;

    /* Get content for each stage */
    let intro = content[0]; // Must be a video that plays forward and backward with the still frame in the middle
    let slow = content[1];
    let fast = content[2];

    /* get ref for video elements */
    let intro_ref;
    let intro_display = "none";
    let slow_display = "none";
    let fast_display = "none";

    /* Speed Breakpoints */
    let slowStart = 0.1;
    let fastStart = 75;

    /* Set tick */
    let tick = 0;
	onMount(() => {

        /* Update tick */
        const interval = setInterval(() => {
			tick += 1;
		}, 16);

        /* on unmount */
        return () => {
            /* Remove the interval */
			clearInterval(interval);
		};
	});


    /* 
        Stage 1
        Check if mouse is over div, if so play video forward. when mouse leaves div play video backward
    */
    let time;
    let duration;
    $: backward_time = duration - time;

    let mouseIsOver = false;

    function handleMouseOver() {
        mouseIsOver = true;
        intro_ref.play();
    }
    function handleMouseOut() {
        mouseIsOver = false;
        time = backward_time;
        intro_ref.play();
    }
    
    let atMiddle = false;
    $: playing(time);
    function playing(time) {
        if (time >= duration/2 && mouseIsOver){
            intro_ref.pause();
            atMiddle = true;
        }
        else {
            atMiddle = false;
        }
    }

    /*
        Calculate mouse speed
    */


    /* collect data on mouse speed when mouse moves */
    let speed_data = [0];
    function onMouseMove(e) {
        speed_data = [...speed_data, ((Math.abs(e.movementX) + Math.abs(e.movementY))/2)]; // average x and y speeds
    }

    /* Average speed every tick */
    $: speed = calculateSpeed(tick); // Calculates speed every tick 
    function calculateSpeed(tick) {
        if (speed_data.length <= 1 && tick%20 != 0) return 0;
        
        var sum = speed_data.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        },0);
        console.log(sum)
        speed_data = [0];
        return sum
    }

    /*
        Stage 1
        Show video 1
    */
    $: playIntro(tick)
    function playIntro(tick) {
        if (speed < slowStart){
            slow_display = "block";
        }
        else {
            slow_display = "none";
        }
    }

    /*
        Stage 2
        Play video if speed is above 10
    */
    $: playSlow(tick)
    function playSlow(tick) {
        if (speed >= slowStart && speed < fastStart && mouseIsOver && atMiddle){
            slow_display = "block";
        }
        else {
            slow_display = "none";
        }
    }

    /*
        Stage 3
        Play video if speed is above 20
    */
    $: playFast(tick)
    function playFast(tick) {
        if (speed >= fastStart  && mouseIsOver && atMiddle){
            fast_display = "block";
        }
        else {
            fast_display = "none";
        }
    }


</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    class = "
        relative h-full w-full
    "
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
>
    <video src={intro.url} playsinline muted bind:this={intro_ref} bind:currentTime={time} bind:duration
        class="
            absolute top-0 left-0
            h-full w-full
            display: {intro_display};
        "
    />
    <video src={slow.url} autoplay loop playsinline muted
        class="
            absolute top-0 left-0
            h-full w-full
        "
        style = "
            display: {slow_display};
        "
    />
    <video src={fast.url} autoplay loop playsinline muted
        class="
            absolute top-0 left-0
            h-full w-full
        "
        style = "
            display: {fast_display};
        "
    />
    <p class="text-white">speed: {speed}</p>
</div>

<svelte:window on:mousemove={onMouseMove}/>