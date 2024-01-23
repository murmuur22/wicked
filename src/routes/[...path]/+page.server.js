
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const dirsResponse = await fetch("/api/getSubdirs/"+params.path);
    const subdirs = await dirsResponse.json();

    const filesResponse = await fetch("/api/getFiles/"+params.path);
    const files = await filesResponse.json();

    return { subdirs, files }
}