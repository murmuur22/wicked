<script>
    import { scale } from "svelte/transition";

	let showModal; // boolean

	export function show() {
		showModal = true;
	}


	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();

</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	transition:scale
	bind:this={dialog}
	on:close={() => showModal = false}
	on:click|self={() => dialog.close()}
    class="
        max-w-4xl rounded-md
        bg-stone-50 text-stone-950
    "
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="p-4">
        <div class="flex justify-between border-b-2 border-stone-400 mb-4">
            <slot name="header" />
			<button on:click={() => dialog.close()}>✖</button>
        </div>
		<slot />
	</div>
</dialog>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.1s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>