<script>
    export let content;

    let video = content[0];

    let vidref;
    let time;
    let duration;
    $: backward_time = duration - time;

    let mouseIsOver = false;

    function handleMouseOver() {
        console.log("in");
        mouseIsOver = true;
        vidref.play();
    }
    function handleMouseOut() {
        console.log("out");
        mouseIsOver = false;
        time = backward_time;
        vidref.play();
    }
    
    $: playing(time)
    function playing(time) {
        if (time >= duration/2 && mouseIsOver){
            vidref.pause();
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
    <video src={video.url} playsinline muted
        class="
            h-full w-full
        "
        bind:this={vidref}
        bind:currentTime={time}
        bind:duration
    />
</div>
