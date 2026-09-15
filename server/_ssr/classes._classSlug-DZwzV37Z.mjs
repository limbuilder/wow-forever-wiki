import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { a as getClassDiffs, c as getDiffStats, o as getClassRaces } from "./wiki-v1-data-DEzgNKYh.mjs";
import { n as detailCopy, t as Route } from "./classes._classSlug-6Rg5EpEy.mjs";
import { t as getClassIcon } from "./class-icons-DCc3cvJS.mjs";
import { a as talentMediaByClass, t as classMediaBySlug } from "./wiki-media-B73q5XyY.mjs";
import { i as StatGrid, n as EntityCard, o as WikiMediaFigure, r as SourceLinks, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/classes._classSlug-DZwzV37Z.js
var import_jsx_runtime = require_jsx_runtime();
var deepDiveSource = "https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap";
var paladinDeepDiveImage = "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/7SGUHEP05HV71789247720285.png";
function ClassDetailPage() {
	const { summary, talents } = Route.useLoaderData();
	const c = detailCopy(getLocale(), summary.name);
	const races = getClassRaces(summary.name);
	const diffStats = getDiffStats(getClassDiffs(summary.name));
	const media = classMediaBySlug[summary.slug] ?? talentMediaByClass[summary.name.toLowerCase()];
	const icon = getClassIcon(summary.name);
	const isPaladin = summary.name.toLowerCase() === "paladin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: c.eyebrow,
		title: c.title,
		description: c.description(summary.trees, summary.talentCount),
		titleIconSrc: icon?.src,
		titleIconAlt: icon?.alt,
		breadcrumbs: [{
			label: c.classes,
			href: "/classes"
		}, { label: summary.name }],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: isPaladin ? "mixed" : "provisional" }),
			media ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiMediaFigure, {
				media,
				className: "mb-8"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatGrid, { items: [
				{
					label: c.trees,
					value: summary.trees.length
				},
				{
					label: c.talents,
					value: summary.talentCount
				},
				{
					label: c.complete,
					value: summary.completeCount
				},
				{
					label: c.races,
					value: races.length
				}
			] }),
			isPaladin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-primary/30 bg-primary/5 mt-8 border p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary text-xs font-semibold tracking-[0.16em] uppercase",
						children: c.paladinConfirmed
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: c.paladinTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 max-w-3xl text-sm leading-6",
						children: c.paladinDesc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 md:grid-cols-2",
						children: c.paladinPoints.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-border bg-background/40 border p-4 text-sm leading-6",
							children: point
						}, point))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "border-border mt-5 overflow-hidden border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: paladinDeepDiveImage,
							alt: "Official WoW Forever Paladin talent tree preview",
							loading: "lazy",
							className: "w-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "text-muted-foreground px-3 py-2 text-xs",
							children: c.imageCaption
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							href: "/deep-dive#talents-paladin",
							className: "text-primary underline-offset-4 hover:underline",
							children: c.fullDeepDive
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: deepDiveSource,
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: c.source
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: c.treeTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1 text-sm",
						children: c.treeDesc
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						className: "text-primary text-sm underline-offset-4 hover:underline",
						href: `/talents/${summary.slug}`,
						children: c.viewAll
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-3",
					children: summary.trees.map((tree) => {
						const count = talents.talents.filter((talent) => talent.tree === tree).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
							title: tree,
							meta: `${count} ${c.tracked}`
						}, tree);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: c.playable
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: races.map((race) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
						href: `/races/${race.slug}`,
						title: race.race,
						description: race.faction,
						verification: race.verification
					}, race.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: c.diff
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 max-w-3xl text-sm leading-6",
						children: c.diffDesc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatGrid, { items: [
							{
								label: c.newLabel,
								value: diffStats.NEW_IN_FOREVER ?? 0
							},
							{
								label: c.changed,
								value: diffStats.CHANGED_FROM_CLASSIC ?? 0
							},
							{
								label: c.same,
								value: diffStats.SAME_AS_CLASSIC ?? 0
							},
							{
								label: c.removed,
								value: diffStats.REMOVED_FROM_CLASSIC ?? 0
							}
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLinks, { source: summary.source })
		]
	});
}
//#endregion
export { ClassDetailPage as component };
