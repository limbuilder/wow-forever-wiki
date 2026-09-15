import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { o as zoneMediaBySlug } from "./wiki-media-B73q5XyY.mjs";
import { i as StatGrid, n as EntityCard, o as WikiMediaFigure, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { t as zonesCopy } from "./zones-Dx4-aVLq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/zones-CiOGHW76.js
var import_jsx_runtime = require_jsx_runtime();
var whatsNextSource = "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap";
var foundPhotosSource = "https://news.blizzard.com/en-us/article/24304071/world-of-warcraft-forever-found-photos-panel-recap";
var zones = [
	{
		slug: "mount-hyjal",
		name: "Mount Hyjal",
		description: {
			en: "An anticipated region exploring the aftermath of the Battle for Mount Hyjal, emerging factions, Darkwhisper Gorge, and the future of a recovering Hyjal.",
			zh: "一个玩家期待已久的区域，围绕海加尔山之战后的余波、新兴阵营、Darkwhisper Gorge，以及正在恢复中的 Hyjal 未来展开。",
			"zh-TW": "一個玩家期待已久的區域，圍繞海加爾山之戰後的餘波、新興陣營、Darkwhisper Gorge，以及正在復原中的 Hyjal 未來展開。"
		},
		meta: {
			en: "Anticipated · officially confirmed",
			zh: "Anticipated · 官方确认",
			"zh-TW": "Anticipated · 官方確認"
		}
	},
	{
		slug: "shen-dralas",
		name: "Shen'dralas",
		description: {
			en: "A new area reached south of Desolace through the Valley of Bones, opening stories tied to the Shen'dralar, Eldre'Thalas, Dire Maul, and the centaur tribes.",
			zh: "从 Desolace 南部穿过 Valley of Bones 可进入的新区域，连接 Shen'dralar、Eldre'Thalas、Dire Maul 与半人马部族相关故事。",
			"zh-TW": "從 Desolace 南部穿過 Valley of Bones 可進入的新區域，串連 Shen'dralar、Eldre'Thalas、Dire Maul 與半人馬部族相關故事。"
		},
		meta: {
			en: "New but familiar · officially confirmed",
			zh: "New but familiar · 官方确认",
			"zh-TW": "New but familiar · 官方確認"
		}
	},
	{
		slug: "riverglades",
		name: "Riverglades",
		description: {
			en: "A previously inaccessible mid-level frontier roughly the size of Stranglethorn Vale, now confirmed to contain nearly 200 quests for Horde and Alliance. Powderfuse Port connects it to a new Steamwheedle sea route.",
			zh: "一个此前无法进入的中等级边境区域，规模约等于 Stranglethorn Vale；最新官方回顾确认 Horde 与 Alliance 合计接近 200 个任务。Powderfuse Port 将这里接入新的 Steamwheedle 海运路线。",
			"zh-TW": "一個先前無法進入的中等級邊境區域，規模約等於 Stranglethorn Vale；最新官方回顧確認 Horde 與 Alliance 合計接近 200 個任務。Powderfuse Port 將這裡接入新的 Steamwheedle 海運路線。"
		},
		meta: {
			en: "Mid-30s to mid-40s · nearly 200 quests · ~STV size",
			zh: "30 多级中段至 40 多级中段 · 接近 200 任务 · 约 STV 规模",
			"zh-TW": "30 多級中段至 40 多級中段 · 接近 200 任務 · 約 STV 規模"
		}
	},
	{
		slug: "zephras-isle",
		name: "Zephras Isle",
		description: {
			en: "The Skyborne starting experience. Their ancestors fled Eldre'Thalas after the War of the Ancients and found refuge in Skywall; the island is now destabilizing as its elemental benefactors vanish and rival groups compete for control.",
			zh: "Skyborne 的起始体验。他们的祖先在 War of the Ancients 后逃离 Eldre'Thalas，并在 Skywall 获得庇护；如今元素盟友消失、岛屿开始失稳，多股势力争夺控制权。",
			"zh-TW": "Skyborne 的起始體驗。他們的祖先在 War of the Ancients 後逃離 Eldre'Thalas，並在 Skywall 獲得庇護；如今元素盟友消失、島嶼開始失穩，多股勢力爭奪控制權。"
		},
		meta: {
			en: "Levels 1–12 · Windshapers · High Order · Al’Aketh",
			zh: "等级 1–12 · Windshapers · High Order · Al’Aketh",
			"zh-TW": "等級 1–12 · Windshapers · High Order · Al’Aketh"
		}
	}
];
var travelRoutes = [
	{
		en: "Stormwind Harbor → Auberdine",
		zh: "Stormwind Harbor → Auberdine",
		"zh-TW": "Stormwind Harbor → Auberdine"
	},
	{
		en: "Menethil → Southshore → Auberdine",
		zh: "Menethil → Southshore → Auberdine",
		"zh-TW": "Menethil → Southshore → Auberdine"
	},
	{
		en: "Steamwheedle Cartel (Tanaris) → Riverglades / Powderfuse Port",
		zh: "Steamwheedle Cartel（Tanaris）→ Riverglades / Powderfuse Port",
		"zh-TW": "Steamwheedle Cartel（Tanaris）→ Riverglades / Powderfuse Port"
	}
];
function localeKey(locale) {
	return locale === "zh" || locale === "zh-TW" ? locale : "en";
}
function ZonesPage() {
	const locale = getLocale();
	const key = localeKey(locale);
	const copy = zonesCopy(locale);
	const visualEvidence = ["riverglades", "mount-hyjal"].map((slug) => zoneMediaBySlug[slug]).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: copy.eyebrow,
		title: copy.title,
		description: copy.description,
		breadcrumbs: [{ label: copy.title }],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: "official" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatGrid, { items: [
				{
					label: copy.highlighted,
					value: zones.length
				},
				{
					label: copy.quests,
					value: "1,000+"
				},
				{
					label: copy.riverglades,
					value: "≈200"
				},
				{
					label: copy.zephras,
					value: "1–12"
				}
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: zones.map((zone) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityCard, {
					title: zone.name,
					description: zone.description[key],
					meta: zone.meta[key],
					verification: "official_confirmed"
				}, zone.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 border-t border-white/10 pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: copy.philosophy
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-3 max-w-3xl text-sm leading-6",
					children: copy.philosophyBody
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: copy.travel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-3 max-w-3xl text-sm leading-6",
						children: copy.travelBody
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 md:grid-cols-3",
						children: travelRoutes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-border bg-card border p-4 text-sm font-medium leading-6",
							children: route[key]
						}, route.en))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: copy.updates
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-3 max-w-3xl text-sm leading-6",
					children: copy.updatesBody
				})]
			}),
			visualEvidence.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: copy.evidence
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 max-w-3xl text-sm leading-6",
						children: copy.evidenceBody
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-4 md:grid-cols-2",
						children: visualEvidence.map((media) => media ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiMediaFigure, { media }, media.alt) : null)
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 border-t border-white/10 pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: copy.missing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-3 max-w-3xl text-sm leading-6",
						children: copy.missingBody
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: foundPhotosSource,
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: copy.foundPhotos
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsNextSource,
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: copy.whatsNext
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ZonesPage as component };
