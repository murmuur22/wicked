import { error, json } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import { exclude } from "$lib/utils/prisma-helpers";

export async function GET({ params }) {
	let slug = params.user;
	let user;

	user = await prisma.user.findUniqueOrThrow({
		where: {
			userAuthToken: slug,
		},
	});
	if (!user) {
		throw error(404, "User not found");
	}

	// exclude password hash from returned user
	const userWithoutPassword = exclude(user, ["passwordHash"]);

	return json(userWithoutPassword);
}
