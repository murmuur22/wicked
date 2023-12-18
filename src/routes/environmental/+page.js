export const load = async ({ fetch }) => {

    let MAP_REFS = [
        "/WORK/out_of_gas/MAP.json",
        "/WORK/masked_encounter/MAP.json",
        "/WORK/prince_tut/MAP.json",
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
