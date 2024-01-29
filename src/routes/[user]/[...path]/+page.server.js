
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {

    let path = !(params.path.length===0) ? `${params.user}/${params.path}` : params.user;

    const dirsResponse = await fetch(`/api/getSubdirs/${path}`);
    const subdirs = await dirsResponse.json();

    const filesResponse = await fetch(`/api/getSubdirs/${path}`);
    const files = await filesResponse.json();

    return { subdirs, files }
}