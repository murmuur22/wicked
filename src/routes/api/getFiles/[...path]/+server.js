import { error, json } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export async function GET({ params }) {
	let slug = params.path;

	let directory;
	let files;

	try {
		directory = await prisma.directory.findUniqueOrThrow({
			where: {
				path: "/" + slug,
			},
		});
	} catch (err) {
		throw error(404, "Directory not found");
	}

	files = await prisma.file.findMany({
		where: {
			parentDirId: directory.id,
		},
	});

	return json(files);
}
