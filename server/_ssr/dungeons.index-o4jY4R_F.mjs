import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { r as dungeons } from "./wiki-v1-data-DEzgNKYh.mjs";
import { i as StatGrid, n as EntityCard, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { t as dungeonsCopy } from "./dungeons.index-DU6q8HGt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dungeons.index-o4jY4R_F.js
var import_jsx_runtime = require_jsx_runtime();
function DungeonsPage() {
	const copy = dungeonsCopy(getLocale());
	const withLevels = dungeons.filter((entry) => entry.level_range).length;
	const knownBosses = dungeons.reduce((sum, entry) => sum + entry.bosses.length, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: copy.eyebrow,
		title: copy.title,
		description: copy.description,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: "mixed" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatGrid, { items: [
				{
					label: copy.announced,
					value: dungeons.length
				},
				{
					label: copy.levels,
					value: withLevels,
					note: copy.levelsNote
				},
				{
					label: copy.bosses,
					value: knownBosses
				},
				{
					label: copy.quests,
					value: copy.pending
				}
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: dungeons.map((entry) => {
					const isWhelgarWorkingLabel = entry.name === "Whelgar Excavation Dungeon";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
						href: `/dungeons/${entry.slug}`,
						title: isWhelgarWorkingLabel ? `${entry.name} (${copy.working})` : entry.name,
						description: entry.zone || copy.exactZone,
						meta: `${isWhelgarWorkingLabel ? `${copy.formalTbd} · ` : ""}${copy.level}: ${entry.level_range || copy.tbd}${entry.bosses.length ? ` · ${entry.bosses.length} ${copy.knownBoss}` : ""}`,
						verification: entry.verification
					}, entry.slug);
				})
			})
		]
	});
}
//#endregion
export { DungeonsPage as component };
