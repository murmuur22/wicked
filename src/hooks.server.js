import log from '$lib/utils/log';

export async function handle({ event, resolve }) {
    log.bold(`* New request being made from ${event.url.pathname}`);
    log.plain('...loading')
    const response = await resolve(event);

    log.bold(`* ✅ Request has finished loading`);
    return response
  }
  