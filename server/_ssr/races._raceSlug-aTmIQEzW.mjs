import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { g as slugify } from "./wiki-v1-data-DEzgNKYh.mjs";
import { r as raceMediaBySlug } from "./wiki-media-B73q5XyY.mjs";
import { a as VerificationBadge, n as EntityCard, o as WikiMediaFigure, r as SourceLinks, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { n as detailCopy, t as Route } from "./races._raceSlug-ChpEeCHl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/races._raceSlug-aTmIQEzW.js
var import_jsx_runtime = require_jsx_runtime();
var deepDiveSource = "https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap";
var foundPhotosSource = "https://news.blizzard.com/en-us/article/24304071/world-of-warcraft-forever-found-photos-panel-recap";
var officialRaceNotes = {
	dwarf: {
		title: "Dwarf changes confirmed by Blizzard",
		points: [
			"Dwarf Shaman is an officially confirmed new race-class combination.",
			"Stoneform continues to remove and protect against Bleed, Poison, and Disease effects, while its defensive benefit shifts from bonus Armor to physical damage reduction.",
			"Find Treasure can be active alongside other tracking abilities.",
			"Mace Specialization is redesigned to improve critical strike chance for spells and abilities while a mace is equipped.",
			"Big Game Hunter is a new racial that increases damage dealt to Beasts."
		]
	},
	undead: {
		title: "Undead changes confirmed by Blizzard",
		points: [
			"Undead Paladin is an officially confirmed new race-class combination.",
			"Will of the Forsaken still breaks Charm, Fear, and Sleep, but no longer grants a follow-up immunity window.",
			"Cannibalize restores both Health and Mana.",
			"Underwater Breathing remains part of the racial kit.",
			"Touch of the Grave is a new racial that can drain life from enemies when attacks land.",
			"Bandarion Keep in the Whispering Wood of Tirisfal Glades is a key location in the Forsaken Paladin story.",
			"At level 60, Forsaken Paladins receive their own epic mount quest centered on Retribution."
		]
	},
	gnome: {
		title: "New class path confirmed by Blizzard",
		points: ["Gnome Priest is an officially confirmed new race-class combination."]
	},
	human: {
		title: "New class path confirmed by Blizzard",
		points: ["Human Hunter is an officially confirmed new race-class combination."]
	},
	orc: {
		title: "New class path confirmed by Blizzard",
		points: ["Orc Mage is an officially confirmed new race-class combination."]
	},
	troll: {
		title: "New class path confirmed by Blizzard",
		points: ["Troll Warlock is an officially confirmed new race-class combination."]
	}
};
function localizedOfficialNote(slug, locale) {
	const note = officialRaceNotes[slug];
	if (!note || locale === "en") return note;
	const traditional = locale === "zh-TW";
	const title = slug === "dwarf" ? traditional ? "暴雪確認的 Dwarf 改動" : "暴雪确认的 Dwarf 改动" : slug === "undead" ? traditional ? "暴雪確認的 Undead 改動" : "暴雪确认的 Undead 改动" : traditional ? "暴雪確認的新職業路線" : "暴雪确认的新职业路线";
	if (slug === "dwarf") return {
		title,
		points: traditional ? [
			"Dwarf Shaman 是官方確認的新種族-職業組合。",
			"Stoneform 仍會移除並防護 Bleed、Poison 與 Disease 效果，但防禦收益由額外 Armor 改為物理傷害減免。",
			"Find Treasure 可以與其他追蹤能力同時啟用。",
			"Mace Specialization 重新設計為裝備 mace 時提高法術與技能的致命一擊機率。",
			"Big Game Hunter 是新的種族技能，提高對 Beasts 的傷害。"
		] : [
			"Dwarf Shaman 是官方确认的新种族-职业组合。",
			"Stoneform 仍会移除并防护 Bleed、Poison 与 Disease 效果，但防御收益由额外 Armor 改为物理伤害减免。",
			"Find Treasure 可以与其它追踪能力同时启用。",
			"Mace Specialization 重新设计为装备 mace 时提高法术与技能的暴击概率。",
			"Big Game Hunter 是新的种族技能，提高对 Beasts 的伤害。"
		]
	};
	if (slug === "undead") return {
		title,
		points: traditional ? [
			"Undead Paladin 是官方確認的新種族-職業組合。",
			"Will of the Forsaken 仍可解除 Charm、Fear 與 Sleep，但不再提供後續免疫時間。",
			"Cannibalize 同時恢復 Health 與 Mana。",
			"Underwater Breathing 仍是種族技能的一部分。",
			"Touch of the Grave 是新的種族技能，攻擊命中時可從敵人吸取生命。",
			"Tirisfal Glades 的 Whispering Wood 中，Bandarion Keep 是 Forsaken Paladin 故事的重要地點。",
			"60 級時，Forsaken Paladin 會獲得以 Retribution 為主題的專屬史詩坐騎任務。"
		] : [
			"Undead Paladin 是官方确认的新种族-职业组合。",
			"Will of the Forsaken 仍可解除 Charm、Fear 与 Sleep，但不再提供后续免疫时间。",
			"Cannibalize 同时恢复 Health 与 Mana。",
			"Underwater Breathing 仍是种族技能的一部分。",
			"Touch of the Grave 是新的种族技能，攻击命中时可从敌人吸取生命。",
			"Tirisfal Glades 的 Whispering Wood 中，Bandarion Keep 是 Forsaken Paladin 故事的重要地点。",
			"60 级时，Forsaken Paladin 会获得以 Retribution 为主题的专属史诗坐骑任务。"
		]
	};
	const combo = note.points[0]?.split(" is ")[0] || "";
	return {
		title,
		points: [traditional ? `${combo} 是官方確認的新種族-職業組合。` : `${combo} 是官方确认的新种族-职业组合。`]
	};
}
function RaceDetailPage() {
	const race = Route.useLoaderData();
	const locale = getLocale();
	const c = detailCopy(locale, race.race, race.faction);
	const raceSlug = slugify(race.race);
	const media = raceMediaBySlug[raceSlug];
	const officialNote = localizedOfficialNote(raceSlug, locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: c.eyebrow,
		title: c.title,
		description: c.description(race.racials.length, race.classes.length),
		breadcrumbs: [{
			label: c.races,
			href: "/races"
		}, { label: race.race }],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: officialNote ? "mixed" : "provisional" }),
			media ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiMediaFigure, {
				media,
				className: "mb-8"
			}) : null,
			officialNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-primary/30 bg-primary/5 mb-8 border p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary text-xs font-semibold tracking-[0.16em] uppercase",
						children: c.confirmed
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: officialNote.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "text-muted-foreground mt-3 list-disc space-y-2 pl-5 text-sm leading-6",
						children: officialNote.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								href: "/deep-dive#races-new-class-paths",
								className: "text-primary underline-offset-4 hover:underline",
								children: c.deepDive
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: deepDiveSource,
								target: "_blank",
								rel: "noreferrer",
								className: "text-primary underline-offset-4 hover:underline",
								children: c.source
							}),
							raceSlug === "undead" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: foundPhotosSource,
								target: "_blank",
								rel: "noreferrer",
								className: "text-primary underline-offset-4 hover:underline",
								children: c.foundPhotos
							}) : null
						]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: c.racialTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationBadge, { verification: race.verification })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-2 max-w-3xl text-sm leading-6",
					children: c.racialDesc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-2",
					children: race.racials.map((racial) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-border bg-card border p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium",
									children: racial.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationBadge, { verification: racial.verification })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2 text-sm leading-6",
								children: racial.description
							}),
							racial.cooldown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [c.cooldown, ":"] }),
									" ",
									racial.cooldown
								]
							}) : null,
							"timestamp" in racial && racial.timestamp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground mt-2 text-xs",
								children: [
									c.timestamp,
									": ",
									racial.timestamp
								]
							}) : null
						]
					}, racial.name))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: c.playable
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: race.classes.map((className) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
						href: `/classes/${slugify(className)}`,
						title: className,
						meta: c.available
					}, className))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLinks, { source: [race.source, ...race.racials.map((racial) => racial.source)] })
		]
	});
}
//#endregion
export { RaceDetailPage as component };
