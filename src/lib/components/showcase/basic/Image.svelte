<script>
    import { blur } from "svelte/transition";
    export let content;

</script>

<div class="flex flex-col gap-2">
    <img in:blur={{duration:300}} src={content.ref} alt={content.title} class="pointer-events-none select-none pt-5 px-5">
</div>
