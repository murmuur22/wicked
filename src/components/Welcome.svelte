<script>
    import { fade, blur } from 'svelte/transition'; 
    import { linear } from 'svelte/easing';

    const bgcolor = (
        node,
        {
            delay = 0,
            duration = 400,
            easing = linear,
            color = "rgb(250 250 249)",
        }
    ) => {
        const style = getComputedStyle(node);
        const f = style.filter === 'none' ? '' : style.filter;

        return {
            delay,
            duration,
            easing,
            css: (t, u) => {
                return `background-color: ${color};`
            }
        }
    }


</script>
   

<div
    in:blur={{delay: 950}}
    class="
        w-full h-full
        bg-[radial-gradient(rgb(68,64,60)_1px,_transparent_0)] bg-[length:25px_25px]        
    "
/>

<div
    out:blur
    class="absolute inset-0 flex items-center justify-center flex-col text-center 
    z-[100]"
>
    <div
        in:bgcolor={{duration: 1000}}
        class="border-stone-50 border-2 p-5 bg-stone-950"
    >
        <img src="/icons/wordmark_white.svg" alt="logo/wordmark" class="px-10 py-5 rounded-sm select-none w-full"/>
        <!-- <h1 class="text-stone-50 text-7xl font-body">wicked.earth</h1> -->
    </div>
</div>