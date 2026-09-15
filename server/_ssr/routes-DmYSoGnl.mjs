//#region node_modules/.nitro/vite/services/ssr/assets/routes-DmYSoGnl.js
function homepageMeta(locale) {
	if (locale === "zh") return {
		title: "WoW Forever Wiki — 种族、职业、天赋、区域与副本",
		description: "非官方《World of Warcraft: Forever》百科：优先整理暴雪官方确认内容，并对种族、职业、天赋、区域、副本、团队副本和 Forever vs Classic 研究数据标注证据等级。"
	};
	if (locale === "zh-TW") return {
		title: "WoW Forever Wiki — 種族、職業、天賦、區域與地城",
		description: "非官方《World of Warcraft: Forever》百科：優先整理暴雪官方確認內容，並對種族、職業、天賦、區域、地城、團隊副本與 Forever vs Classic 研究資料標示證據等級。"
	};
	return {
		title: "WoW Forever Wiki — Races, Classes, Talents, Zones & Dungeons",
		description: "Unofficial evidence-ranked encyclopedia for World of Warcraft: Forever, prioritizing Blizzard-confirmed reveals across races, classes, talents, zones, dungeons, raids, and Forever vs Classic research."
	};
}
//#endregion
export { homepageMeta as t };
