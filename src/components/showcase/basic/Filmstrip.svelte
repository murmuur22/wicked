<script>
    import { windows } from '../../../utlity/stores.js';

    export let content;

    let curr_image = 0;

</script>

<div class="flex flex-col gap-2">
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
