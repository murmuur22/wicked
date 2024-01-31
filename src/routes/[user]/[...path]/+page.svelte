<script>
    import { fly } from "svelte/transition";
    import Desktop from "$lib/components/Desktop.svelte";
    import NavItem from "$lib/components/NavItem.svelte";
    import Window from "$lib/components/Window.svelte"
    import WindowShortcut from "$lib/components/WindowShortcut.svelte";
    import { backOut } from "svelte/easing";
    
    export let data;
    let { subdirs, files } = data;

    let windowRefs = files.map(() => ""); // Create list of window references at same length of MAPS
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
        <div in:fly|global={{y: 100,duration:200,delay:100*(i+subdirs.length+1),easing:backOut}}>
            <WindowShortcut ref={windowRefs[i]} src="/icons/Light.png">
                {file.name}
            </WindowShortcut>
        </div>
    {/each}
</Desktop>