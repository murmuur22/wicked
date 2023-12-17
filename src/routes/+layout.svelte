<script>
    import "../app.css";
    import Startup from "../components/Startup.svelte";
    import Welcome from "../components/Welcome.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Icon from "../components/Icon.svelte";

    /* Get date & time */
    let date = new Date();
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $: month_day = dayNames[date.getDay()] + " " + monthNames[date.getMonth()] + " " + date.getDate();
    $: time = Math.abs(date.getHours()).toString().padStart(2, '0') + ':' + Math.abs(date.getMinutes()).toString().padStart(2, '0') + ':' + Math.abs(date.getSeconds()).toString().padStart(2, '0');


    
    let stage = 'startup'; // Start Sequence
	onMount(() => {

        /* Update Date ever second */
        const interval = setInterval(() => {
			date = new Date();
		}, 1000);

        /* Run boot sequence on first load*/
		setTimeout(() => {
            stage = 'welcome';
            setTimeout(() => {
                stage = 'main';
            }, 2200)
        }, 3000)

        return () => {
			clearInterval(interval);
		};
	});

    /* Create nav bar */
    $: currPage = $page.url.pathname.split('/');
    $: nav = currPage.slice(1)



</script>

{#if stage == 'startup'}
<div class="absolute h-full w-full">
    <Startup />
</div>
{:else if stage == 'welcome'}
<div class="
    absolute w-full h-full
    opacity-0
    bg-[radial-gradient(rgb(68,64,60)_1px,_transparent_0)] bg-[length:25px_25px]
    animate-[welcomeBackground_1s_step-start_forwards] animation-delay-1200
" />
<div class="absolute h-full w-full">
    <Welcome />
</div>
{:else if stage == 'main'}
<div class="
    absolute w-full h-full
    bg-[radial-gradient(rgb(68,64,60)_1px,_transparent_0)] bg-[length:25px_25px]
" />
<div class="absolute h-full w-full">
    <slot />
</div>


<div 
    class="
        absolute top-0 left-0 w-full
        flex justify-between
        bg-stone-700 px-5
        text-stone-50
        pt-1
        z-[100]
    "
>
    <div class="flex">
        <a href="/" class="group mr-3">
            <Icon name="home" class="w-5 group-hover:scale-125"/>
        </a>
        {#each nav as item,i}
            <a href={"/"+nav.slice(0,i+1).toString().replace(",","/")} class="hover:underline underline-offset-1">/{item}</a>
        {/each}

    </div>
    <div class="flex gap-5">
        <p>{month_day}</p>
        <p>{time}</p>
    </div>
</div>
{/if}


