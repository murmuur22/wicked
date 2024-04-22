<script>
    import { enhance } from '$app/forms';
    import { page } from "$app/stores";
    import ContextMenu from "$lib/components/ContextMenu.svelte";
    import Modal from "$lib/components/Modal.svelte";
    const user = $page.data.user;


    export let ref;
    export let src = "";
    export let name = "";
    export let ownerId;


    // give full access if user is admin or owner
    const hasAccess = (user && ((user.role === "Admin")||(user.id === ownerId))) ? true : false;


    /* Context menu controller */
    function test() {
        console.log("hello");
    }

    let renameModal;

    let contextMenu;
    let contextItems = (hasAccess) ? 
    [ // full options
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
            'onClick': ()=>{renameModal.show()},
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
    ] : [ // restricted options
        {
            'name': 'open',
            'onClick': ()=>{ref.show()},
            'displayText': "open",
            'class': 'fa-solid fa-square'
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

<Modal bind:this={renameModal} >
	<h1 slot="header" class="font-display">
		Rename
	</h1>

    <!-- DOESNT WORK BECAUSE IT IS IN COMPONENT -->
    <form 
        action="/api/renameFile" method="POST" use:enhance
        class="flex flex-col gap-2 text-xl"
    >
        <div class="flex flex-col gap-4">
            <label class="flex flex-col items-start justify-center">
                <input 
                    type="text" name="newName"
                    placeholder={name}
                    class="bg-stone-50 border-2 border-stone-400 rounded-md px-2
                    focus:outline-stone-700"
                />
            </label>
        </div>
        <input type="hidden" name="path" value={$page.url.pathname.split("/").slice(1).join("/")}>
        <input type="submit" value="enter"
            class="font-body w-2/3 self-center hover:bg-stone-700 cursor-pointer rounded-full bg-stone-950 text-stone-50 text-md"
        />
    </form>
</Modal>