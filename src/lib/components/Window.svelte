<script>
    /* IMPORT */
    import { onMount } from 'svelte';
    import { windows } from '$lib/utils/stores.js';
    import { scale } from 'svelte/transition';
    import randInt from '$lib/functions/randInt.js'



    /* PROPS */
    export let title = "";
    export let visible = true;
    export let delay = 300;
    export let x = 4;
    export let y = 5;
    export let screen = {
        innerWidth: 600,
        innerHeight: 300
    };

    let scaler = randInt(screen.innerHeight*0.15,screen.innerHeight*0.2)

    let dimensions = {
        x: randInt(100,screen.innerWidth*0.8),
        y: randInt(250,screen.innerHeight*0.3),
        width: x*scaler,
        height: y*scaler,
    }
    let left = dimensions.x;
    let top = dimensions.y;
    let width = dimensions.width;
	let height = dimensions.height;

    let padding = 20;
    let innerWidth;
	let innerHeight;

	let dragging = false;
    let resizing = false;

    let windowID;

    let display = "flex";

    

    // zIndex updates when $windows changes
    $: zIndex = $windows.indexOf(windowID)
	
    /*
        On mouse move resize or drag window
    */
	function onMouseMove(e) {
        let hDirection = Math.sign(e.movementX);
        let inLeftBound = left > padding || hDirection == 1;
        let inRightBound = left + width < innerWidth-padding || hDirection == -1;

        let vDirection = Math.sign(e.movementY);
        let inTopBound = top > padding || vDirection == 1;
        let inBottomBound = top + height < innerHeight-padding || vDirection == -1;

		if (dragging) {
            if (inLeftBound && inRightBound) {
                left += e.movementX;
            }
            if (inTopBound && inBottomBound) {
                top += e.movementY;
            }
		}

        if(resizing) {
            height += e.movementY;
            width += e.movementX;
        }
	}


	
    /*
        On mount create windowID and add it to $windows store
            - if $windows is empty create id number 1

        On unmount remove windowID from $windows
    */
    onMount(() => {
        if ($windows.length > 0) {
            $windows = [...$windows, Number($windows.slice(-1)) + 1]
        }
        else {
            $windows = [1]
        }

        windowID = $windows.slice(-1)[0]

		return () => {
			$windows = [...$windows.filter(item => item !== windowID)]
		};
	});

    /* 
        Window controller functions
    */
    export function show() { // Makes window visible
        visible = true;
        $windows = [...$windows.filter(item => item !== windowID), windowID];  
    };
    export function hide() { // Hides window
        visible = false;
    };

</script>


<svelte:window on:mouseup={() => {dragging = false; resizing = false;}} on:mousemove={onMouseMove} bind:innerWidth={innerWidth} bind:innerHeight={innerHeight} />
{#if visible}
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    in:scale|global={{delay:delay,duration:150}} out:scale={{duration:150}}
    on:mousedown={() => {
        /* On click move windowID to front of $windows */
        $windows = [...$windows.filter(item => item !== windowID), windowID];  
    }}
    style="
        left: {left}px; top: {top}px; 
        width: {width}px; height: {height}px;
        z-index: {zIndex};
        display: {display};
    "
    class="
        bg-stone-950 border-stone-50 border-2 rounded-sm
        absolute overflow-hidden
        flex flex-col justify-between
    "
>
    <div
        on:mousedown={() => {dragging = true;}}
        on:dblclick={() => {console.log("maximizing")}}
        class="
            sticky flex justify-between items-center w-full
            bg-stone-950 border-stone-50 
            border-b-2 h-5 cursor-move select-none
        "
    >

        <p class="text-stone-50 font-display px-1 pl-2">{title}</p>
        <div class="bg-stone-700 relative flex justify-around items-center border-l-2 w-6">
            <button on:click={hide} class="text-stone-50 h-full w-full text-xs font-terminal">✖</button>
        </div>
    </div>
    <div class="overflow-y-auto overscroll-contain w-full h-full">
        <slot />
    </div>
    <button 
            on:mousedown={() => {resizing = true;}}
            class="
                absolute bottom-0 right-0
                arrow
                cursor-nwse-resize
                w-0 h-0
            "
    />
</div>
{/if}

<style>
    .arrow {
        border-left: 6px solid transparent; 
        border-top: 6px solid transparent; 
            
        border-bottom: 6px solid rgb(250 250 249);
        border-right: 6px solid rgb(250 250 249);
    } 
</style>