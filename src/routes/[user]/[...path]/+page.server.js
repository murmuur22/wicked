/** @type {import('./$types').PageServerLoad} */
import log from "$lib/utils/log";

export async function load({ fetch, params }) {
	let path = !(params.path.length === 0) ? `${params.user}/${params.path}` : params.user;

	// get list of subdirectories in current directory
	const subdirsResponse = await fetch(`/api/getSubdirs/${path}`);
	const subdirs = await subdirsResponse.json();

	// get list of files in current directory
	const filesResponse = await fetch(`/api/getFiles/${path}`);
	const files = await filesResponse.json();

	return { subdirs, files };
}

export const actions = {
	/* Rename file action */
	renameFile: async ({ fetch, cookies, request }) => {
		// get form data
		const formData = await request.formData();
		const newName = String(formData.get("newName"));
		const path = String(formData.get("path"));

		const myHeaders = new Headers();
		myHeaders.append("authToken", cookies.get("session"));

		const options = {
			method: "POST",
			headers: myHeaders,
		};

		await fetch(`/api/renameFile?newName=${newName}&path=${path}`, options);
	},
};
