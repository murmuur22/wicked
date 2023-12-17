<script>
    export let forward = "/";
    export let backward = "/";

    let forward_time = 0;
    let backward_time = 0;

    let forward_display = "none";
    let backward_display = "none";

    function handleMouseOver() {
        forward_time = 0;
        backward_display = "none";
    }
    function handleMouseOut() {
        backward_time = 0;
        backward_display = "block";
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
    <video src={forward} playsinline muted
        class="
            h-full w-full
        "
        on:mouseover={(e) => {
            e.target.play();
        }}
        bind:currentTime={forward_time}
    />
    <video src={backward} autoplay playsinline muted
        class="
            absolute
            top-0 left-0
            h-full w-full
        "
        style="
            display: {backward_display};
        "
        bind:currentTime={backward_time}
    />
</div>
