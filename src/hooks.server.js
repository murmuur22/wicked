import log from '$lib/utils/log';

export async function handle({ event, resolve }) {
    log.bold(`* New request being made from ${event.url.pathname}`);
    log.plain('...loading page')
    const response = await resolve(event);

    log.bold(`* Page has finished loading`);
    return response
  }
  