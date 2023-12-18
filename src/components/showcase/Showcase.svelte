<script>
    import Filmstrip from "./basic/Filmstrip.svelte";
    import HoverPlayer from "./interactive/HoverPlayer.svelte";

    export let content;
    export let type;
    
</script>


{#if type == "filmstrip"}
    <Filmstrip content={content}/>
{:else if type == "hover_player"}
    <HoverPlayer content={content}/>
{/if}
