import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { i as StatGrid, n as EntityCard, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { t as copy } from "./quests-vL6FQ1FL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quests-DfMt41JZ.js
var import_jsx_runtime = require_jsx_runtime();
var whatsNextSource = "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap";
var foundPhotosSource = "https://news.blizzard.com/en-us/article/24304071/world-of-warcraft-forever-found-photos-panel-recap";
var questRegions = [
	{
		title: "Riverglades",
		description: {
			en: "The newer Found Photos recap expands the earlier 150+ estimate to nearly 200 quests for Horde and Alliance in a mid-level zone roughly the size of Stranglethorn Vale.",
			zh: "较新的 Found Photos 官方回顾把此前 150+ 的说法进一步扩展为 Horde 与 Alliance 合计接近 200 个任务；该中等级区域规模约等于 Stranglethorn Vale。",
			"zh-TW": "較新的 Found Photos 官方回顧把先前 150+ 的說法進一步擴展為 Horde 與 Alliance 合計接近 200 個任務；該中等級區域規模約等於 Stranglethorn Vale。"
		},
		meta: {
			en: "Nearly 200 quests · mid-30s to mid-40s",
			zh: "接近 200 任务 · 30 多级中段至 40 多级中段",
			"zh-TW": "接近 200 任務 · 30 多級中段至 40 多級中段"
		}
	},
	{
		title: "Zephras Isle",
		description: {
			en: "A complete elemental Skyborne starting experience across levels 1–12, with a crisis involving the Windshapers, High Order, and Al’Aketh.",
			zh: "完整的 Skyborne 元素主题起始体验，覆盖 1–12 级；剧情危机涉及 Windshapers、High Order 与 Al’Aketh。",
			"zh-TW": "完整的 Skyborne 元素主題起始體驗，涵蓋 1–12 級；劇情危機涉及 Windshapers、High Order 與 Al’Aketh。"
		},
		meta: {
			en: "Starting experience · levels 1–12",
			zh: "起始体验 · 等级 1–12",
			"zh-TW": "起始體驗 · 等級 1–12"
		}
	},
	{
		title: "Mount Hyjal",
		description: {
			en: "Questing explores the aftermath of the Battle for Mount Hyjal, emerging factions, Darkwhisper Gorge, and the future of a recovering Hyjal.",
			zh: "任务线探索海加尔山之战后的余波、新兴阵营、Darkwhisper Gorge，以及正在恢复中的 Hyjal 未来。",
			"zh-TW": "任務線探索海加爾山之戰後的餘波、新興陣營、Darkwhisper Gorge，以及正在復原中的 Hyjal 未來。"
		},
		meta: {
			en: "Official story direction",
			zh: "官方剧情方向",
			"zh-TW": "官方劇情方向"
		}
	},
	{
		title: "Shen'dralas",
		description: {
			en: "South of Desolace through the Valley of Bones, a newly opened area expands stories tied to the Shen'dralar, Eldre'Thalas, Dire Maul, and the centaur tribes.",
			zh: "从 Desolace 南部穿过 Valley of Bones 后，新开放区域会扩展 Shen'dralar、Eldre'Thalas、Dire Maul 与半人马部族相关故事。",
			"zh-TW": "從 Desolace 南部穿過 Valley of Bones 後，新開放區域會擴展 Shen'dralar、Eldre'Thalas、Dire Maul 與半人馬部族相關故事。"
		},
		meta: {
			en: "Official story direction",
			zh: "官方剧情方向",
			"zh-TW": "官方劇情方向"
		}
	}
];
var additionalUpdates = [
	{
		title: {
			en: "Starting zones",
			zh: "起始区域",
			"zh-TW": "起始區域"
		},
		body: {
			en: "Existing starting paths gain new NPCs, quests, profession hooks, recipes, and small world moments designed to sit alongside the original Classic experience.",
			zh: "现有起始路线会新增 NPC、任务、专业技能钩子、配方与小型世界事件，并与原版 Classic 内容并存。",
			"zh-TW": "既有起始路線會新增 NPC、任務、專業技能鉤子、配方與小型世界事件，並與原版 Classic 內容並存。"
		}
	},
	{
		title: {
			en: "Wetlands",
			zh: "Wetlands",
			"zh-TW": "Wetlands"
		},
		body: {
			en: "Blizzard says Wetlands will gain new quests and opportunities to continue existing characters and story threads.",
			zh: "暴雪确认 Wetlands 会增加新任务，并继续扩展既有角色与故事线索。",
			"zh-TW": "暴雪確認 Wetlands 會增加新任務，並繼續擴展既有角色與故事線索。"
		}
	},
	{
		title: {
			en: "Desolace centaur factions",
			zh: "Desolace 半人马阵营",
			"zh-TW": "Desolace 半人馬陣營"
		},
		body: {
			en: "Centaur faction questing receives additional content and faction rewards rather than being left as the original Classic endpoint.",
			zh: "半人马阵营任务会加入更多内容与阵营奖励，不再停留在原版 Classic 的旧终点。",
			"zh-TW": "半人馬陣營任務會加入更多內容與陣營獎勵，不再停留在原版 Classic 的舊終點。"
		}
	},
	{
		title: {
			en: "Forsaken Paladin journey",
			zh: "Forsaken Paladin 路线",
			"zh-TW": "Forsaken Paladin 路線"
		},
		body: {
			en: "Bandarion Keep in the Whispering Wood of Tirisfal Glades anchors the Forsaken Paladin story. At level 60, Forsaken Paladins receive their own epic mount quest centered on Retribution.",
			zh: "Tirisfal Glades 的 Whispering Wood 中，Bandarion Keep 会成为 Forsaken Paladin 故事的重要地点。60 级时，他们还会获得以 Retribution 为主题的专属史诗坐骑任务。",
			"zh-TW": "Tirisfal Glades 的 Whispering Wood 中，Bandarion Keep 會成為 Forsaken Paladin 故事的重要地點。60 級時，他們還會獲得以 Retribution 為主題的專屬史詩坐騎任務。"
		}
	}
];
function key(locale) {
	return locale === "zh" || locale === "zh-TW" ? locale : "en";
}
function QuestsPage() {
	const locale = getLocale();
	const c = copy(locale);
	const k = key(locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: c.eyebrow,
		title: c.title,
		description: c.description,
		breadcrumbs: [{ label: c.title }],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: "official" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatGrid, { items: [
				{
					label: c.overall,
					value: "1,000+"
				},
				{
					label: c.river,
					value: "≈200"
				},
				{
					label: c.start,
					value: "1–12"
				},
				{
					label: c.cap,
					value: "60"
				}
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: questRegions.map((region) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
					title: region.title,
					description: region.description[k],
					meta: region.meta[k],
					verification: "official_confirmed"
				}, region.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: c.more
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-2",
					children: additionalUpdates.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
						title: item.title[k],
						description: item.body[k],
						verification: "official_confirmed"
					}, item.title.en))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: c.philosophy
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-muted-foreground mt-3 max-w-3xl space-y-3 text-sm leading-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.p1 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.p2 })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 border-t border-white/10 pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: c.missing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-3 max-w-3xl text-sm leading-6",
						children: c.missingBody
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: foundPhotosSource,
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: c.foundPhotos
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsNextSource,
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: c.whatsNext
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { QuestsPage as component };
