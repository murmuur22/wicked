<script>
    import Filmstrip from "./basic/Filmstrip.svelte";
    import StaggeringBeauty from "./interactive/StaggeringBeauty.svelte";

    export let content;
    export let type;
    
</script>


{#if type == "filmstrip"}
    <Filmstrip content={content}/>
{:else if type == "staggering_beauty"}
    <StaggeringBeauty content={content}/>
{:else if type == "embed"}
    <StaggeringBeauty content={content}/>
{/if}
