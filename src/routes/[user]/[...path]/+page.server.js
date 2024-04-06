/** @type {import('./$types').PageServerLoad} */
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
