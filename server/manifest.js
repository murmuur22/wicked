const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["WORK/bullet_time/MAP.json","WORK/bullet_time/graphic.jpg","WORK/bullet_time/img1.jpg","WORK/bullet_time/img2.jpg","WORK/easter_egg/MAP.json","WORK/easter_egg/end_frame.jpeg","WORK/easter_egg/motion.mp4","WORK/halloween_lighting_test/MAP.json","WORK/halloween_lighting_test/bella.jpg","WORK/halloween_lighting_test/chris.jpg","WORK/halloween_lighting_test/fanny.jpg","WORK/halloween_lighting_test/jacob.jpg","WORK/halloween_lighting_test/kc.jpg","WORK/masked_encounter/MAP.json","WORK/masked_encounter/ROBF4938.jpg","WORK/masked_encounter/img1.jpg","WORK/masked_encounter/img2.jpg","WORK/masked_encounter/img3.jpg","WORK/out_of_gas/MAP.json","WORK/out_of_gas/lily1.jpg","WORK/out_of_gas/lily2.jpg","WORK/out_of_gas/lily_motion.gif","WORK/prince_tut/MAP.json","WORK/prince_tut/img1.jpg","WORK/prince_tut/img2.jpg","WORK/prince_tut/img3.jpg","WORK/prince_tut/img4.jpg","WORK/public_frenemy/MAP.json","WORK/public_frenemy/img1.jpg","WORK/public_frenemy/img2.jpg","WORK/public_frenemy/img3.jpg","WORK/public_frenemy/img4.jpg","WORK/tesla_in_space/TeslaPoster.jpg","favicon.png","fonts/bahnschrift/BAHNSCHRIFT 1.TTF","fonts/bahnschrift/BAHNSCHRIFT 10.TTF","fonts/bahnschrift/BAHNSCHRIFT 11.TTF","fonts/bahnschrift/BAHNSCHRIFT 12.TTF","fonts/bahnschrift/BAHNSCHRIFT 13.TTF","fonts/bahnschrift/BAHNSCHRIFT 14.TTF","fonts/bahnschrift/BAHNSCHRIFT 2.TTF","fonts/bahnschrift/BAHNSCHRIFT 3.TTF","fonts/bahnschrift/BAHNSCHRIFT 4.TTF","fonts/bahnschrift/BAHNSCHRIFT 5.TTF","fonts/bahnschrift/BAHNSCHRIFT 6.TTF","fonts/bahnschrift/BAHNSCHRIFT 7.TTF","fonts/bahnschrift/BAHNSCHRIFT 8.TTF","fonts/bahnschrift/BAHNSCHRIFT 9.TTF","fonts/bahnschrift/BAHNSCHRIFT.TTF","fonts/helvetica-neue/Helvetica Neu Bold.ttf","fonts/helvetica-neue/HelveticaNeue BlackCond.ttf","fonts/helvetica-neue/HelveticaNeue Light.ttf","fonts/helvetica-neue/HelveticaNeue Medium.ttf","fonts/helvetica-neue/HelveticaNeue Thin.ttf","fonts/helvetica-neue/HelveticaNeue.ttf","fonts/helvetica-neue/HelveticaNeueBd.ttf","fonts/helvetica-neue/HelveticaNeueHv.ttf","fonts/helvetica-neue/HelveticaNeueIt.ttf","fonts/helvetica-neue/HelveticaNeueLt.ttf","fonts/helvetica-neue/HelveticaNeueMed.ttf","fonts/sometype-mono/SometypeMono-Bold.ttf","fonts/sometype-mono/SometypeMono-BoldItalic.ttf","fonts/sometype-mono/SometypeMono-Italic.ttf","fonts/sometype-mono/SometypeMono-Medium.ttf","fonts/sometype-mono/SometypeMono-MediumItalic.ttf","fonts/sometype-mono/SometypeMono-Regular.ttf","fonts/sometype-mono/SometypeMono-SemiBold.ttf","fonts/sometype-mono/SometypeMono-SemiBoldItalic.ttf","fonts/terminal-grotesque/terminal-grotesque.ttf","fonts/vcr-osd-mono/VCR_OSD_MONO_1.001.ttf","icons/logowordmark_black.png","icons/logowordmark_white.png","icons/logowordmark_white.svg","icons/wordmark.svg","icons/wordmark_white.svg"]),
	mimeTypes: {".json":"application/json",".jpg":"image/jpeg",".jpeg":"image/jpeg",".mp4":"video/mp4",".gif":"image/gif",".png":"image/png",".TTF":"font/ttf",".ttf":"font/ttf",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.e3MqVls5.js","app":"_app/immutable/entry/app.DffvLrmj.js","imports":["_app/immutable/entry/start.e3MqVls5.js","_app/immutable/chunks/scheduler.7mXBUu_C.js","_app/immutable/chunks/singletons.GghSz-0G.js","_app/immutable/chunks/index.g3sMKgk0.js","_app/immutable/entry/app.DffvLrmj.js","_app/immutable/chunks/scheduler.7mXBUu_C.js","_app/immutable/chunks/index.LzOAh-iM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-YUbD3Nyf.js')),
			__memo(() => import('./chunks/1-CK3DFyp_.js')),
			__memo(() => import('./chunks/2-tk_PsHi9.js')),
			__memo(() => import('./chunks/3-w2OCSMyp.js')),
			__memo(() => import('./chunks/4-sqDh9mNH.js')),
			__memo(() => import('./chunks/5-nCKQh_P5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/cgi",
				pattern: /^\/cgi\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/environmental",
				pattern: /^\/environmental\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/studio",
				pattern: /^\/studio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
