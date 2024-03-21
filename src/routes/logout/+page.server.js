import { redirect } from "@sveltejs/kit";

export const load = async () => {
	// endpoint only needed for api so redirect
	throw redirect(302, "/");
};

export const actions = {
	default({ cookies }) {
		// eat the session cookie
		cookies.set("session", "", {
			path: "/",
			expires: new Date(0),
		});

		// redirect the user
		redirect(302, "/");
	},
};
