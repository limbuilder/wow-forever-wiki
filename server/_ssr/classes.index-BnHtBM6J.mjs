import { s as envConfigs } from "./schema-_Dk5pXhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/classes.index-BnHtBM6J.js
function classesCopy(locale) {
	if (locale === "zh") return {
		metaTitle: `WoW Forever 职业与天赋树 · ${envConfigs.app_name}`,
		metaDescription: "浏览 World of Warcraft: Forever 的 9 个职业、天赋树、已提取天赋、官方职业改动与逐条验证状态。",
		eyebrow: "职业",
		title: "WoW Forever 职业",
		description: "追踪全部 9 个职业，并将暴雪官方确认的改动、实机证据、Creator Showcase 画面和社区技能说明转录按来源等级区分。",
		classes: "职业",
		trees: "天赋树",
		talents: "已提取天赋",
		complete: "完整等级",
		note: "其余细粒度等级数据在 Beta 校验前仍为暂定。",
		meta: (entry) => `${entry.talentCount} 个天赋 · ${entry.completeCount} 个完整 · ${entry.estimatedCount} 个暂定`
	};
	if (locale === "zh-TW") return {
		metaTitle: `WoW Forever 職業與天賦樹 · ${envConfigs.app_name}`,
		metaDescription: "瀏覽 World of Warcraft: Forever 的 9 個職業、天賦樹、已擷取天賦、官方職業改動與逐筆驗證狀態。",
		eyebrow: "職業",
		title: "WoW Forever 職業",
		description: "追蹤全部 9 個職業，並將暴雪官方確認的改動、實機證據、Creator Showcase 畫面與社群技能說明轉錄依來源等級區分。",
		classes: "職業",
		trees: "天賦樹",
		talents: "已擷取天賦",
		complete: "完整等級",
		note: "其餘細部等級資料在 Beta 校驗前仍為暫定。",
		meta: (entry) => `${entry.talentCount} 個天賦 · ${entry.completeCount} 個完整 · ${entry.estimatedCount} 個暫定`
	};
	return {
		metaTitle: `WoW Forever Classes & Talent Trees · ${envConfigs.app_name}`,
		metaDescription: "Browse all nine World of Warcraft: Forever classes, their talent trees, extracted talents, official class updates, and per-entry verification status.",
		eyebrow: "Classes",
		title: "WoW Forever Classes",
		description: "All nine classes are tracked with a source-ranked mix of Blizzard-confirmed changes, gameplay evidence, Creator Showcase footage, and community tooltip transcription.",
		classes: "Classes",
		trees: "Talent trees",
		talents: "Talents extracted",
		complete: "Complete ranks",
		note: "Remaining granular ranks stay provisional until Beta validation.",
		meta: (entry) => `${entry.talentCount} talents · ${entry.completeCount} complete · ${entry.estimatedCount} provisional`
	};
}
//#endregion
export { classesCopy as t };
