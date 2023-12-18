export const load = async ({ fetch }) => {

    let MAP_REFS = [
        "/WORK/easter_egg/MAP.json"
    ];

    let MAPS = [];

    let res;
    for (let i = 0; i < MAP_REFS.length; i++) {
        res = await fetch(MAP_REFS[i]);
        MAPS.push(await res.json());
    }

    return {
        MAPS
    }
}