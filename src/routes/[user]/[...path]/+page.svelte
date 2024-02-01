<script>
    import { fly } from "svelte/transition";
    import Desktop from "$lib/components/Desktop.svelte";
    import NavItem from "$lib/components/NavItem.svelte";
    import Window from "$lib/components/Window.svelte"
    import WindowShortcut from "$lib/components/WindowShortcut.svelte";
    import Showcase from "$lib/components/showcase/Showcase.svelte";
    import { backOut } from "svelte/easing";
    import { onMount } from "svelte";
    
    export let data;
    let { subdirs, files } = data;

    let windowRefs = files.map(() => ""); // Create list of window references at same length of MAPS

    let screen = {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
    };

    onMount(()=>{
        console.log(screen)
    });
</script>

<Desktop>
    {#each subdirs as dir,i}
        <div in:fly|global={{y: 100,duration:200,delay:100*(i+1),easing:backOut}}>
            <NavItem dest={dir.path}>
                {dir.name}
            </NavItem>
        </div>
    {/each}
    {#each files as file,i}
        <div in:fly|global={{y: 100,duration:200,delay:100*(i+(subdirs.length+1)),easing:backOut}}>
            <WindowShortcut ref={windowRefs[i]} src={file.icon}>
                {file.name}
            </WindowShortcut>
        </div>
    {/each}
</Desktop>

{#each files as file, i}
<Window title={file.map.content.title} bind:this={windowRefs[i]} delay={200*(i+1)} x={file.map.size.x} y={file.map.size.y} screen={screen} >
    <Showcase type={file.type} map={file.map} />
</Window>
{/each}

