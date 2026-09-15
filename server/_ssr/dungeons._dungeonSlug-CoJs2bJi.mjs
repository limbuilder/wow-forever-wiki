import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { g as slugify } from "./wiki-v1-data-DEzgNKYh.mjs";
import { n as dungeonMediaBySlug } from "./wiki-media-B73q5XyY.mjs";
import { a as VerificationBadge, o as WikiMediaFigure, r as SourceLinks, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { n as detailCopy, t as Route } from "./dungeons._dungeonSlug-zRgCyJG1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dungeons._dungeonSlug-CoJs2bJi.js
var import_jsx_runtime = require_jsx_runtime();
function DungeonDetailPage() {
	const dungeon = Route.useLoaderData();
	const c = detailCopy(getLocale(), dungeon.name);
	const notes = "notes" in dungeon ? dungeon.notes : void 0;
	const subAreas = "sub_areas" in dungeon ? dungeon.sub_areas : void 0;
	const media = dungeonMediaBySlug[slugify(dungeon.name)];
	const isOfficial = dungeon.verification === "official_confirmed";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: c.eyebrow,
		title: dungeon.name,
		description: notes || c.fallback,
		breadcrumbs: [{
			label: c.dungeons,
			href: "/dungeons"
		}, { label: dungeon.name }],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: isOfficial ? "mixed" : "provisional" }),
			media ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiMediaFigure, {
				media,
				className: "mb-8"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-border grid border sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-border border-b p-4 sm:border-r lg:border-b-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs uppercase",
							children: c.zone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium",
							children: dungeon.zone || c.tbd
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-border border-b p-4 lg:border-r lg:border-b-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs uppercase",
							children: c.level
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium",
							children: dungeon.level_range || c.tbd
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-border border-b p-4 sm:border-r sm:border-b-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs uppercase",
							children: c.entrance
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium",
							children: dungeon.entrance || c.tbd
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs uppercase",
							children: c.status
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationBadge, { verification: dungeon.verification })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-3 text-xs leading-5",
				children: c.statusNote
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: c.bosses
					}),
					dungeon.bosses.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: dungeon.bosses.map((boss) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border-border border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium",
									children: boss.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationBadge, { verification: boss.verification })]
							}), "note" in boss && boss.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2 text-sm leading-6",
								children: boss.note
							}) : null]
						}, boss.name))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-3 text-sm",
						children: c.noBosses
					}),
					subAreas?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: c.subAreas
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "text-muted-foreground mt-2 list-disc space-y-1 pl-5 text-sm",
							children: subAreas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: area.name }, area.name))
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLinks, { source: dungeon.video_sources })
		]
	});
}
//#endregion
export { DungeonDetailPage as component };
