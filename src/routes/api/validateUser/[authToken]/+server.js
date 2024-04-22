import { error, json } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import { exclude } from "$lib/utils/prisma-helpers";

export async function GET({ params }) {
	let authToken = params.authToken;
	let user;

	try {
		user = await prisma.user.findUniqueOrThrow({
			where: {
				userAuthToken: authToken,
			},
		});
	} catch (error) {
		if (!user) {
			return json(
				{
					isValid: false,
				},
				{ status: 404 }
			); //TODO Check if this is proper error code for context
		}
	}

	// exclude password hash from returned user
	const userWithoutPassword = exclude(user, ["passwordHash", "userAuthToken"]);

	return json(
		{
			isValid: true,
			user: userWithoutPassword,
		},
		{ status: 200 }
	);
}
