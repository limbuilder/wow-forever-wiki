globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs").then((n) => n.h)) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"fb6b-MClIyhPP504rd7EL0CXPSj2O4QM\"",
		"mtime": "2026-09-15T01:07:10.918Z",
		"size": 64363,
		"path": "../public/apple-touch-icon.png"
	},
	"/favicon-48x48.png": {
		"type": "image/png",
		"etag": "\"15a1-p5N7XBD1btbdT72W+c4wLG6ba1E\"",
		"mtime": "2026-09-15T01:07:10.918Z",
		"size": 5537,
		"path": "../public/favicon-48x48.png"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"27cc-vgTcEWu2vPs0rplY0YGHSqLhGAU\"",
		"mtime": "2026-09-15T01:07:10.918Z",
		"size": 10188,
		"path": "../public/favicon.ico"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"a63-iiUe3AC0JJwVpqwFMPlHoparZCw\"",
		"mtime": "2026-09-15T01:07:10.918Z",
		"size": 2659,
		"path": "../public/favicon.png"
	},
	"/imgs/hero-forever.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a128-xSmhj5eslds2AwEiDYnAvX+ppzE\"",
		"mtime": "2026-09-15T01:07:10.917Z",
		"size": 106792,
		"path": "../public/imgs/hero-forever.jpg"
	},
	"/favicon-32x32.png": {
		"type": "image/png",
		"etag": "\"a63-iiUe3AC0JJwVpqwFMPlHoparZCw\"",
		"mtime": "2026-09-15T01:07:10.918Z",
		"size": 2659,
		"path": "../public/favicon-32x32.png"
	},
	"/favicon-16x16.png": {
		"type": "image/png",
		"etag": "\"33a-H/vA+yY5w9yQQkF5gpBJgVFOw/o\"",
		"mtime": "2026-09-15T01:07:10.918Z",
		"size": 826,
		"path": "../public/favicon-16x16.png"
	},
	"/assets/DialogTitle-DrBaOFrm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e1f-JcPXv0wfUvqGgU7FdZdDcwp2pDo\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 7711,
		"path": "../public/assets/DialogTitle-DrBaOFrm.js"
	},
	"/assets/Separator-DQ1p_AAZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d-wbtbNwvX/0VtHO34kqGU4ZbZHbc\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 317,
		"path": "../public/assets/Separator-DQ1p_AAZ.js"
	},
	"/assets/_slug-B_D91BwP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"755-JxFmbwUFkKOzVdvMYSk0tt03pKY\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 1877,
		"path": "../public/assets/_slug-B_D91BwP.js"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"718e3-zmp3WuNHy8SebZIMilR8+QD5dJ0\"",
		"mtime": "2026-09-15T01:07:10.923Z",
		"size": 465123,
		"path": "../public/logo.png"
	},
	"/assets/app-layout-fJbqYRTn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"88c1-9keSPoEgJkn1kPlKkv8lYUH56h4\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 35009,
		"path": "../public/assets/app-layout-fJbqYRTn.js"
	},
	"/assets/admin-UPPnnGj1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ea-1hF7kMQl3OWXbe+N+2l6yaO+q7A\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 1514,
		"path": "../public/assets/admin-UPPnnGj1.js"
	},
	"/assets/auth-callback-DDduRszW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"529-WuOjEkexjFKGS4dhl75x212XgJ4\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 1321,
		"path": "../public/assets/auth-callback-DDduRszW.js"
	},
	"/assets/avatar-Ln23Htdh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a76-zYt/nM61FPecdikH+5NUU7wgDW4\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 2678,
		"path": "../public/assets/avatar-Ln23Htdh.js"
	},
	"/assets/blog-07fFD0r0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98f-9wZjkh9PstqjP3pmMOoxbv4QCr4\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 2447,
		"path": "../public/assets/blog-07fFD0r0.js"
	},
	"/assets/apikeys-Cv0p0qjs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14d1-lgAnL++Aw3T8DvxyzwZQjq2+Npk\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 5329,
		"path": "../public/assets/apikeys-Cv0p0qjs.js"
	},
	"/assets/button-Dv_bOHjD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2084-BS5cEiQUdJpVIyC8+BDjJxMFcLc\"",
		"mtime": "2026-09-15T01:07:09.049Z",
		"size": 8324,
		"path": "../public/assets/button-Dv_bOHjD.js"
	},
	"/assets/billing-o0Nmojjr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2044-y6Y2NpGaPf9huacoHKb6AfCPF0A\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 8260,
		"path": "../public/assets/billing-o0Nmojjr.js"
	},
	"/assets/check-ZWjM1OPY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-B16mPYR/wRe2MyUQtPgvi1PI1dI\"",
		"mtime": "2026-09-15T01:07:09.049Z",
		"size": 124,
		"path": "../public/assets/check-ZWjM1OPY.js"
	},
	"/assets/badge-C8rcO-YK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"592-AvQoUQMosazGTWWpfrFVAEWwrRs\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 1426,
		"path": "../public/assets/badge-C8rcO-YK.js"
	},
	"/assets/categories-C86k0GuZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"179d-siq/FH6czLUQfDfz9/QnFmltUj0\"",
		"mtime": "2026-09-15T01:07:09.049Z",
		"size": 6045,
		"path": "../public/assets/categories-C86k0GuZ.js"
	},
	"/assets/card-D9Jc-D9u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66b-B2UnlkSkqs1Hz4JkJw+ETJtf5Ug\"",
		"mtime": "2026-09-15T01:07:09.049Z",
		"size": 1643,
		"path": "../public/assets/card-D9Jc-D9u.js"
	},
	"/videos/hero-forever.mp4": {
		"type": "video/mp4",
		"etag": "\"f237d-OoT4TUnOkaa4vTA8SgdehD1YW9U\"",
		"mtime": "2026-09-15T01:07:10.919Z",
		"size": 992125,
		"path": "../public/videos/hero-forever.mp4"
	},
	"/videos/hero-forever.webm": {
		"type": "video/webm",
		"etag": "\"c56f6-41wLnhXMGr4Vukjy5MsAtMFBnqc\"",
		"mtime": "2026-09-15T01:07:10.918Z",
		"size": 808694,
		"path": "../public/videos/hero-forever.webm"
	},
	"/assets/checkbox-BZW_TZNl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"168b-0xVmFyOn3kiYzcJYdAgE+t2Bj1Y\"",
		"mtime": "2026-09-15T01:07:09.049Z",
		"size": 5771,
		"path": "../public/assets/checkbox-BZW_TZNl.js"
	},
	"/assets/circle-x-BovzJdGw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf-8JdKf4JQPmQMpSr5qviqFXBSInA\"",
		"mtime": "2026-09-15T01:07:09.049Z",
		"size": 207,
		"path": "../public/assets/circle-x-BovzJdGw.js"
	},
	"/assets/chevron-down-DM200Jqj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"80-SLQ0EU3UnjdpY+eUz60RhjDO8nI\"",
		"mtime": "2026-09-15T01:07:09.049Z",
		"size": 128,
		"path": "../public/assets/chevron-down-DM200Jqj.js"
	},
	"/assets/class-icons-Cgoo9idB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e2-J9O3Mzw1f4m1EiqaeVlL448BxNs\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 1250,
		"path": "../public/assets/class-icons-Cgoo9idB.js"
	},
	"/assets/classes._classSlug-B2sF01gN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa6-fnKQR6NNn096bRtQMb/rk+0R0EU\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 4006,
		"path": "../public/assets/classes._classSlug-B2sF01gN.js"
	},
	"/assets/classes-8tGfGxyq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48-vawa84SGmi0E9e462ogiq/HONjY\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 72,
		"path": "../public/assets/classes-8tGfGxyq.js"
	},
	"/assets/classes.index-D30H-Sw8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"394-85bSy9TWjsfjlnJGuZlQkj3Q8u0\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 916,
		"path": "../public/assets/classes.index-D30H-Sw8.js"
	},
	"/assets/coins-CjIBvDfy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-TdYldAkNpwOUqDop8Xe+2L5EsdI\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 279,
		"path": "../public/assets/coins-CjIBvDfy.js"
	},
	"/assets/config-CTqu9i5n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"88c-D4PGYClmUghEqB5NFzQglLRd+H4\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 2188,
		"path": "../public/assets/config-CTqu9i5n.js"
	},
	"/assets/copy-BVbK0L1b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-afXIHfBfkiqCHdtNWDVzhRlT580\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 236,
		"path": "../public/assets/copy-BVbK0L1b.js"
	},
	"/assets/createBaseUIEventDetails-vU7H5iIs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e1d-63i30L2syw10sAEqP+MWSS0bGsI\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 3613,
		"path": "../public/assets/createBaseUIEventDetails-vU7H5iIs.js"
	},
	"/assets/createLucideIcon-yqNWVwE6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a2-oBRCt6JhSsu38x/LYyw1z0FRWDg\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 1186,
		"path": "../public/assets/createLucideIcon-yqNWVwE6.js"
	},
	"/assets/credit-card-BpGkSB6H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf-cR10uV3B8OZUoEUnFnXU2y3CFTU\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 207,
		"path": "../public/assets/credit-card-BpGkSB6H.js"
	},
	"/assets/credits-DA9gzcyf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"db0-uNKCb4Huc1IuDKIUZii3tPxtR/E\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 3504,
		"path": "../public/assets/credits-DA9gzcyf.js"
	},
	"/assets/credits-B7Cyz_G-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a89-KUkP2idUkpdm/XIXwK+02nfzvis\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 2697,
		"path": "../public/assets/credits-B7Cyz_G-.js"
	},
	"/assets/data-table-C1y3K15j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c223-LS6Y6GthSJSBiDRt0+nZyUqUo/M\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 49699,
		"path": "../public/assets/data-table-C1y3K15j.js"
	},
	"/assets/dialog-C0PSbtCB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c97-BwqzRngr4rMdLtvFRhAPDNSETJs\"",
		"mtime": "2026-09-15T01:07:09.051Z",
		"size": 3223,
		"path": "../public/assets/dialog-C0PSbtCB.js"
	},
	"/assets/deep-dive-BmaMITBa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11a2-cnxfeEUdK6hPrlKYPYYF/3oHnU8\"",
		"mtime": "2026-09-15T01:07:09.050Z",
		"size": 4514,
		"path": "../public/assets/deep-dive-BmaMITBa.js"
	},
	"/assets/dropdown-menu-Bo5NuNIo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98c8-AsU1NAXDmoigL+zPBPoNYlmQRQU\"",
		"mtime": "2026-09-15T01:07:09.051Z",
		"size": 39112,
		"path": "../public/assets/dropdown-menu-Bo5NuNIo.js"
	},
	"/assets/dungeons-8tGfGxyq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48-vawa84SGmi0E9e462ogiq/HONjY\"",
		"mtime": "2026-09-15T01:07:09.051Z",
		"size": 72,
		"path": "../public/assets/dungeons-8tGfGxyq.js"
	},
	"/assets/dungeons._dungeonSlug-BcdGhvY4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b40-eaNZnbb/MRzV533ShgZUslek3eM\"",
		"mtime": "2026-09-15T01:07:09.051Z",
		"size": 2880,
		"path": "../public/assets/dungeons._dungeonSlug-BcdGhvY4.js"
	},
	"/assets/dungeons.index-C2xb06v5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"416-Ww6lnj4fqqBlwhVDLnvn5yV28Yw\"",
		"mtime": "2026-09-15T01:07:09.051Z",
		"size": 1046,
		"path": "../public/assets/dungeons.index-C2xb06v5.js"
	},
	"/assets/dynamic-AV3M170w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"70-JlAxBsRqq0/audLbuVelWTF/d9Y\"",
		"mtime": "2026-09-15T01:07:09.051Z",
		"size": 112,
		"path": "../public/assets/dynamic-AV3M170w.js"
	},
	"/assets/ellipsis-C_8UfsTa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-lwKuJV9Ae80OFWcA/P4m+84XOXE\"",
		"mtime": "2026-09-15T01:07:09.052Z",
		"size": 226,
		"path": "../public/assets/ellipsis-C_8UfsTa.js"
	},
	"/assets/field-C_QvbGfn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7b-bTWmtrBt6hD5i30IClT2eaW/GSE\"",
		"mtime": "2026-09-15T01:07:09.052Z",
		"size": 2683,
		"path": "../public/assets/field-C_QvbGfn.js"
	},
	"/assets/forever-vs-classic-SyDDqchf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23b7-PdfA+1z8V4P8tKcTgHJkJEBLU90\"",
		"mtime": "2026-09-15T01:07:09.052Z",
		"size": 9143,
		"path": "../public/assets/forever-vs-classic-SyDDqchf.js"
	},
	"/assets/forgot-password-CNjUGDFi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2f-W2Y7kw0KHEMXRYOufzVv4oJoVqU\"",
		"mtime": "2026-09-15T01:07:09.052Z",
		"size": 2863,
		"path": "../public/assets/forgot-password-CNjUGDFi.js"
	},
	"/assets/form-field-CcaxOQSr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"338-d+tjdtJ70XpXvN0aJ/eafA9rMYw\"",
		"mtime": "2026-09-15T01:07:09.053Z",
		"size": 824,
		"path": "../public/assets/form-field-CcaxOQSr.js"
	},
	"/assets/image-N_nNPyOE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10d-Bn1GG+JoniuBWuboI/74+QMQLxk\"",
		"mtime": "2026-09-15T01:07:09.053Z",
		"size": 269,
		"path": "../public/assets/image-N_nNPyOE.js"
	},
	"/assets/header-Ba1k-qCR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3369-WtD7QRo0vhHCTZCbCsjDyXEDOtg\"",
		"mtime": "2026-09-15T01:07:09.053Z",
		"size": 13161,
		"path": "../public/assets/header-Ba1k-qCR.js"
	},
	"/assets/image-uploader-IEplXN66.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"215c-PNnzBnPVYiDH/fnOplr7VgwzOMs\"",
		"mtime": "2026-09-15T01:07:09.053Z",
		"size": 8540,
		"path": "../public/assets/image-uploader-IEplXN66.js"
	},
	"/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2": {
		"type": "font/woff2",
		"etag": "\"6568-cF1iUGbboMFZ8TfnP5HiMgl9II0\"",
		"mtime": "2026-09-15T01:07:09.061Z",
		"size": 25960,
		"path": "../public/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2"
	},
	"/assets/input-DgzPTo8l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1498-PL1XH/xZxCrWONUxqIDKf+hhVag\"",
		"mtime": "2026-09-15T01:07:09.053Z",
		"size": 5272,
		"path": "../public/assets/input-DgzPTo8l.js"
	},
	"/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2": {
		"type": "font/woff2",
		"etag": "\"493c-n3Oy9D6jvzfMjpClqox+Zo7ERQQ\"",
		"mtime": "2026-09-15T01:07:09.061Z",
		"size": 18748,
		"path": "../public/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2"
	},
	"/assets/inter-greek-wght-normal-CkhJZR-_.woff2": {
		"type": "font/woff2",
		"etag": "\"4a34-xor/hj4YNqI52zFecXnUbzQ4Xs4\"",
		"mtime": "2026-09-15T01:07:09.061Z",
		"size": 18996,
		"path": "../public/assets/inter-greek-wght-normal-CkhJZR-_.woff2"
	},
	"/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2": {
		"type": "font/woff2",
		"etag": "\"14c4c-zz61D7IQFMB9QxHvTAOk/Vh4ibQ\"",
		"mtime": "2026-09-15T01:07:09.061Z",
		"size": 85068,
		"path": "../public/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2"
	},
	"/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2": {
		"type": "font/woff2",
		"etag": "\"2be0-BP5iTzJeB8nLqYAgKpWNi5o1Zm8\"",
		"mtime": "2026-09-15T01:07:09.061Z",
		"size": 11232,
		"path": "../public/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2"
	},
	"/assets/inter-latin-wght-normal-Dx4kXJAl.woff2": {
		"type": "font/woff2",
		"etag": "\"bc80-8R1ym7Ck2DUNLqPQ/AYs9u8tUpg\"",
		"mtime": "2026-09-15T01:07:09.062Z",
		"size": 48256,
		"path": "../public/assets/inter-latin-wght-normal-Dx4kXJAl.woff2"
	},
	"/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2": {
		"type": "font/woff2",
		"etag": "\"280c-nBythjoDQ0+5wVAendJ6wU7Xz2M\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 10252,
		"path": "../public/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2"
	},
	"/assets/invite-codes-BgBepkAt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b1b-33Z5q+qJxdwXodoIY+c0214R/T4\"",
		"mtime": "2026-09-15T01:07:09.053Z",
		"size": 6939,
		"path": "../public/assets/invite-codes-BgBepkAt.js"
	},
	"/assets/items-BSMezZGr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1739-F3PocX1VHCKgYPpfIarKba4MrCk\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 5945,
		"path": "../public/assets/items-BSMezZGr.js"
	},
	"/assets/label-CaZcC92E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a8-OBnyvqg5fHayQCYUjjSLy+vaObY\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 424,
		"path": "../public/assets/label-CaZcC92E.js"
	},
	"/assets/jsx-runtime-C27Mmbu5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2157-K7z7JulAsA1EGRDTmPYOvz5HqGU\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 8535,
		"path": "../public/assets/jsx-runtime-C27Mmbu5.js"
	},
	"/assets/key-B5_6qE55.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"108-0cecuum8pkVg0ALRV6Bd9Ac7xXw\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 264,
		"path": "../public/assets/key-B5_6qE55.js"
	},
	"/assets/libre-baskerville-latin-400-italic-BDjkfMIE.woff": {
		"type": "font/woff",
		"etag": "\"694c-IkXKlWNxzJwDNGDjaQw9ToR5Waw\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 26956,
		"path": "../public/assets/libre-baskerville-latin-400-italic-BDjkfMIE.woff"
	},
	"/assets/libre-baskerville-latin-400-italic-Dx5Rrf3o.woff2": {
		"type": "font/woff2",
		"etag": "\"543c-9hgDQhwSZGz2ze5ozc7Rb1qQaKM\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 21564,
		"path": "../public/assets/libre-baskerville-latin-400-italic-Dx5Rrf3o.woff2"
	},
	"/assets/index-Bwq39ucU.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"23f87-b4JKZni4YlY4h1v+b1GslFgIge4\"",
		"mtime": "2026-09-15T01:07:09.061Z",
		"size": 147335,
		"path": "../public/assets/index-Bwq39ucU.css"
	},
	"/assets/libre-baskerville-latin-400-normal-B6A5kCEq.woff": {
		"type": "font/woff",
		"etag": "\"60b4-ZvchsJKCh2Jn2yXJ6OJ4DotE3Jk\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 24756,
		"path": "../public/assets/libre-baskerville-latin-400-normal-B6A5kCEq.woff"
	},
	"/assets/libre-baskerville-latin-400-normal-C42RasBZ.woff2": {
		"type": "font/woff2",
		"etag": "\"4e8c-6fGcnaKkrpbuzThTkPyEEhDrbuQ\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 20108,
		"path": "../public/assets/libre-baskerville-latin-400-normal-C42RasBZ.woff2"
	},
	"/assets/index-Ca6qg__H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12d393-RezrXH0u28d/cYNGiAt+9k56vso\"",
		"mtime": "2026-09-15T01:07:09.048Z",
		"size": 1233811,
		"path": "../public/assets/index-Ca6qg__H.js"
	},
	"/assets/libre-baskerville-latin-700-normal-CLGq6Yj4.woff2": {
		"type": "font/woff2",
		"etag": "\"4fd4-gjOCHOJzuOkI0jPUqzhm2kHZR30\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 20436,
		"path": "../public/assets/libre-baskerville-latin-700-normal-CLGq6Yj4.woff2"
	},
	"/assets/libre-baskerville-latin-ext-400-italic-BgvGgHFw.woff2": {
		"type": "font/woff2",
		"etag": "\"59fc-bOswGaBU7sG3ZZYL0WToVAtDgtk\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 23036,
		"path": "../public/assets/libre-baskerville-latin-ext-400-italic-BgvGgHFw.woff2"
	},
	"/assets/libre-baskerville-latin-ext-400-italic-C64zF-fj.woff": {
		"type": "font/woff",
		"etag": "\"75f8-r3lyGbL2V5mpGtO1/ORaElqWr9M\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 30200,
		"path": "../public/assets/libre-baskerville-latin-ext-400-italic-C64zF-fj.woff"
	},
	"/assets/libre-baskerville-latin-ext-400-normal-DehDhP4C.woff2": {
		"type": "font/woff2",
		"etag": "\"5318-nuPsBA2f23R/ZDFLphPkJVmpqn4\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 21272,
		"path": "../public/assets/libre-baskerville-latin-ext-400-normal-DehDhP4C.woff2"
	},
	"/assets/libre-baskerville-latin-700-normal-DFRs2Bxw.woff": {
		"type": "font/woff",
		"etag": "\"6340-9p1dGEgkl5lj8WgWft9wo2KnN48\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 25408,
		"path": "../public/assets/libre-baskerville-latin-700-normal-DFRs2Bxw.woff"
	},
	"/assets/libre-baskerville-latin-ext-400-normal-Dm_CMUlS.woff": {
		"type": "font/woff",
		"etag": "\"6cfc-dP8VJDkU8HDEpEhbGuvFvKzklnc\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 27900,
		"path": "../public/assets/libre-baskerville-latin-ext-400-normal-Dm_CMUlS.woff"
	},
	"/assets/libre-baskerville-latin-ext-700-normal-CwmVKpN0.woff": {
		"type": "font/woff",
		"etag": "\"6e5c-aVA6b1hG43ktpZyRXulHjgXNtVk\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 28252,
		"path": "../public/assets/libre-baskerville-latin-ext-700-normal-CwmVKpN0.woff"
	},
	"/assets/logo-mark-9OULke3l.png": {
		"type": "image/png",
		"etag": "\"8565-s5LPS7IfV2Gw2PMNekp6kTIIrhs\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 34149,
		"path": "../public/assets/logo-mark-9OULke3l.png"
	},
	"/assets/libre-baskerville-latin-ext-700-normal-URU-TBJY.woff2": {
		"type": "font/woff2",
		"etag": "\"54cc-IGjWBznwMEbd1zJLWlX5yNkYHi0\"",
		"mtime": "2026-09-15T01:07:09.063Z",
		"size": 21708,
		"path": "../public/assets/libre-baskerville-latin-ext-700-normal-URU-TBJY.woff2"
	},
	"/assets/locale-Cd6rd_oy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"374-KK79isMakuUnmzumRWs9f52JQpg\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 884,
		"path": "../public/assets/locale-Cd6rd_oy.js"
	},
	"/assets/matchContext-BvFX7iVu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30a-A0uK60SxFs2+sFTt1/Jk3EbnTS4\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 778,
		"path": "../public/assets/matchContext-BvFX7iVu.js"
	},
	"/assets/mdx-components-C89OuAy3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"61f-aIN9ebKRGaqnYuakQ8s2JJAWOsY\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 1567,
		"path": "../public/assets/mdx-components-C89OuAy3.js"
	},
	"/assets/message-square-DO--P6JM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b3-JREd6FzgbTmjUphPsmKdUOmfNZI\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 179,
		"path": "../public/assets/message-square-DO--P6JM.js"
	},
	"/assets/markdown-content-CoxH1gKX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19853-G9hqgC1699+7MfjjmDmD7xIjS5M\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 104531,
		"path": "../public/assets/markdown-content-CoxH1gKX.js"
	},
	"/assets/minus-V9bQIRVT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75-5fyQ4y2EkVWiD3zRstE+SUBh9XA\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 117,
		"path": "../public/assets/minus-V9bQIRVT.js"
	},
	"/assets/navigation-6DXmUkyy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"144a-CaGwc9LFYEWZKf11Wfs1ZI/rPCI\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 5194,
		"path": "../public/assets/navigation-6DXmUkyy.js"
	},
	"/assets/npcs-BDUC47DR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"61a-aHH2382hKxZHkyJUosac8oN5Ydg\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 1562,
		"path": "../public/assets/npcs-BDUC47DR.js"
	},
	"/assets/messages-C5rQmJ94.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e699-+KkS16gJ6y8DMxGRGGY06qo85qk\"",
		"mtime": "2026-09-15T01:07:09.054Z",
		"size": 190105,
		"path": "../public/assets/messages-C5rQmJ94.js"
	},
	"/assets/payments-BCtcUTXq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d22-bIIvm3GC37Kvf6l3D4GV8CFSyro\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 3362,
		"path": "../public/assets/payments-BCtcUTXq.js"
	},
	"/assets/payments-EZMb69uC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16d3-MUOFcdxnTJ97A39GZ/XebiS+JZQ\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 5843,
		"path": "../public/assets/payments-EZMb69uC.js"
	},
	"/assets/pencil-BoI2EJeM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114-wymSy5A3IGfQlT+C7CyptPkxoz8\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 276,
		"path": "../public/assets/pencil-BoI2EJeM.js"
	},
	"/assets/permissions-CcCO_nvk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16ae-GG16QKav4f2xl9vB8Lw9C/rM6tA\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 5806,
		"path": "../public/assets/permissions-CcCO_nvk.js"
	},
	"/assets/plus-Bq7lKVQe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-YnJsD/ry8Eoky/CBLHUuxFU+Qls\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 153,
		"path": "../public/assets/plus-Bq7lKVQe.js"
	},
	"/assets/posts-ChInBjlM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"638c3-lON0KsUDKXVp2uEOB7ANcWbbzys\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 407747,
		"path": "../public/assets/posts-ChInBjlM.js"
	},
	"/assets/posts-DshL2zgP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"261-xYV1fJLia88wxv414zuhA4/aTl0\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 609,
		"path": "../public/assets/posts-DshL2zgP.js"
	},
	"/assets/pricing-BYNaDlvW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2824-q0HvklM0JKPTeefEN5FVuhS2W5o\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 10276,
		"path": "../public/assets/pricing-BYNaDlvW.js"
	},
	"/assets/profile-CN-Mfjx5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9bb-9CgUh4ZW0j8IXAf8jjpaNz6Ix7Q\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 2491,
		"path": "../public/assets/profile-CN-Mfjx5.js"
	},
	"/assets/quests-AQjot635.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a77-l+NjU8BRIl54MN5jILODH+qypxc\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 6775,
		"path": "../public/assets/quests-AQjot635.js"
	},
	"/assets/race-class-combinations-KbQcB6Cj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bf7-VlKqnw83sNBQENdAmbxcogcW7Ic\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 3063,
		"path": "../public/assets/race-class-combinations-KbQcB6Cj.js"
	},
	"/assets/races-8tGfGxyq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48-vawa84SGmi0E9e462ogiq/HONjY\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 72,
		"path": "../public/assets/races-8tGfGxyq.js"
	},
	"/assets/races._raceSlug-BEUjdp79.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d48-4U/ZmTPnE23iVwQa4Ail7+JTKDo\"",
		"mtime": "2026-09-15T01:07:09.055Z",
		"size": 7496,
		"path": "../public/assets/races._raceSlug-BEUjdp79.js"
	},
	"/assets/races.index-CCwP0PML.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"729-2kDdPWX2dr7SNlKnAr+ojBg4zJA\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 1833,
		"path": "../public/assets/races.index-CCwP0PML.js"
	},
	"/assets/raids-ugI7Qgnd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43f-OOgxButs6zHdZl18FXVkak7KsDE\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 1087,
		"path": "../public/assets/raids-ugI7Qgnd.js"
	},
	"/assets/redeem-invite-sUeKF36K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b25-QkxoXtuN4HlQzHymRXaVJRVuwY8\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 2853,
		"path": "../public/assets/redeem-invite-sUeKF36K.js"
	},
	"/assets/refresh-cw-DuTSVcpa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"141-bY4o6ROit4W4jibslUklqldSBQM\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 321,
		"path": "../public/assets/refresh-cw-DuTSVcpa.js"
	},
	"/assets/reset-password-Kt3g8tKy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0c-DWtgt12fM4J+tCZGNExSSL4oETQ\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 3084,
		"path": "../public/assets/reset-password-Kt3g8tKy.js"
	},
	"/assets/roles-BWTbQBF0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e38-7wdiQXiFJYrPAJ/JCBGtUhWw5rU\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 7736,
		"path": "../public/assets/roles-BWTbQBF0.js"
	},
	"/assets/route-DHBeUPP8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19f-7SL4oopjpIiv1ywRcH72TPv9a+w\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 415,
		"path": "../public/assets/route-DHBeUPP8.js"
	},
	"/assets/route-ZcSPLLNq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d1-zyMfznriN8VoCQVpezPEeaCwXiU\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 2257,
		"path": "../public/assets/route-ZcSPLLNq.js"
	},
	"/assets/routes-DOdBR08U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cd5-3F/spU1PR8X+W5jXgUDLOKuHRKA\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 11477,
		"path": "../public/assets/routes-DOdBR08U.js"
	},
	"/assets/search-BHW-MtWB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2479-0FZUYUdzcWxzfmiiz5gVVLWQEcs\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 9337,
		"path": "../public/assets/search-BHW-MtWB.js"
	},
	"/assets/route-BVHSbJN_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ed-ch05DN2xfxSD0MN8XCVyWtqa9co\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 4589,
		"path": "../public/assets/route-BVHSbJN_.js"
	},
	"/assets/select-BfF41Trf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7961-49ntER0mtI9KDlh9Yh83VQHm6wE\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 31073,
		"path": "../public/assets/select-BfF41Trf.js"
	},
	"/assets/search-FzPBJR3U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-/0M8g8d+xFhE7MfGe2CYP8ruxEk\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 174,
		"path": "../public/assets/search-FzPBJR3U.js"
	},
	"/assets/settings-COhqggVV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d63-SYvo4D9tMOUYO+Fco7ZZAYT1C/8\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 3427,
		"path": "../public/assets/settings-COhqggVV.js"
	},
	"/assets/separator-JFrSIdh3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cb-AgJgWQB2wFek6/Wf/oKyR3g11m4\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 459,
		"path": "../public/assets/separator-JFrSIdh3.js"
	},
	"/assets/settings-CSVLl7OP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7746-DFhU/ujlD++Cf/4lwVgMFOpwMZQ\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 30534,
		"path": "../public/assets/settings-CSVLl7OP.js"
	},
	"/assets/shield-DMx40LoS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"110-Tfc9BNl7VOzTZA9IPlUReu1J+WM\"",
		"mtime": "2026-09-15T01:07:09.056Z",
		"size": 272,
		"path": "../public/assets/shield-DMx40LoS.js"
	},
	"/assets/showcase-00-13-50-Dgqtcidk.jpg": {
		"type": "image/jpeg",
		"etag": "\"c28b-j06VDZTi9c918uYz6Z6gp4FQZag\"",
		"mtime": "2026-09-15T01:07:09.064Z",
		"size": 49803,
		"path": "../public/assets/showcase-00-13-50-Dgqtcidk.jpg"
	},
	"/assets/sparkles-DqEpQoPI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fc-zG/SS7Y17qZ5hl1oiUG/eVT6XKA\"",
		"mtime": "2026-09-15T01:07:09.058Z",
		"size": 508,
		"path": "../public/assets/sparkles-DqEpQoPI.js"
	},
	"/assets/subscriptions-C5XesVvG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b5d-1pYwC7QINZg6YGFelwNfaW9BnEY\"",
		"mtime": "2026-09-15T01:07:09.058Z",
		"size": 2909,
		"path": "../public/assets/subscriptions-C5XesVvG.js"
	},
	"/assets/talents-8tGfGxyq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48-vawa84SGmi0E9e462ogiq/HONjY\"",
		"mtime": "2026-09-15T01:07:09.058Z",
		"size": 72,
		"path": "../public/assets/talents-8tGfGxyq.js"
	},
	"/assets/talents._classSlug-Br6dxdQw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4153-z+phMCO4scjr6CxGxH4UE84EEd0\"",
		"mtime": "2026-09-15T01:07:09.058Z",
		"size": 16723,
		"path": "../public/assets/talents._classSlug-Br6dxdQw.js"
	},
	"/assets/talents.index-G_9W-5ou.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ab-eomFP+zNU27tnkhfoHXDvOTTnX4\"",
		"mtime": "2026-09-15T01:07:09.058Z",
		"size": 939,
		"path": "../public/assets/talents.index-G_9W-5ou.js"
	},
	"/assets/textarea-BoQ-hpxp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f1-HrTOLXTw9L9ngpz/ct6by9NHgq8\"",
		"mtime": "2026-09-15T01:07:09.058Z",
		"size": 753,
		"path": "../public/assets/textarea-BoQ-hpxp.js"
	},
	"/assets/sign-up-BfxxVaRb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17b8-Gqt64OjLx1fENjpsOCwZa7aWNCM\"",
		"mtime": "2026-09-15T01:07:09.058Z",
		"size": 6072,
		"path": "../public/assets/sign-up-BfxxVaRb.js"
	},
	"/assets/tickets-BAM0JOSN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d46-xrIJXfKosf9opihS1081lcxLync\"",
		"mtime": "2026-09-15T01:07:09.059Z",
		"size": 7494,
		"path": "../public/assets/tickets-BAM0JOSN.js"
	},
	"/assets/tickets-BOfNV2FZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b84-ew0cf2agims+G2NX12YhNQdAuCk\"",
		"mtime": "2026-09-15T01:07:09.059Z",
		"size": 7044,
		"path": "../public/assets/tickets-BOfNV2FZ.js"
	},
	"/assets/trash-2-CXKSF24V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"166-2CvzZP0YOW6kIYbdtw+0o4iyydk\"",
		"mtime": "2026-09-15T01:07:09.059Z",
		"size": 358,
		"path": "../public/assets/trash-2-CXKSF24V.js"
	},
	"/assets/useAriaLabelledBy-CjXT8R5E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24d-yuJqEeNjguknfrgcqUc3YfcTEK4\"",
		"mtime": "2026-09-15T01:07:09.059Z",
		"size": 589,
		"path": "../public/assets/useAriaLabelledBy-CjXT8R5E.js"
	},
	"/assets/time-rvEkvbfN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4-UEKRrbtatVkiAS3awRHx52APX8k\"",
		"mtime": "2026-09-15T01:07:09.059Z",
		"size": 228,
		"path": "../public/assets/time-rvEkvbfN.js"
	},
	"/assets/sign-in-BP0psT4x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1729-vdhjWKLmNcitFkT4rfKuhd+0ktk\"",
		"mtime": "2026-09-15T01:07:09.057Z",
		"size": 5929,
		"path": "../public/assets/sign-in-BP0psT4x.js"
	},
	"/assets/useCompositeListItem-96UmdURc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"942a-FbDt9lOhv3y9XlDL5ynFbh3x8wM\"",
		"mtime": "2026-09-15T01:07:09.059Z",
		"size": 37930,
		"path": "../public/assets/useCompositeListItem-96UmdURc.js"
	},
	"/assets/showcase-00-41-00-BYoFpowV.jpg": {
		"type": "image/jpeg",
		"etag": "\"7265-D5eTT2tdLkAgDub1V2orDpCKAFQ\"",
		"mtime": "2026-09-15T01:07:09.064Z",
		"size": 29285,
		"path": "../public/assets/showcase-00-41-00-BYoFpowV.jpg"
	},
	"/assets/useForm-CPkXYiGi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f762-Ke8BTZYvli1EAvsQOKkZGQ6c5ko\"",
		"mtime": "2026-09-15T01:07:09.059Z",
		"size": 63330,
		"path": "../public/assets/useForm-CPkXYiGi.js"
	},
	"/assets/useMutation-CvprsdNZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d2-7rbyZ92YoILD0M0mnDlhADAdiCM\"",
		"mtime": "2026-09-15T01:07:09.059Z",
		"size": 2258,
		"path": "../public/assets/useMutation-CvprsdNZ.js"
	},
	"/assets/useRenderElement-DqXa6d4c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1df3-FMiK8d9RrV2a6zSJAZx2vSs7VhI\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 7667,
		"path": "../public/assets/useRenderElement-DqXa6d4c.js"
	},
	"/assets/users-0RIZvvVj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-z7jXGx40vGsSuHoKRmBuIgPAnhw\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 306,
		"path": "../public/assets/users-0RIZvvVj.js"
	},
	"/assets/useOpenInteractionType-C3DdHMZs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dedb-W8LRnagQfERHkBRSn/dBGAJiRtY\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 57051,
		"path": "../public/assets/useOpenInteractionType-C3DdHMZs.js"
	},
	"/assets/users-D9UsBQ2o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b4a-zimQiXUKarTDsRcwSteqsfy/T5s\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 6986,
		"path": "../public/assets/users-D9UsBQ2o.js"
	},
	"/assets/verify-email-ecLRuMFz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ff4-nmZvufCDBRn0lmPKmd/z9dysqHw\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 4084,
		"path": "../public/assets/verify-email-ecLRuMFz.js"
	},
	"/assets/useStore-B4GNwqYv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44b8-VhIamdj3902r4TPm/4nRItqwvFU\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 17592,
		"path": "../public/assets/useStore-B4GNwqYv.js"
	},
	"/assets/whats-next-00-15-00-CFLgelro.jpg": {
		"type": "image/jpeg",
		"etag": "\"ae52-7pAUvArudRu7xnQfaYCjx1WQJIQ\"",
		"mtime": "2026-09-15T01:07:09.064Z",
		"size": 44626,
		"path": "../public/assets/whats-next-00-15-00-CFLgelro.jpg"
	},
	"/assets/whats-next-00-12-00-C4CwHmBF.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f8c-oFe7des8sdfCWoKxzmGvaZe/ULc\"",
		"mtime": "2026-09-15T01:07:09.064Z",
		"size": 32652,
		"path": "../public/assets/whats-next-00-12-00-C4CwHmBF.jpg"
	},
	"/assets/whats-next-00-24-00-CWQ1BRNx.jpg": {
		"type": "image/jpeg",
		"etag": "\"6099-nmOP6NfYIaU8+rY4s5b880+vnio\"",
		"mtime": "2026-09-15T01:07:09.064Z",
		"size": 24729,
		"path": "../public/assets/whats-next-00-24-00-CWQ1BRNx.jpg"
	},
	"/assets/wiki-i18n-CWZvdEed.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"236d-YqNnx6CikvQxMBgGq56fllUz53Q\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 9069,
		"path": "../public/assets/wiki-i18n-CWZvdEed.js"
	},
	"/assets/wiki-media-DV9ErlYa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec5-AzbTsset+8khzDgKAbkY6AcerLs\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 3781,
		"path": "../public/assets/wiki-media-DV9ErlYa.js"
	},
	"/assets/with-selector-DpfNsvDm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"661-cjwy+hXT27sXXaET0WvEUqsKPq8\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 1633,
		"path": "../public/assets/with-selector-DpfNsvDm.js"
	},
	"/assets/x-CU_yILff.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-4dN86CyG7NoYEpdAmEh/Afwi/VE\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 154,
		"path": "../public/assets/x-CU_yILff.js"
	},
	"/assets/xaryu-mage-00-08-00-xfKPKGDC.jpg": {
		"type": "image/jpeg",
		"etag": "\"15231-11GcdRkopXt7a0ImRdD5cLdhLNQ\"",
		"mtime": "2026-09-15T01:07:09.067Z",
		"size": 86577,
		"path": "../public/assets/xaryu-mage-00-08-00-xfKPKGDC.jpg"
	},
	"/assets/xaryu-talents-00-01-00-CZVVkrtE.jpg": {
		"type": "image/jpeg",
		"etag": "\"1531e-o3Ct2bIocUQhfXVkzMyp2fvDS8A\"",
		"mtime": "2026-09-15T01:07:09.069Z",
		"size": 86814,
		"path": "../public/assets/xaryu-talents-00-01-00-CZVVkrtE.jpg"
	},
	"/assets/xaryu-talents-00-18-00-Du0w9S8Z.jpg": {
		"type": "image/jpeg",
		"etag": "\"1192c-IFitWbgSxRyivuR0rJptbi63zEE\"",
		"mtime": "2026-09-15T01:07:09.069Z",
		"size": 71980,
		"path": "../public/assets/xaryu-talents-00-18-00-Du0w9S8Z.jpg"
	},
	"/assets/xaryu-talents-00-21-00-By1_zpGv.jpg": {
		"type": "image/jpeg",
		"etag": "\"1050b-WkWQBuS2L4kAsAdCdGrhXoNMNKo\"",
		"mtime": "2026-09-15T01:07:09.069Z",
		"size": 66827,
		"path": "../public/assets/xaryu-talents-00-21-00-By1_zpGv.jpg"
	},
	"/assets/xaryu-talents-00-33-00-caNyEZ5A.jpg": {
		"type": "image/jpeg",
		"etag": "\"11124-zA1NiruS5NP3NUBlr50/4PVZSv8\"",
		"mtime": "2026-09-15T01:07:09.069Z",
		"size": 69924,
		"path": "../public/assets/xaryu-talents-00-33-00-caNyEZ5A.jpg"
	},
	"/assets/xaryu-talents-00-41-00-A-37HFsu.jpg": {
		"type": "image/jpeg",
		"etag": "\"1194b-DtsszkCSu2eRIWBobN6tnGu3X9s\"",
		"mtime": "2026-09-15T01:07:09.069Z",
		"size": 72011,
		"path": "../public/assets/xaryu-talents-00-41-00-A-37HFsu.jpg"
	},
	"/assets/zones-BG-0HhHU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a27-rmITihgl57aGkNaIUynYg8rHJ3I\"",
		"mtime": "2026-09-15T01:07:09.061Z",
		"size": 6695,
		"path": "../public/assets/zones-BG-0HhHU.js"
	},
	"/imgs/icons/creem.png": {
		"type": "image/png",
		"etag": "\"84dd-VL0K2ULSjrsgPFUC42jyy5ydnCc\"",
		"mtime": "2026-09-15T01:07:10.917Z",
		"size": 34013,
		"path": "../public/imgs/icons/creem.png"
	},
	"/assets/whats-next-00-28-00-DsPmA3aw.jpg": {
		"type": "image/jpeg",
		"etag": "\"8285-OsSz9t06SZbQrbEq5ZejX4qJE2s\"",
		"mtime": "2026-09-15T01:07:09.064Z",
		"size": 33413,
		"path": "../public/assets/whats-next-00-28-00-DsPmA3aw.jpg"
	},
	"/assets/wiki-v1-page-RAinAL42.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e5c-0ApFvoSzUBKmjtEE1gxp01PmuSI\"",
		"mtime": "2026-09-15T01:07:09.060Z",
		"size": 7772,
		"path": "../public/assets/wiki-v1-page-RAinAL42.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_@libsql+client@0.14.0_aws4fetch@1.0.20_chokidar@5.0.0_dotenv@17.4_0ac2efac16f8706a6f656af763851b53/node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_Cg6kp4 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Cg6kp4
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_@libsql+client@0.14.0_aws4fetch@1.0.20_chokidar@5.0.0_dotenv@17.4_0ac2efac16f8706a6f656af763851b53/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_@libsql+client@0.14.0_aws4fetch@1.0.20_chokidar@5.0.0_dotenv@17.4_0ac2efac16f8706a6f656af763851b53/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_@libsql+client@0.14.0_aws4fetch@1.0.20_chokidar@5.0.0_dotenv@17.4_0ac2efac16f8706a6f656af763851b53/node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_@libsql+client@0.14.0_aws4fetch@1.0.20_chokidar@5.0.0_dotenv@17.4_0ac2efac16f8706a6f656af763851b53/node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
