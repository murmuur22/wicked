import { error, json } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export async function POST({ request, url }) {
	// Get headers
	const authToken = request.headers.get("authToken");
	console.log(authToken);

	// check if authToken exists
	if (!authToken) {
		throw error(401, "Unauthorized: no authetication token found");
	}

	// validate AuthToken
	try {
		await prisma.user.findUniqueOrThrow({
			where: {
				userAuthToken: authToken,
			},
		});
	} catch (err) {
		throw error(401, "Unauthorized: invalid authentication token");
	}

	// Get data
	const path = url.searchParams.get("path");
	const newName = url.searchParams.get("newName");
	const newPath = [...path.split("/").slice(0, -1), newName].join("/");

	// Update filename
	const updateFilename = await prisma.file.update({
		where: {
			path: path,
		},
		data: {
			name: newName,
			path: newPath,
		},
	});
	console.log(updateFilename);

	return json({ message: "Hello" }, { status: 200 });
}
