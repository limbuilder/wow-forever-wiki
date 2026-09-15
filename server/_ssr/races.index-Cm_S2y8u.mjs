import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { m as races } from "./wiki-v1-data-DEzgNKYh.mjs";
import { i as StatGrid, n as EntityCard, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { t as racesCopy } from "./races.index-BkXpxNrI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/races.index-Cm_S2y8u.js
var import_jsx_runtime = require_jsx_runtime();
var deepDiveSource = "https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap";
function RacesPage() {
	const copy = racesCopy(getLocale());
	const racialCount = races.reduce((sum, race) => sum + race.racials.length, 0);
	const combinations = races.reduce((sum, race) => sum + race.classes.length, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: copy.eyebrow,
		title: copy.title,
		description: copy.description,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: "mixed" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatGrid, { items: [
				{
					label: copy.entries,
					value: races.length
				},
				{
					label: copy.racials,
					value: racialCount
				},
				{
					label: copy.combinations,
					value: combinations
				},
				{
					label: copy.newRace,
					value: "Skyborne"
				}
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-primary/30 bg-primary/5 mt-8 border p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-primary text-xs font-semibold tracking-[0.16em] uppercase",
								children: copy.confirmed
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-serif text-2xl",
								children: copy.sixPaths
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2 text-sm leading-6",
								children: copy.confirmedBody
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/deep-dive#races-new-class-paths",
							className: "text-primary underline-offset-4 hover:underline",
							children: copy.wiki
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: deepDiveSource,
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: copy.source
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: races.map((race) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
					href: `/races/${race.slug}`,
					title: race.race,
					description: `${race.faction} · ${race.classes.join(", ")}`,
					meta: copy.tracked(race.racials.length),
					verification: race.verification
				}, race.slug))
			})
		]
	});
}
//#endregion
export { RacesPage as component };
