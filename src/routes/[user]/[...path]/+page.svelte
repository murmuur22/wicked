<script>
    import { backOut } from "svelte/easing";
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";
    
    import Desktop from "$lib/components/Desktop.svelte";
    import NavItem from "$lib/components/NavItem.svelte";
    import Window from "$lib/components/Window.svelte"
    import WindowShortcut from "$lib/components/WindowShortcut.svelte";
    import Showcase from "$lib/components/showcase/Showcase.svelte";

    
    export let data;
    let { subdirs, files } = data;

    let windowRefs = files.map(() => ""); // Create list of window references at same length of MAPS

    let screen = {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
    };

    /* Check if on mobile device by checking if userAgent contains android or iphone */
    let isMobile = () => {
        return /Android|iPhone/i.test(navigator.userAgent);
    };

    /* Get backlink */
    let backlink = $page.url.pathname.split("/").slice(0,-1).join("/");

</script>

{#if isMobile() == true} 
    <!-- THIS IS PLACEHOLDER CODE ... NEEDS REFACTORING -->
    <div
        class="h-screen w-screen flex flex-col p-9 pt-16 gap-4 overflow-y-scroll"
    >
        {#if backlink != ""}
        <!-- FIX SO THE TIMING DELAY IS PROPER ON HOME DIRECTORY -->
        <a
            in:fly|global={{x: 100,duration:200,delay:100,easing:backOut}}
            class="group h-8 flex flex-row items-center gap-2 text-xs text-stone-50 hover:text-stone-950 border-2 border-stone-50 bg-stone-950 hover:bg-stone-50 pl-2" href={backlink}
        >    
            <i class="fa-solid fa-arrow-turn-up scale-x-[-1]"></i>
            <h1>/..</h1>
        </a>
        {/if}
        {#each subdirs as dir,i}
            <a
                in:fly|global={{x: 100,duration:200,delay:100*(i+1+1),easing:backOut}}
                class="group h-8 flex flex-row items-center gap-2 text-xs text-stone-50 hover:text-stone-950 border-2 border-stone-50 bg-stone-950 hover:bg-stone-50 pl-2" href={dir.path}
            >    
                <svg class="stroke-0 h-2/4 fill-stone-50 group-hover:fill-stone-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.69 96">
                    <path class="cls-1 " d="m89.48,15.9h-41.97v-.11s-7.51-7.31-7.51-7.31c-.68-.66-1.59-1.03-2.54-1.03H7.83C3.51,7.45,0,10.95,0,15.28v65.62C0,84.88,3.23,88.1,7.21,88.1h82.28c3.98,0,7.21-3.23,7.21-7.21V23.11c0-3.98-3.23-7.21-7.21-7.21Z"/>
                </svg>
                <h1>/{dir.name}</h1>
            </a>
        {/each}
        {#each files as file,i}
            <div
                in:fly|global={{x: 100,duration:200,delay:100*(i+1),easing:backOut}}
                class="flex flex-col border-stone-50 bg-stone-950 border-2"
            >
                <Showcase type={file.type} map={file.map} />
                <div class="h-8 flex flex-row items-center gap-4 text-xs text-stone-950 border-t-2 border-stone-50 pl-2 bg-stone-50">
                    <h1>{file.name}</h1>
                </div>
            </div>
        {/each}
    </div>
{:else}
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
                <WindowShortcut ref={windowRefs[i]} src={file.icon} name={file.name} ownerId={file.ownerId}>
                    {file.name}
                </WindowShortcut>
            </div>
        {/each}
    </Desktop>

    {#each files as file, i}
    <Window title={file.name} bind:this={windowRefs[i]} delay={200*(i+1)} x={file.map.size.x} y={file.map.size.y} screen={screen} >
        <Showcase type={file.type} map={file.map} />
    </Window>
    {/each}
{/if}
