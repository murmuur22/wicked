<script>
    import { onMount } from 'svelte';

    export let content;

    /* Get content for each stage */
    let intro = content[0]; // Must be a video that plays forward and backward with the still frame in the middle
    let slow = content[1];
    let fast = content[2];


    /* Stage 1: Handle Intro Sequence */
    let intro_ref;
    let time;
    let duration;
    let mouseIsOver = false;
    $: inverseTime = duration - time;
    const playIntro = () => {
        mouseIsOver = true;
        intro_ref.play();
    }
    const playOutro = () => {
        mouseIsOver = false;
        time = inverseTime;
        intro_ref.play();
    }
    const playing = (time) => {
        if (time >= duration/2 && mouseIsOver){ // THIS WILL EXECUTE IF THE MOUSE COMES BACK IN, PAUSING THE VIDEO AT THE WRONG TIME
            intro_ref.pause();
        }
    }
    $: playing(time);



    /* Handelers */
    const handleMouseOver = (e) => { // if mouse is over element
        playIntro();
    }

    const handleMouseOut = (e) => { // if mouse leaves element
        playOutro();
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
        "
    />
    <video src={slow.url} autoplay loop playsinline muted
        class="
            absolute top-0 left-0
            h-full w-full
            hidden
        "
    />
    <video src={fast.url} autoplay loop playsinline muted
        class="
            absolute top-0 left-0
            h-full w-full
            hidden
        "
    />
</div>