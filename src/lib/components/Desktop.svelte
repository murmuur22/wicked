<script>
    import ContextMenu from "$lib/components/ContextMenu.svelte";


    /* 
        Context menu controller 
    */

    function test() {
        console.log("hello");
    }

    let contextMenu;
    let contextItems = [
        {
            'name': 'newFolder',
            'onClick': test,
            'displayText': "new folder",
            'class': 'fa-solid fa-folder-plus'
        },
        {
            'name': 'newFile',
            'onClick': test,
            'displayText': "new file",
            'class': 'fa-solid fa-plus'
        }
    ];

</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    on:contextmenu|preventDefault={(e) => {contextMenu.show(e)}}
    class="grid grid-flow-row auto-cols-min gap-x-16 gap-y-8 p-9 pt-16"
>
    <slot />
</div>

<ContextMenu bind:contextMenu bind:contextItems />