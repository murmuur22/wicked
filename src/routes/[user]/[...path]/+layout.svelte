<script>
    import Startup from "$lib/components/Startup.svelte";
    import Welcome from "$lib/components/Welcome.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Icon from "$lib/components/Icon.svelte";

    import Modal from "$lib/components/Modal.svelte";
    import NavItem from "$lib/components/NavItem.svelte"
    import PageTransition from "$lib/components/PageTransition.svelte";

    /* Get date & time */
    let date = new Date();
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $: month_day = dayNames[date.getDay()] + " " + monthNames[date.getMonth()] + " " + date.getDate();
    $: time = Math.abs(date.getHours()).toString().padStart(2, '0') + ':' + Math.abs(date.getMinutes()).toString().padStart(2, '0') + ':' + Math.abs(date.getSeconds()).toString().padStart(2, '0');
    
    let do_startup = true; // Boolean
    let stage = "startup"; // Start Sequence
	onMount(() => {

        /* Update Date ever second */
        const interval = setInterval(() => {
			date = new Date();
		}, 1000);

        /* Run boot sequence on first load, if stage == startup */
        if (do_startup) {
            setTimeout(() => {
                stage = "welcome";
                setTimeout(() => {
                    stage = "main";
                }, 2500)
            }, 4000)
        }
        else{
            stage = "main"
        }

        /* on unmount */
        return () => {
            /* Clear date update interval */
			clearInterval(interval);
		};
	});

    /* Create nav bar */
    $: currPage = $page.url.pathname.split('/');
    $: nav = currPage.slice(1)


    let showModal; //Boolean
    let showAbout; //Boolean

</script>

<svelte:head>
    <!-- You can change icon sets according to your taste. Change `class` value in `contextItems` above to represent your icons. -->
    <!-- <link rel="stylesheet" href="/icon/css/mfglabs_iconset.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<meta property="og:title" content={$page.url.pathname.substring(1)} />

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
<PageTransition key={currPage} duration={300} delay={100}>
    <slot />
</PageTransition>


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
        <a href={"/"+nav.slice(0,1)} class="group mr-3 ">
            <i class="w-5 group-hover:scale-125 transition duration-75 ease-in-out fa-solid fa-house"/> 
        </a>
        {#each nav as item,i}
            {#if i == 0}
                <a href={"/"+nav.slice(0,i+1).toString().replace(",","/")} class="hover:underline underline-offset-1">~</a>
            {:else}
                <a href={"/"+nav.slice(0,i+1).toString().replace(",","/")} class="hover:underline underline-offset-1">/{item}</a>
            {/if}
        {/each}

    </div>
    <div class="flex gap-6">
        <div class="flex gap-3">
            <p>{month_day}</p>
            <p>{time}</p>
        </div>
    </div>
</div>
<div 
    class="
        absolute bottom-0 left-0 w-full
        flex items-center justify-center
        text-stone-50
        pb-1
        z-[101]
    "
>
    <button on:click={() => {showModal = true}} class="group flex flex-col items-center justify-center">
        <Icon name="dot_menu_y" class="group-hover:scale-125 transition duration-75 ease-in-out w-12" />
    </button>
</div>

<Modal bind:showModal >
	<h1 slot="header" class="font-display">
		Quick Nav
	</h1>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col">
            <h2>Pinned</h2>
            <div class="flex gap-5">
                <NavItem dest="/studio" color="dark">
                    Studio
                </NavItem>
                <NavItem dest="/cgi" color="dark">
                    CGI
                </NavItem>
                <NavItem dest="/environmental" color="dark">
                    Environmental
                </NavItem>
            </div>    
        </div> 
        <div class="flex flex-col border-t-2 border-stone-950">
            <div class="flex gap-5 justify-between">
                <a href="https://www.instagram.com/murmuur_/?next=%2F" target="_blank">instagram</a>
                <button on:click={() => {showAbout = true}}>about me</button>
            </div>    
        </div>    
    </div>
</Modal>
<Modal bind:showModal={showAbout}>
    <h1 slot="header" class="font-display">
		About me
	</h1>
    <div class="">
        TEXT BOX
    </div>
</Modal>

{/if}


