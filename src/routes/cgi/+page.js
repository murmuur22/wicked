export const load = async ({ fetch }) => {

    let MAP_REFS = [
        "/WORK/easter_egg/MAP.json",
        "/WORK/easter_egg_images/MAP.json",
        "/WORK/tesla_in_space/MAP.json",
        "/WORK/ectoplasma/MAP.json"
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