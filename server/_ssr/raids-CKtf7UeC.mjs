import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { h as raids } from "./wiki-v1-data-DEzgNKYh.mjs";
import { i as raidMedia } from "./wiki-media-B73q5XyY.mjs";
import { n as EntityCard, o as WikiMediaFigure, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { t as raidsCopy } from "./raids-BdO6ZQwK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/raids-CKtf7UeC.js
var import_jsx_runtime = require_jsx_runtime();
function RaidsPage() {
	const copy = raidsCopy(getLocale());
	const officialCount = raids.filter((raid) => raid.verification === "official_confirmed").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: copy.eyebrow,
		title: copy.title,
		description: copy.description,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: "mixed" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiMediaFigure, {
				media: raidMedia,
				className: "mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-primary/30 bg-primary/5 mb-8 border p-5 text-sm leading-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: copy.confirmed(officialCount) }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: copy.body
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: raids.map((raid) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
					title: raid.name,
					description: `${raid.player_count}-player · ${raid.zone}`,
					meta: `${copy.release}: ${raid.release_phase || copy.tbd}`,
					verification: raid.verification
				}, raid.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-6 text-xs leading-5",
				children: copy.note
			})
		]
	});
}
//#endregion
export { RaidsPage as component };
