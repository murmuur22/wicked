<script>
    import { windows } from '../../../utlity/stores.js';

    export let content;
    export let windowID;

    let curr_image = 0;

    function onKeyDown(e) {
		switch(e.keyCode) {
			case 37:
                curr_image = curr_image > 0 ? curr_image - 1 : 0;
				break;
			case 39:
                curr_image = curr_image < Object.keys(content).length ? curr_image + 1 : Object.keys(content).length;
				break;
		}
	}
</script>

<div class="flex flex-col gap-2 overflow-y-scroll">
    <img src={content[curr_image].url} alt={content[curr_image].title} class="rounded-sm pointer-events-none select-none pt-5 px-5">
    <p class="text-stone-50 text-center border-b-2 border-stone-700 mb-4">{content[curr_image].title}</p>
    <ul class="flex overflow-x-auto gap-4 px-5">
        {#each content as {type, title, url}, i}
        {#if i == curr_image}
        <li class="shrink-0 w-1/4 scale-90" id="item-{i}">
            <button class="opacity-60 border-2 border-stone-700 rounded-sm">
                <img src={url} alt={title} class="pointer-events-none select-none rounded-sm w-full"/>
            </button>
        </li>
        {:else}
        <li class="shrink-0 w-1/4 rounded-sm" id="item-{i}">
            <button on:click={() => {curr_image = i;}} class="hover:opacity-60 transition duration-100 ease-in-out w-full">
                <img src={url} alt={title} class="pointer-events-none select-none rounded-sm w-full"/>
            </button>
        </li>
        {/if}
        
        {/each}
    </ul>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />