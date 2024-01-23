
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    const dirsResponse = await fetch("/api/getSubdirs/root");
    const subdirs = await dirsResponse.json();

    const filesResponse = await fetch("/api/getFiles/root");
    const files = await filesResponse.json();

    return { subdirs, files }
}