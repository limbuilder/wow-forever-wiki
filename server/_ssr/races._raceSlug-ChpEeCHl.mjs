import { d as lazyRouteComponent, f as createFileRoute, v as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { t as pageHead } from "./seo-ZXeCiUz7.mjs";
import { u as getRace } from "./wiki-v1-data-DEzgNKYh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/races._raceSlug-ChpEeCHl.js
function detailCopy(locale, raceName, faction) {
	if (locale === "zh") return {
		metaTitle: `${raceName} 种族技能与职业 · WoW Forever`,
		metaDescription: `${raceName} 在 WoW Forever 中的阵营、可玩职业、暴雪官方确认改动、种族技能与来源验证。`,
		eyebrow: `${faction} 种族`,
		title: `${raceName} · WoW Forever`,
		description: (racials, classes) => `目前追踪 ${racials} 个种族技能和 ${classes} 个可玩职业。官方确认内容与研究推导细节会分开展示。`,
		races: "种族",
		confirmed: "暴雪确认 · Deep Dive / Found Photos",
		deepDive: "查看官方 Deep Dive 总结 →",
		foundPhotos: "查看官方 Found Photos 回顾 →",
		source: "暴雪来源 ↗",
		racialTitle: "种族技能",
		racialDesc: "下方卡片保留研究档案中每个技能的证据等级；如果暴雪后来单独确认改动，上方官方总结优先于较早的转录措辞。",
		cooldown: "冷却",
		timestamp: "视频时间戳",
		playable: "可玩职业",
		available: `可用于 ${raceName}`
	};
	if (locale === "zh-TW") return {
		metaTitle: `${raceName} 種族技能與職業 · WoW Forever`,
		metaDescription: `${raceName} 在 WoW Forever 中的陣營、可玩職業、暴雪官方確認改動、種族技能與來源驗證。`,
		eyebrow: `${faction} 種族`,
		title: `${raceName} · WoW Forever`,
		description: (racials, classes) => `目前追蹤 ${racials} 個種族技能與 ${classes} 個可玩職業。官方確認內容與研究推導細節會分開呈現。`,
		races: "種族",
		confirmed: "暴雪確認 · Deep Dive / Found Photos",
		deepDive: "查看官方 Deep Dive 總結 →",
		foundPhotos: "查看官方 Found Photos 回顧 →",
		source: "暴雪來源 ↗",
		racialTitle: "種族技能",
		racialDesc: "下方卡片保留研究檔案中每個技能的證據等級；若暴雪之後單獨確認改動，上方官方總結優先於較早的轉錄措辭。",
		cooldown: "冷卻",
		timestamp: "影片時間戳",
		playable: "可玩職業",
		available: `可供 ${raceName} 使用`
	};
	return {
		metaTitle: `${raceName} Racials & Classes · WoW Forever`,
		metaDescription: `${raceName} in WoW Forever: faction, playable classes, Blizzard-confirmed changes, racial abilities, and source verification.`,
		eyebrow: `${faction} race`,
		title: `${raceName} in WoW Forever`,
		description: (racials, classes) => `${racials} racial abilities and ${classes} playable classes are currently tracked for this race. Official confirmations are separated from research-derived details.`,
		races: "Races",
		confirmed: "Blizzard confirmed · Deep Dive / Found Photos",
		deepDive: "See the official Deep Dive summary →",
		foundPhotos: "Read the official Found Photos recap →",
		source: "Blizzard source ↗",
		racialTitle: "Racial abilities",
		racialDesc: "The cards below preserve the research archive's per-ability evidence level. When Blizzard has separately confirmed a change, the official summary above takes precedence over older transcription wording.",
		cooldown: "Cooldown",
		timestamp: "Video timestamp",
		playable: "Playable classes",
		available: `Available to ${raceName}`
	};
}
var $$splitComponentImporter = () => import("./races._raceSlug-aTmIQEzW.mjs");
var Route = createFileRoute("/races/$raceSlug")({
	loader: ({ params }) => {
		const race = getRace(params.raceSlug);
		if (!race) throw notFound();
		return race;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const locale = getLocale();
		const c = detailCopy(locale, loaderData.race, loaderData.faction);
		return pageHead(`/races/${loaderData.slug}`, locale, {
			title: c.metaTitle,
			description: c.metaDescription
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { detailCopy as n, Route as t };
