<script>
    import Filmstrip from "./basic/Filmstrip.svelte";
    import HoverPlayer from "./interactive/HoverPlayer.svelte";

    export let src = "";
    export let windowID;

    const loadJson = (name) =>
        fetch(name)
            .then((res) => {
                if (!res.ok) throw new Error('Fetch error');
                return res;
            })
            .then((res) => res.json());

    $: promise = src && loadJson(src);

</script>


{#if promise}
{#await promise then object}
    {#if object.type == "filmstrip"}
        <Filmstrip content={object.content} {windowID}/>
    {:else if object.type == "hover_player"}
        <HoverPlayer />
    {/if}
{:catch err}
    <pre>{err}</pre>
{/await}
{/if}