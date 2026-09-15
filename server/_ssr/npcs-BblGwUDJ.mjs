import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/npcs-BblGwUDJ.js
var import_jsx_runtime = require_jsx_runtime();
function NpcsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: "NPC database",
		title: "WoW Forever NPCs",
		description: "Blizzard has revealed many systems, regions, dungeons, raids, and quest themes, but has not yet published a complete NPC dataset. This page stays out of search indexing until the entries can be verified at useful depth.",
		breadcrumbs: [{ label: "NPCs" }],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: "provisional" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-border bg-card border p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "What will be added here"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-3 max-w-3xl text-sm leading-6",
					children: "Quest givers, vendors, trainers, rares, dungeon and raid characters, faction leaders, coordinates, services, and source links will be added once official or Beta evidence can support them. We are intentionally not populating this section from guesses or from similarly named NPCs in older versions of WoW."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/zones",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Browse confirmed zones →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/quests",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Browse official quest overview →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/dungeons",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Browse dungeons →"
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { NpcsPage as component };
