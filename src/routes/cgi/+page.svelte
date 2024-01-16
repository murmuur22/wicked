<script>
    import Window from "../../components/Window.svelte";
    import Showcase from "../../components/showcase/Showcase.svelte";
    import Desktop from "../../components/Desktop.svelte";
    import WindowShortcut from "../../components/WindowShortcut.svelte";

    export let data;
    const { MAPS } = data;
    
    let windowRefs = MAPS.map(() => ""); // Create list of window references at same length of MAPS

</script>

<Desktop>
    {#each MAPS as MAP,i}
    <WindowShortcut ref={windowRefs[i]} src={MAP.icon}>
        {MAP.title}
    </WindowShortcut>
    {/each}
</Desktop>

{#each MAPS as MAP, i}
<Window title={MAP.title} bind:this={windowRefs[i]} width={600} height={400}>
    <Showcase type={MAP.type} content={MAP.content}/>
</Window>
{/each}