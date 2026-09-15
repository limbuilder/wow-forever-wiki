//#region node_modules/.nitro/vite/services/ssr/assets/races.index-BkXpxNrI.js
function racesCopy(locale) {
	if (locale === "zh") return {
		metaTitle: "WoW Forever 种族、种族技能与职业组合",
		metaDescription: "World of Warcraft: Forever 可玩种族、种族技能、阵营、暴雪官方确认的新种族-职业组合与按来源等级整理的研究数据。",
		eyebrow: "种族",
		title: "WoW Forever 种族与种族技能",
		description: "暴雪已经确认整体种族设计方向和 6 条新增种族-职业路线。单独的种族技能说明与更完整的可用性矩阵，在官方记录尚不完整时继续保留逐条验证标签。",
		entries: "种族条目",
		racials: "已追踪种族技能",
		combinations: "可玩组合",
		newRace: "新增种族",
		confirmed: "暴雪确认 · Deep Dive",
		sixPaths: "6 条新增职业路线",
		confirmedBody: "暴雪正式确认了 Gnome Priest、Human Hunter、Dwarf Shaman、Orc Mage、Troll Warlock 和 Undead Paladin。暴雪同时表示，每个种族会围绕 2 个主动技能和 2 个被动技能进行设计，而不是把所有种族技能做成同质化。",
		wiki: "Wiki Deep Dive →",
		source: "暴雪来源 ↗",
		tracked: (count) => `${count} 个种族技能已追踪`
	};
	if (locale === "zh-TW") return {
		metaTitle: "WoW Forever 種族、種族技能與職業組合",
		metaDescription: "World of Warcraft: Forever 可玩種族、種族技能、陣營、暴雪官方確認的新種族-職業組合與依來源等級整理的研究資料。",
		eyebrow: "種族",
		title: "WoW Forever 種族與種族技能",
		description: "暴雪已確認整體種族設計方向與 6 條新增種族-職業路線。個別種族技能說明與更完整的可用性矩陣，在官方紀錄尚不完整時仍保留逐筆驗證標籤。",
		entries: "種族條目",
		racials: "已追蹤種族技能",
		combinations: "可玩組合",
		newRace: "新增種族",
		confirmed: "暴雪確認 · Deep Dive",
		sixPaths: "6 條新增職業路線",
		confirmedBody: "暴雪正式確認 Gnome Priest、Human Hunter、Dwarf Shaman、Orc Mage、Troll Warlock 與 Undead Paladin。暴雪同時表示，每個種族會圍繞 2 個主動技能與 2 個被動技能設計，而不是讓所有種族技能同質化。",
		wiki: "Wiki Deep Dive →",
		source: "暴雪來源 ↗",
		tracked: (count) => `${count} 個種族技能已追蹤`
	};
	return {
		metaTitle: "WoW Forever Races, Racials & Class Combinations",
		metaDescription: "World of Warcraft: Forever playable races, racial abilities, factions, Blizzard-confirmed new race-class combinations, and source-ranked racial research.",
		eyebrow: "Races",
		title: "WoW Forever Races & Racials",
		description: "Blizzard has now confirmed the overall racial direction and six new race-class paths. Individual racial tooltips and the broader availability matrix retain per-entry verification labels where the official record is not yet complete.",
		entries: "Race entries",
		racials: "Racial abilities tracked",
		combinations: "Playable combinations",
		newRace: "New race",
		confirmed: "Blizzard confirmed · Deep Dive",
		sixPaths: "Six new class paths",
		confirmedBody: "Blizzard officially confirmed Gnome Priest, Human Hunter, Dwarf Shaman, Orc Mage, Troll Warlock, and Undead Paladin. Blizzard also stated that each race is being designed around two active and two passive racial abilities rather than making racial kits identical.",
		wiki: "Wiki Deep Dive →",
		source: "Blizzard source ↗",
		tracked: (count) => `${count} racial abilities tracked`
	};
}
//#endregion
export { racesCopy as t };
