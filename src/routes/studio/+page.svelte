<script>
    import Window from "../../components/Window.svelte";
    import Showcase from "../../components/showcase/Showcase.svelte";
    import Desktop from "../../components/Desktop.svelte";
    import WindowShortcut from "../../components/WindowShortcut.svelte";
    import { fly } from "svelte/transition";
    import { backOut } from "svelte/easing";

    export let data;
    const { MAPS } = data;
    
    let windowRefs = MAPS.map(() => ""); // Create list of window references at same length of MAPS

</script>

<Desktop>
    {#each MAPS as MAP,i}
    <div in:fly|global={{y: 100,duration:200,delay:100*(i+1),easing:backOut}}>
        <WindowShortcut ref={windowRefs[i]} src={MAP.icon}>
            {MAP.title}
        </WindowShortcut>
    </div>
    {/each}
</Desktop>

{#each MAPS as MAP, i}
<Window title={MAP.title} bind:this={windowRefs[i]}>
    <Showcase type={MAP.type} content={MAP.content}/>
</Window>
{/each}