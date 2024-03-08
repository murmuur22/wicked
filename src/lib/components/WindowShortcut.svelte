<script>
    import ContextMenu from "$lib/components/ContextMenu.svelte";



    export let ref;
    export let src = "";


    /* 
        Context menu controller 
    */
    function test() {
        console.log("hello");
    }

    let contextMenu;
    let contextItems = [
        {
            'name': 'open',
            'onClick': ()=>{ref.show()},
            'displayText': "open",
            'class': 'fa-solid fa-square'
        },
        {
            'name': 'edit',
            'onClick': test,
            'displayText': "new folder",
            'class': 'fa-solid fa-pen-to-square'
        },
        {
            'name': 'rename',
            'onClick': test,
            'displayText': "rename",
            'class': 'fa-solid fa-i-cursor'
        },
        {
            'name': 'hr'
        },
        {
            'name': 'delete',
            'onClick': test,
            'displayText': "delete",
            'class': 'fa-solid fa-trash warning'
        }
    ];

</script>


<button on:contextmenu|preventDefault={(e) => {contextMenu.show(e)}} on:click={() => ref.show()} class="w-20 flex flex-col items-center justify-center gap-y-1 text-xs px-1 hover:bg-stone-700 text-stone-50">
    <img alt="window shortcut" src={src} class="w-11/12 p-1 select-none"/>
    <p class="truncate w-full">
        <slot />
    </p>
</button>

<ContextMenu bind:contextMenu bind:contextItems />