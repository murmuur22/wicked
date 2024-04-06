<script>
    import '../app.css'

    /* Add Vercel analytics */
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';

    /* Add Vercel speed insights */
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
    injectSpeedInsights()

    inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
    <!-- You can change icon sets according to your taste. Change `class` value in `contextItems` above to represent your icons. -->
    <!-- <link rel="stylesheet" href="/icon/css/mfglabs_iconset.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<slot/>
