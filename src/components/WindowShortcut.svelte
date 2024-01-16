<script>
    export let ref;
    export let src = "";
</script>


<button on:click={() => ref.show()} class="w-28 flex flex-col items-center justify-center gap-y-1 text-xs px-1 hover:bg-stone-700 text-stone-50">
    <img alt="window shortcut" src={src} class="w-11/12 p-1 select-none"/>
    <p class="truncate w-full">
        <slot />
    </p>
</button>
