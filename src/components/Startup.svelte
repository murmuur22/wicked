<script>
    import { onMount } from 'svelte'; 
    import log from '$lib/data/startupLog';
    import randInt from '$lib/functions/randInt'

    let start_date = new Date();

    var date = new Date();
    $: time = Math.abs(date.getMinutes() - start_date.getMinutes()).toString().padStart(2, '0') + ':' + Math.abs(date.getSeconds() - start_date.getSeconds()).toString().padStart(2, '0') + ':' + Math.round(Math.abs(date.getMilliseconds() - start_date.getMilliseconds()) * 0.1).toString().padStart(2, '0');

    let shown_log = []

    // Recursive loop function
    var i = 0;
    let finished = false;
    function logLoop() {
        let delay = [0,50,100,800,0,50,100,0,0,0,0,0,0,0,0,0,0,0,50,50,50,50,500,50]
        let choice = randInt(0,delay.length)
        date = new Date();
        setTimeout(function() {
            shown_log = [...shown_log, { 'message': log[i], 'time': time}];
            i++;
            if (i == log.length) {
                shown_log = [...shown_log, { 'message': `System boot completed in ${date.getSeconds() - start_date.getSeconds()}.${Math.round(Math.abs(date.getMilliseconds() - date.getMilliseconds()) * 0.1)} seconds.`, 'time': time}];
                finished = true;
                return;
            }
            logLoop();
        }, delay[choice])
    }

    onMount(() => {
        logLoop();
    });
    

</script>

<div class="flex flex-col absolute bottom-0 left-0">
{#each shown_log as item}
    <p class='text-white text-xs flex-none'>[{item.time}] {item.message}</p>
{/each}
</div>
