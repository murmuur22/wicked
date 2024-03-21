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



<slot/>
