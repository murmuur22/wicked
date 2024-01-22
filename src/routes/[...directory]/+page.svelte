<script>
	import { page } from "$app/stores";
    import { fly } from "svelte/transition";
    import Window from "../../components/Window.svelte";
    import Showcase from "../../components/showcase/Showcase.svelte";
    import Desktop from "../../components/Desktop.svelte";
    import WindowShortcut from "../../components/WindowShortcut.svelte";
    import { backOut } from "svelte/easing";

    export let data;
    const { MAPS, slug } = data;
    
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
<Window title={MAP.title} bind:this={windowRefs[i]} width={600} height={400}>
    <Showcase type={MAP.type} content={MAP.content}/>
</Window>
{/each}