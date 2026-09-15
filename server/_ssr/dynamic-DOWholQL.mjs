import { t as _index_exports } from "./messages-DKBWZPg0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dynamic-DOWholQL.js
function tDynamic(key) {
	const fn = _index_exports[key];
	return typeof fn === "function" ? fn() : key;
}
//#endregion
export { tDynamic as t };
