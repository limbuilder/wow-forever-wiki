import { d as lazyRouteComponent, f as createFileRoute, v as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { t as pageHead } from "./seo-ZXeCiUz7.mjs";
import { l as getDungeon } from "./wiki-v1-data-DEzgNKYh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dungeons._dungeonSlug-zRgCyJG1.js
function detailCopy(locale, name) {
	if (locale === "zh") return {
		metaTitle: `${name} · WoW Forever 地下城`,
		metaDescription: `${name} 在 WoW Forever 中的官方地下城身份，以及按来源等级整理的区域、推荐等级、入口、Boss 与证据状态。`,
		eyebrow: "地下城",
		dungeons: "地下城",
		fallback: "一个来自官方公告与实机研究、正在持续整理的 World of Warcraft: Forever 地下城。",
		zone: "区域",
		level: "等级范围",
		entrance: "入口",
		status: "地下城状态",
		tbd: "待定",
		statusNote: "状态标签只表示地下城条目本身的证据等级。推荐等级、入口、Boss 与子区域字段的证据等级可能低于已经官方公布的地下城名称。",
		bosses: "已知 Boss 与子区域",
		noBosses: "暴雪尚未公布该地下城的完整 Boss 列表。本站会等待经过验证的 Beta 或官方数据，而不会从 Azeroth 的旧版本中自行推断。",
		subAreas: "录像中出现的子区域"
	};
	if (locale === "zh-TW") return {
		metaTitle: `${name} · WoW Forever 地城`,
		metaDescription: `${name} 在 WoW Forever 中的官方地城身分，以及依來源等級整理的區域、建議等級、入口、Boss 與證據狀態。`,
		eyebrow: "地城",
		dungeons: "地城",
		fallback: "一個來自官方公告與實機研究、正在持續整理的 World of Warcraft: Forever 地城。",
		zone: "區域",
		level: "等級範圍",
		entrance: "入口",
		status: "地城狀態",
		tbd: "待定",
		statusNote: "狀態標籤只表示地城條目本身的證據等級。建議等級、入口、Boss 與子區域欄位的證據等級可能低於已經官方公布的地城名稱。",
		bosses: "已知 Boss 與子區域",
		noBosses: "暴雪尚未公布該地城的完整 Boss 清單。本站會等待經過驗證的 Beta 或官方資料，而不會從 Azeroth 的舊版本中自行推斷。",
		subAreas: "錄影中出現的子區域"
	};
	return {
		metaTitle: `${name} · WoW Forever Dungeon`,
		metaDescription: `${name} in WoW Forever: official dungeon identity plus source-ranked zone, level range, entrance, bosses, and evidence status.`,
		eyebrow: "Dungeon",
		dungeons: "Dungeons",
		fallback: "A World of Warcraft: Forever dungeon tracked from official announcements and gameplay research.",
		zone: "Zone",
		level: "Level range",
		entrance: "Entrance",
		status: "Dungeon status",
		tbd: "TBD",
		statusNote: "The status badge applies to the dungeon entry itself. Level range, entrance, boss, and sub-area fields may have a lower evidence level than the officially announced dungeon name.",
		bosses: "Known bosses and sub-areas",
		noBosses: "Blizzard has not published a complete boss list for this dungeon. We will fill this section from verified Beta or official data rather than infer it from older versions of Azeroth.",
		subAreas: "Sub-areas seen in footage"
	};
}
var $$splitComponentImporter = () => import("./dungeons._dungeonSlug-CoJs2bJi.mjs");
var Route = createFileRoute("/dungeons/$dungeonSlug")({
	loader: ({ params }) => {
		const dungeon = getDungeon(params.dungeonSlug);
		if (!dungeon) throw notFound();
		return dungeon;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const locale = getLocale();
		const c = detailCopy(locale, loaderData.name);
		return pageHead(`/dungeons/${loaderData.slug}`, locale, {
			title: c.metaTitle,
			description: c.metaDescription
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { detailCopy as n, Route as t };
