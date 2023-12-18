export const load = async ({ fetch }) => {

    let MAP_REFS = [
        "/WORK/public_frenemy/MAP.json",
        "/WORK/halloween_lighting_test/MAP.json",
        "/WORK/bullet_time/MAP.json",
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