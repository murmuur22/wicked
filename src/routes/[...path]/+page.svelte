<script>
    import { fly } from "svelte/transition";
    import Desktop from "../../components/Desktop.svelte";
    import NavItem from "../../components/NavItem.svelte";
    import Window from "../../components/Window.svelte"
    import WindowShortcut from "../../components/WindowShortcut.svelte";
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

{#each files as file, i}
<Window title={file.name} bind:this={windowRefs[i]}>
    <div class="p-5 text-stone-50">
        <p class="">Hello welcome to my portfolio :). Thanks for visiting! This version of my site is still in development. Feel free to look around but know that some things may not work. For now please visit my old site to view my work.</p>
        <br>
        <span>click me {"->"} </span><a href="https://old.wicked.earth" target="_blank" class="text-display text-blue-400">old.wicked.earth</a>    
    </div>
</Window>
{/each}
