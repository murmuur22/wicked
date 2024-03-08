<script>
    import { slide } from "svelte/transition";

    // pos is cursor position when right click occur
    let pos = { x: 0, y: 0 }
    // menu is dimension (height and width) of context menu
    let menu = { h: 0, y: 0 }
    // browser/window dimension (height and width)
    let browser = { h: 0, y: 0 }
    // showMenu is state of context-menu visibility
    let showMenu = false;

    export let contextItems
    export const contextMenu = {
        show (e) {
            showMenu = true;
            browser = {
                w: window.innerWidth,
                h: window.innerHeight
            };
            pos = {
                x: e.clientX,
                y: e.clientY
            };
            // If bottom part of context menu will be displayed
            // after right-click, then change the position of the
            // context menu. This position is controlled by `top` and `left`
            // at inline style. 
            // Instead of context menu is displayed from top left of cursor position
            // when right-click occur, it will be displayed from bottom left.
            if (browser.h -  pos.y < menu.h)
                pos.y = pos.y - menu.h;
            if (browser.w -  pos.x < menu.w)
                pos.x = pos.x - menu.w;
        },
        hide () {
            // To make context menu disappear when
            // mouse is clicked outside context menu
            showMenu = false;
        }
    }

    function getContextMenuDimension(node){
        // This function will get context menu dimension
        // when navigation is shown => showMenu = true
        let height = node.offsetHeight
        let width = node.offsetWidth
        menu = {
            h: height,
            w: width
        }
    }

    
    
</script>
<style lang="postcss">

    .navbar ul li button:hover > i.warning{
        color: crimson;
    }
    
</style>

{#if showMenu}
<nav on:contextmenu|preventDefault in:slide={{duration: 40*contextItems.length}} use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px" class="z-[150]">
    <div class="navbar inline-flex flex-col bg-stone-50 text-sm overflow-hidden">
        <ul class="m-1 text-stone-950 font-body">
            {#each contextItems as item}
                {#if item.name == "hr"}
                    <hr class="border-b-1 border-stone-400 my-[5px]">
                {:else}
                    <li class="block list-none w-[1fr]">
                        <button on:click={item.onClick} class="pr-6 hover:bg-stone-500 w-full text-left">
                            <i class={`${item.class} px-2`} /> {item.displayText}
                        </button>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</nav>
{/if}

<svelte:window on:click={contextMenu.hide}/>

