import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { n as classes } from "./wiki-v1-data-DEzgNKYh.mjs";
import { t as getClassIcon } from "./class-icons-DCc3cvJS.mjs";
import { i as StatGrid, n as EntityCard, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { t as classesCopy } from "./classes.index-BnHtBM6J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/classes.index-Cl2PmRjo.js
var import_jsx_runtime = require_jsx_runtime();
function ClassesPage() {
	const copy = classesCopy(getLocale());
	const totalTalents = classes.reduce((sum, entry) => sum + entry.talentCount, 0);
	const complete = classes.reduce((sum, entry) => sum + entry.completeCount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: copy.eyebrow,
		title: copy.title,
		description: copy.description,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: "mixed" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatGrid, { items: [
				{
					label: copy.classes,
					value: classes.length
				},
				{
					label: copy.trees,
					value: classes.length * 3
				},
				{
					label: copy.talents,
					value: totalTalents
				},
				{
					label: copy.complete,
					value: complete,
					note: copy.note
				}
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: classes.map((entry) => {
					const icon = getClassIcon(entry.name);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
						href: `/classes/${entry.slug}`,
						title: entry.name,
						description: entry.trees.join(" · "),
						meta: copy.meta(entry),
						iconSrc: icon?.src,
						iconAlt: icon?.alt
					}, entry.slug);
				})
			})
		]
	});
}
//#endregion
export { ClassesPage as component };
