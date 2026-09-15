//#region node_modules/.nitro/vite/services/ssr/assets/raids-BdO6ZQwK.js
function raidsCopy(locale) {
	if (locale === "zh") return {
		metaTitle: "WoW Forever 团队副本 — 官方首发副本与路线图",
		metaDescription: "World of Warcraft: Forever 团队副本资料，包括暴雪确认的 Barrow Deeps、Hyjal Summit，以及单独标注的路线图报道。",
		eyebrow: "团队副本",
		title: "WoW Forever 团队副本",
		description: "Barrow Deeps 与 Hyjal Summit 已由暴雪确认，分别采用 10 人与 20 人规模。其它路线图条目如果仍来自媒体报道，会继续单独标注，而不会与官方回顾混在一起。",
		confirmed: (count) => `${count} 个团队副本已由暴雪确认。`,
		body: "暴雪还确认了新的套装、一个尚未完整揭晓的传奇奖励，以及首批新增团队副本会在 12 月 9 日开放。Boss 逐个机制与掉落表在缺少官方或 Beta 证据前会保持不完整。",
		release: "开放阶段",
		tbd: "待定",
		note: "卡片上的验证标签只表示该团队副本条目本身的证据等级。即使副本名称、规模和开放窗口已官方确认，Boss 与掉落细节仍可能未知。"
	};
	if (locale === "zh-TW") return {
		metaTitle: "WoW Forever 團隊副本 — 官方首發副本與路線圖",
		metaDescription: "World of Warcraft: Forever 團隊副本資料，包括暴雪確認的 Barrow Deeps、Hyjal Summit，以及分開標示的路線圖報導。",
		eyebrow: "團隊副本",
		title: "WoW Forever 團隊副本",
		description: "Barrow Deeps 與 Hyjal Summit 已由暴雪確認，分別採用 10 人與 20 人規模。其他路線圖條目若仍來自媒體報導，會繼續分開標示，不會與官方回顧混在一起。",
		confirmed: (count) => `${count} 個團隊副本已由暴雪確認。`,
		body: "暴雪也確認了新的套裝、一個尚未完整揭曉的傳奇獎勵，以及首批新增團隊副本會在 12 月 9 日開放。Boss 逐一機制與掉落表在缺少官方或 Beta 證據前會保持不完整。",
		release: "開放階段",
		tbd: "待定",
		note: "卡片上的驗證標籤只表示該團隊副本條目本身的證據等級。即使副本名稱、規模與開放時間已官方確認，Boss 與掉落細節仍可能未知。"
	};
	return {
		metaTitle: "WoW Forever Raids — Official Launch Raids & Roadmap",
		metaDescription: "World of Warcraft: Forever raid coverage with Blizzard-confirmed Barrow Deeps and Hyjal Summit plus separately labeled roadmap reporting.",
		eyebrow: "Raids",
		title: "WoW Forever Raids",
		description: "Barrow Deeps and Hyjal Summit are now Blizzard-confirmed raid destinations, including their 10-player and 20-player formats. Additional roadmap entries remain labeled separately when they come from media coverage rather than the official recap.",
		confirmed: (count) => `${count} raids in this list are Blizzard-confirmed.`,
		body: "Blizzard has also confirmed new tier sets, a legendary reward that has not yet been fully revealed, and a December 9 unlock for the first new raids. Boss-by-boss and loot-table details remain intentionally incomplete until official or Beta evidence is available.",
		release: "Release",
		tbd: "TBD",
		note: "A raid card's verification badge applies to that raid entry. Boss and loot details may still be unknown even when the raid name, size, and launch window are official."
	};
}
//#endregion
export { raidsCopy as t };
