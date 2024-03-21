import { redirect } from "@sveltejs/kit";

import log from "$lib/utils/log";

export const load = async ({ locals }) => {
	// if not logged in redirect to home
	if (!locals.user) {
		log.warning("Please sign in");
		log.plain("redirecting to '/'");
		throw redirect(302, "/");
	}

	// if not admin or higher redirect to home
	if (locals.user.role !== "Admin") {
		log.error(`Restricted access for ${locals.user.role}`);
		log.plain("redirecting to '/'");
		throw redirect(302, "/");
	}
};
