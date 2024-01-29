<script>
    import { blur } from "svelte/transition";

    export let key;
    export let duration = 300;
    export let delay = 100;
</script>

{#key key}
    <div
        in:blur={{duration, delay}}
        class="
            absolute
            w-full h-full
        "
    >
        <slot/>
    </div>
{/key}