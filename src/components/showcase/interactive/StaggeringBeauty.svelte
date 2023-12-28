<script>
    import { onMount } from 'svelte';

    

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
    <video src={intro.url} playsinline muted
        class="
            absolute top-0 left-0
            h-full w-full
        "
        style = "
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