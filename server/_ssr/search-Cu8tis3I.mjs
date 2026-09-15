import { o as __toESM } from "../_runtime.mjs";
import { $ as require_jsx_runtime, et as require_react } from "../_libs/@base-ui/react+[...].mjs";
import { h as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _u as wiki_search_empty, bu as wiki_search_submit, du as wiki_search_category_page, fu as wiki_search_category_race, gu as wiki_search_description, hu as wiki_search_category_talent, lu as wiki_search_category_class, mu as wiki_search_category_raid, pu as wiki_search_category_racial, uu as wiki_search_category_dungeon, vu as wiki_search_placeholder, xu as wiki_search_title, yu as wiki_search_results_count } from "./messages-DKBWZPg0.mjs";
import { t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { y as Search } from "../_libs/lucide-react.mjs";
import { t as WikiBreadcrumbs } from "./wiki-breadcrumbs-MquqTq0b.mjs";
import { t as Button$1 } from "./button-RkClB0x2.mjs";
import { n as Header, t as Footer } from "./header-DrpgL_ne.mjs";
import { t as Input$1 } from "./input-B6v4Jp25.mjs";
import { d as getTalentSet, g as slugify, h as raids, m as races, n as classes, r as dungeons } from "./wiki-v1-data-DEzgNKYh.mjs";
import { t as Route } from "./search-CzVNt4wm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-Cu8tis3I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function joinText(...parts) {
	return parts.filter((part) => Boolean(part && part.trim())).join(" ").toLowerCase();
}
function buildIndex() {
	const docs = [];
	docs.push({
		id: "page:deep-dive",
		title: "Official Deep Dive",
		href: "/deep-dive",
		category: "page",
		description: "Blizzard-confirmed Camping, Legacy, Realmless, professions, transmog, itemization, racials, and Paladin changes.",
		text: joinText("deep dive official blizzard", "camping campfire profession professions profession objects 600 recipes blueprints", "legacy legacy points professions adventure resourcefulness 16 points 65 points spectral bear cub", "realmless rulesets normal pvp roleplaying hardcore", "transmog itemization hit crit weapon skill", "racials two active two passive", "paladin holy strike seal of fury consecration vindication sacred arbiter champion of the light instrument of the law twist of light")
	}, {
		id: "page:classes",
		title: "Classes",
		href: "/classes",
		category: "page",
		description: "All playable classes, talent trees, and Forever changes.",
		text: joinText("classes", "class guide", "职业", "talent trees", "warrior paladin hunter rogue priest shaman mage warlock druid")
	}, {
		id: "page:races",
		title: "Races",
		href: "/races",
		category: "page",
		description: "Playable races, racials, and faction notes.",
		text: joinText("races racials faction 种族 alliance horde", "gnome priest human hunter dwarf shaman orc mage troll warlock undead paladin", "two active two passive")
	}, {
		id: "page:zones",
		title: "Zones",
		href: "/zones",
		category: "page",
		description: "Official Mount Hyjal, Shen'dralas, Riverglades, and Zephras Isle overview.",
		text: joinText("zones 区域 mount hyjal darkwhisper gorge", "shen'dralas valley of bones eldre'thalas dire maul desolace", "riverglades nearly 200 quests stranglethorn vale size powderfuse port steamwheedle mid 30s mid 40s", "zephras isle skyborne skywall windshapers high order al'aketh levels 1 12", "wetlands ship routes auberdine southshore")
	}, {
		id: "page:quests",
		title: "Quests",
		href: "/quests",
		category: "page",
		description: "Official overview of 1,000+ new Forever quests and newly confirmed storylines.",
		text: joinText("quests 任务 1000 quests leveling", "riverglades nearly 200 quests powderfuse port", "zephras isle skyborne 1 12 quests", "wetlands new quests desolace centaur faction rewards", "forsaken undead paladin bandarion keep whispering wood tirisfal glades level 60 epic mount retribution")
	}, {
		id: "page:items",
		title: "Items & Itemization",
		href: "/items",
		category: "page",
		description: "Official Forever itemization changes and named item examples.",
		text: joinText("items itemization 物品 gear loot hit crit weapon skill spell power dungeon loot rare world drops quest rewards", "worgenbane talisman", "x'caliboar", "ladimore heirloom ring", "master hunter's spellsword")
	}, {
		id: "page:dungeons",
		title: "Dungeons",
		href: "/dungeons",
		category: "page",
		description: "Nine Blizzard-announced Forever dungeons with source-ranked details.",
		text: joinText("dungeons", "instances", "副本", "dungeon list")
	}, {
		id: "page:raids",
		title: "Raids",
		href: "/raids",
		category: "page",
		description: "Official launch raids plus separately labeled roadmap reporting.",
		text: joinText("raids", "raid list", "团队副本", "barrow deeps", "hyjal")
	}, {
		id: "page:talents",
		title: "Talent Calculator",
		href: "/talents",
		category: "page",
		description: "Browse Forever talent trees by class.",
		text: joinText("talents", "talent calculator", "天赋", "talent tree")
	}, {
		id: "page:forever-vs-classic",
		title: "Forever vs Classic",
		href: "/forever-vs-classic",
		category: "page",
		description: "Official system differences plus research-derived talent differences.",
		text: joinText("forever vs classic", "comparison", "differences", "对比", "classic era", "systems", "talent differences")
	}, {
		id: "page:race-class",
		title: "Race-Class Combinations",
		href: "/race-class-combinations",
		category: "page",
		description: "Six Blizzard-confirmed new combinations plus the broader research matrix.",
		text: joinText("race class combinations matrix availability 种族职业组合 allowed classes", "gnome priest human hunter dwarf shaman orc mage troll warlock undead paladin")
	});
	for (const entry of classes) {
		const trees = entry.trees.join(" ");
		docs.push({
			id: `class:${entry.slug}`,
			title: entry.name,
			href: `/classes/${entry.slug}`,
			category: "class",
			description: `${entry.talentCount} talents · trees: ${entry.trees.join(", ")}`,
			text: joinText(entry.name, entry.slug, "class", "职业", trees, "talents")
		});
		docs.push({
			id: `talents:${entry.slug}`,
			title: `${entry.name} Talents`,
			href: `/talents/${entry.slug}`,
			category: "page",
			description: `Talent calculator for ${entry.name}.`,
			text: joinText(entry.name, "talents", "天赋", trees, "calculator")
		});
		const talentSet = getTalentSet(entry.slug);
		if (!talentSet) continue;
		for (const talent of talentSet.talents) docs.push({
			id: `talent:${entry.slug}:${slugify(talent.name)}`,
			title: talent.name,
			href: `/talents/${entry.slug}`,
			category: "talent",
			description: `${entry.name} · ${talent.tree} · Tier ${talent.tier}`,
			text: joinText(talent.name, entry.name, talent.tree, talent.rank_text?.join(" "), talent.note, "talent", "天赋")
		});
	}
	for (const race of races) {
		docs.push({
			id: `race:${race.slug}`,
			title: race.race,
			href: `/races/${race.slug}`,
			category: "race",
			description: `${race.faction} · ${race.classes.join(", ")}`,
			text: joinText(race.race, race.faction, race.classes.join(" "), race.racials.map((r) => `${r.name} ${r.description}`).join(" "), race.slug === "undead" ? "bandarion keep whispering wood epic mount retribution forsaken paladin" : "", "race", "种族")
		});
		for (const racial of race.racials) docs.push({
			id: `racial:${race.slug}:${slugify(racial.name)}`,
			title: racial.name,
			href: `/races/${race.slug}`,
			category: "racial",
			description: `${race.race} racial · ${racial.description}`,
			text: joinText(racial.name, racial.description, race.race, race.faction, "racial", "种族特性")
		});
	}
	for (const dungeon of dungeons) {
		const notes = "notes" in dungeon ? String(dungeon.notes ?? "") : "";
		docs.push({
			id: `dungeon:${dungeon.slug}`,
			title: dungeon.name,
			href: `/dungeons/${dungeon.slug}`,
			category: "dungeon",
			description: [dungeon.zone, dungeon.level_range].filter(Boolean).join(" · "),
			text: joinText(dungeon.name, dungeon.zone, dungeon.entrance, dungeon.level_range, notes, "dungeon", "副本")
		});
	}
	for (const raid of raids) docs.push({
		id: `raid:${raid.slug}`,
		title: raid.name,
		href: "/raids",
		category: "raid",
		description: `${raid.player_count}-player · ${raid.zone}`,
		text: joinText(raid.name, raid.zone, raid.entrance, raid.release_phase, Array.isArray(raid.loot) ? raid.loot.join(" ") : "", "raid", "团队副本")
	});
	return docs;
}
var cachedIndex = null;
function getWikiSearchIndex() {
	if (!cachedIndex) cachedIndex = buildIndex();
	return cachedIndex;
}
function includesToken(haystack, token) {
	if (token.length <= 3) return new RegExp(`(?:^|[^a-z0-9])${escapeRegExp(token)}(?:$|[^a-z0-9])`).test(haystack);
	return haystack.includes(token);
}
function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function matchesQuery(haystack, query) {
	if (query.length <= 3) return includesToken(haystack, query);
	return includesToken(haystack, query) || haystack.includes(query);
}
function scoreDocument(doc, query, tokens) {
	const title = doc.title.toLowerCase();
	const text = doc.text;
	let score = 0;
	if (title === query) score += 100;
	else if (title.startsWith(query)) score += 60;
	else if (matchesQuery(title, query)) score += 40;
	else if (matchesQuery(text, query)) score += 20;
	for (const token of tokens) if (title === token) score += 25;
	else if (title.startsWith(token)) score += 15;
	else if (matchesQuery(title, token)) score += 10;
	else if (matchesQuery(text, token)) score += 4;
	if (score === 0) return 0;
	if (doc.category === "class" || doc.category === "race") score += 3;
	if (doc.category === "dungeon" || doc.category === "raid") score += 2;
	if (doc.category === "page") score += 1;
	return score;
}
function searchWiki(rawQuery, limit = 40) {
	const query = rawQuery.trim().toLowerCase();
	if (!query) return [];
	const tokens = query.split(/\s+/).filter((token) => token.length >= 2);
	const results = [];
	for (const doc of getWikiSearchIndex()) {
		const score = scoreDocument(doc, query, tokens.length ? tokens : [query]);
		if (score > 0) results.push({
			...doc,
			score
		});
	}
	results.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
	return results.slice(0, limit);
}
var categoryLabel = (category) => {
	switch (category) {
		case "class": return wiki_search_category_class();
		case "race": return wiki_search_category_race();
		case "dungeon": return wiki_search_category_dungeon();
		case "raid": return wiki_search_category_raid();
		case "talent": return wiki_search_category_talent();
		case "racial": return wiki_search_category_racial();
		case "page": return wiki_search_category_page();
	}
};
function SearchPage() {
	const navigate = useNavigate({ from: "/search" });
	const { q = "" } = Route.useSearch();
	const [query, setQuery] = (0, import_react.useState)(q);
	(0, import_react.useEffect)(() => {
		setQuery(q);
	}, [q]);
	const results = q ? searchWiki(q) : [];
	function onSubmit(e) {
		e.preventDefault();
		const next = query.trim();
		navigate({
			search: next ? { q: next } : {},
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-2xl flex-1 px-4 py-16 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiBreadcrumbs, { items: [{ label: wiki_search_title() }] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-3xl tracking-tight sm:text-4xl",
						children: wiki_search_title()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-3 text-sm sm:text-base",
						children: wiki_search_description()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "mt-8 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: wiki_search_placeholder(),
							"aria-label": wiki_search_placeholder(),
							className: "h-11",
							autoFocus: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
							type: "submit",
							className: "h-11 gap-1.5 px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), wiki_search_submit()]
						})]
					}),
					q ? results.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mb-4 text-sm",
							children: wiki_search_results_count({
								count: results.length,
								query: q
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-border border-border divide-y border",
							children: results.map((result) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
								href: result.href,
								className: "hover:bg-muted/40 block px-4 py-4 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-lg tracking-tight",
										children: result.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground shrink-0 text-xs tracking-wide uppercase",
										children: categoryLabel(result.category)
									})]
								}), result.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mt-1 line-clamp-2 text-sm leading-6",
									children: result.description
								}) : null]
							}) }, result.id))
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-border bg-muted/30 mt-10 border px-5 py-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: wiki_search_empty({ query: q })
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { SearchPage as component };
