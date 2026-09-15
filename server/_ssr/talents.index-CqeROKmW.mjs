import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { n as classes } from "./wiki-v1-data-DEzgNKYh.mjs";
import { t as getClassIcon } from "./class-icons-DCc3cvJS.mjs";
import { i as StatGrid, n as EntityCard, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { t as talentsCopy } from "./talents.index-SVJaSqwk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/talents.index-CqeROKmW.js
var import_jsx_runtime = require_jsx_runtime();
function TalentsPage() {
	const copy = talentsCopy(getLocale());
	const total = classes.reduce((sum, entry) => sum + entry.talentCount, 0);
	const provisional = classes.reduce((sum, entry) => sum + entry.estimatedCount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: copy.eyebrow,
		title: copy.title,
		description: copy.description,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: "provisional" }),
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
					label: copy.tracked,
					value: total
				},
				{
					label: copy.provisional,
					value: provisional
				}
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: classes.map((entry) => {
					const icon = getClassIcon(entry.name);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
						href: `/talents/${entry.slug}`,
						title: `${entry.name} ${copy.calculator}`,
						description: entry.trees.join(" · "),
						meta: copy.cardMeta(entry),
						iconSrc: icon?.src,
						iconAlt: icon?.alt
					}, entry.slug);
				})
			})
		]
	});
}
//#endregion
export { TalentsPage as component };
