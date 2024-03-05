<script>
    import Filmstrip from "./basic/Filmstrip.svelte";
    import Image from "./basic/Image.svelte";
    import Embed from "./basic/Embed.svelte";

    export let map;
    export let type;
    
</script>

{#if type == "Filmstrip"}
    <Filmstrip content={map.content}/>
{:else if type == "Image"}
    <Image content={map.content}/>
{:else if type == "Embed"}
    <Embed content={map.content} />
{/if}
