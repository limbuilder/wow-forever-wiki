//#region node_modules/.nitro/vite/services/ssr/assets/talents.index-SVJaSqwk.js
function talentsCopy(locale) {
	if (locale === "zh") return {
		metaTitle: "WoW Forever 天赋计算器与天赋树",
		metaDescription: "World of Warcraft: Forever 全 9 职业天赋计算器，支持分享构筑，并展示官方背景、Classic 对比、种族数据与逐天赋验证标签。",
		eyebrow: "天赋计算器",
		title: "WoW Forever 天赋计算器",
		description: "为全部 9 个职业构建和分享基于研究数据的天赋方案。已有暴雪官方确认的职业方向会优先展示；具体等级、位置和技能说明数值在 Beta 校验前继续保留明确验证标签。",
		classes: "职业",
		trees: "天赋树",
		tracked: "已追踪天赋",
		provisional: "暂定等级",
		calculator: "天赋计算器",
		cardMeta: (entry) => `${entry.talentCount} 个天赋 · ${entry.completeCount} 组完整技能说明`
	};
	if (locale === "zh-TW") return {
		metaTitle: "WoW Forever 天賦計算器與天賦樹",
		metaDescription: "World of Warcraft: Forever 全 9 職業天賦計算器，支援分享配點，並展示官方背景、Classic 比較、種族資料與逐天賦驗證標籤。",
		eyebrow: "天賦計算器",
		title: "WoW Forever 天賦計算器",
		description: "為全部 9 個職業建立並分享基於研究資料的天賦方案。已有暴雪官方確認的職業方向會優先展示；具體等級、位置與技能說明數值在 Beta 校驗前仍保留明確驗證標籤。",
		classes: "職業",
		trees: "天賦樹",
		tracked: "已追蹤天賦",
		provisional: "暫定等級",
		calculator: "天賦計算器",
		cardMeta: (entry) => `${entry.talentCount} 個天賦 · ${entry.completeCount} 組完整技能說明`
	};
	return {
		metaTitle: "WoW Forever Talent Calculators & Talent Trees",
		metaDescription: "Interactive World of Warcraft: Forever talent calculators for all nine classes, with shareable builds, official context, Classic comparisons, race data, and per-talent verification labels.",
		eyebrow: "Talent calculators",
		title: "WoW Forever Talent Calculators",
		description: "Build and share research-backed talent setups for all nine classes. Blizzard-confirmed class direction is shown where available, while granular ranks, placements, and tooltip values keep explicit verification labels until Beta can validate them.",
		classes: "Classes",
		trees: "Talent trees",
		tracked: "Talents tracked",
		provisional: "Provisional ranks",
		calculator: "Talent Calculator",
		cardMeta: (entry) => `${entry.talentCount} talents · ${entry.completeCount} complete tooltip sets`
	};
}
//#endregion
export { talentsCopy as t };
