import prisma from "$lib/prisma";
import log from "$lib/utils/log";

export async function handle({ event, resolve }) {
	log.bold(`New request being made from ${event.url.pathname}`);
	log.plain("loading user session");

	// get session cookies from browser
	const session = event.cookies.get("session");

	// check if session exists
	if (!session) {
		log.plain("no user session found");
		return await resolve(event);
	}
	log.plain(`session found -> ${session}`);

	// get user from database
	const user = await prisma.user.findUnique({
		where: { userAuthToken: session },
		select: { username: true, role: true },
	});

	if (user) {
		log.plain(`user found -> ${user.username}`);
		event.locals.user = {
			name: user.username,
			role: user.role,
		};
	}

	log.bold("Loading page");
	return await resolve(event);
}
