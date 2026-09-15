import { d as lazyRouteComponent, f as createFileRoute, v as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { t as pageHead } from "./seo-ZXeCiUz7.mjs";
import { d as getTalentSet, s as getClassSummary } from "./wiki-v1-data-DEzgNKYh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/classes._classSlug-6Rg5EpEy.js
function detailCopy(locale, className) {
	if (locale === "zh") return {
		metaTitle: `${className} · WoW Forever 职业指南`,
		metaDescription: `${className} 在 WoW Forever 中的天赋树、可用种族、暴雪官方确认改动与按来源等级整理的天赋研究。`,
		eyebrow: "职业",
		title: `${className} · WoW Forever`,
		description: (trees, talents) => `${trees.join("、")} 三棵天赋树，目前追踪 ${talents} 个天赋。官方事实与研究推导的技能说明细节会分开标注。`,
		classes: "职业",
		trees: "天赋树",
		talents: "天赋",
		complete: "完整等级",
		races: "已追踪可玩种族",
		paladinConfirmed: "暴雪确认 · Deep Dive",
		paladinTitle: "官方 Paladin 改动",
		paladinDesc: "暴雪已经确认 Forever Paladin 的整体设计方向。即使本站部分具体技能说明数值仍来自研究，以下要点属于官方信息。",
		paladinPoints: [
			"Holy Strike 在 6 级学会。",
			"Judgment 不再消耗当前激活的 Seal。",
			"Seal of Fury 是坦克向 Seal，其 Judgment 可以嘲讽。",
			"Consecration 在 20 级变为基础能力。",
			"天赋树保留 11/21/31 点结构，并新增 16 点里程碑。",
			"Blessing of Kings 变为职业基础能力，不再占用天赋点。",
			"Vindication 会降低敌人的 Attack Power，同时提高 Paladin 自身的 Attack Power。",
			"Sacred Arbiter 会强化 Holy Strike，并刷新目标身上的 Judgments。",
			"Champion of the Light 会根据 Intellect 提高法术伤害。",
			"Instrument of the Law 会降低威胁值，并让 Holy Wrath 变为瞬发。",
			"Twist of Light 支持 Seal Twisting：新的 Seal 可以延续到下一次近战攻击，不再依赖 swing-timer 插件。",
			"暴雪刻意保留 Paladin 没有打断技能、也缺少广泛减速工具的特点。",
			"Undead Paladin 是官方确认的新种族-职业组合。"
		],
		imageCaption: "官方 Deep Dive 图片 · Blizzard Entertainment",
		fullDeepDive: "查看完整 Deep Dive 总结 →",
		source: "暴雪来源 ↗",
		treeTitle: "天赋树",
		treeDesc: "打开完整天赋数据，并查看每个天赋的验证状态。",
		viewAll: `查看全部 ${className} 天赋 →`,
		tracked: "个天赋已追踪",
		playable: "目前记录的可玩种族",
		diff: "Forever vs Classic 天赋变化",
		diffDesc: "此对比来自当前研究档案。具体等级、技能说明或位置在视为最终数据前，请先查看单独天赋的验证标签。",
		newLabel: "新增",
		changed: "改动",
		same: "相同",
		removed: "移除"
	};
	if (locale === "zh-TW") return {
		metaTitle: `${className} · WoW Forever 職業指南`,
		metaDescription: `${className} 在 WoW Forever 中的天賦樹、可用種族、暴雪官方確認改動與依來源等級整理的天賦研究。`,
		eyebrow: "職業",
		title: `${className} · WoW Forever`,
		description: (trees, talents) => `${trees.join("、")} 三棵天賦樹，目前追蹤 ${talents} 個天賦。官方事實與研究推導的技能說明細節會分開標示。`,
		classes: "職業",
		trees: "天賦樹",
		talents: "天賦",
		complete: "完整等級",
		races: "已追蹤可玩種族",
		paladinConfirmed: "暴雪確認 · Deep Dive",
		paladinTitle: "官方 Paladin 改動",
		paladinDesc: "暴雪已確認 Forever Paladin 的整體設計方向。即使本站部分具體技能說明數值仍來自研究，以下要點屬於官方資訊。",
		paladinPoints: [
			"Holy Strike 在 6 級學會。",
			"Judgment 不再消耗目前啟用的 Seal。",
			"Seal of Fury 是坦克向 Seal，其 Judgment 可以嘲諷。",
			"Consecration 在 20 級變為基礎能力。",
			"天賦樹保留 11/21/31 點結構，並新增 16 點里程碑。",
			"Blessing of Kings 變為職業基礎能力，不再占用天賦點。",
			"Vindication 會降低敵人的 Attack Power，同時提高 Paladin 自身的 Attack Power。",
			"Sacred Arbiter 會強化 Holy Strike，並刷新目標身上的 Judgments。",
			"Champion of the Light 會依 Intellect 提高法術傷害。",
			"Instrument of the Law 會降低威脅值，並讓 Holy Wrath 變為瞬發。",
			"Twist of Light 支援 Seal Twisting：新的 Seal 可以延續到下一次近戰攻擊，不再依賴 swing-timer 外掛。",
			"暴雪刻意保留 Paladin 沒有打斷技能、也缺少廣泛減速工具的特點。",
			"Undead Paladin 是官方確認的新種族-職業組合。"
		],
		imageCaption: "官方 Deep Dive 圖片 · Blizzard Entertainment",
		fullDeepDive: "查看完整 Deep Dive 總結 →",
		source: "暴雪來源 ↗",
		treeTitle: "天賦樹",
		treeDesc: "開啟完整天賦資料，並查看每個天賦的驗證狀態。",
		viewAll: `查看全部 ${className} 天賦 →`,
		tracked: "個天賦已追蹤",
		playable: "目前記錄的可玩種族",
		diff: "Forever vs Classic 天賦變化",
		diffDesc: "此比較來自目前研究檔案。具體等級、技能說明或位置在視為最終資料前，請先查看個別天賦的驗證標籤。",
		newLabel: "新增",
		changed: "改動",
		same: "相同",
		removed: "移除"
	};
	return {
		metaTitle: `${className} · WoW Forever Class Guide`,
		metaDescription: `${className} in WoW Forever: talent trees, race availability, Blizzard-confirmed changes, and source-ranked talent research.`,
		eyebrow: "Class",
		title: `${className} in WoW Forever`,
		description: (trees, talents) => `${trees.join(", ")} talent trees with ${talents} talents currently tracked. Official facts and research-derived tooltip details are labeled separately.`,
		classes: "Classes",
		trees: "Talent trees",
		talents: "Talents",
		complete: "Complete ranks",
		races: "Playable races tracked",
		paladinConfirmed: "Blizzard confirmed · Deep Dive",
		paladinTitle: "Official Paladin changes",
		paladinDesc: "Blizzard has now confirmed the broad direction of the Forever Paladin. These points are official even where individual tooltip values elsewhere on this site remain research-derived.",
		paladinPoints: [
			"Holy Strike is learned at level 6.",
			"Judgment no longer consumes the active Seal.",
			"Seal of Fury is the tanking Seal, and its Judgment can taunt.",
			"Consecration becomes a baseline ability at level 20.",
			"Talent trees retain the 11/21/31-point structure and add a 16-point milestone.",
			"Blessing of Kings becomes a baseline class ability rather than a talent-point tax.",
			"Vindication reduces enemy Attack Power while increasing the Paladin’s own Attack Power.",
			"Sacred Arbiter empowers Holy Strike and refreshes Judgments on the target.",
			"Champion of the Light increases spell damage based on Intellect.",
			"Instrument of the Law reduces threat generation and makes Holy Wrath instant.",
			"Twist of Light supports Seal Twisting by letting a new Seal echo into the next melee swing without relying on a swing-timer add-on.",
			"Blizzard is intentionally keeping Paladin without an interrupt and without broad slowing tools.",
			"Undead Paladin is an officially confirmed new race-class combination."
		],
		imageCaption: "Official Deep Dive image · Blizzard Entertainment",
		fullDeepDive: "Full Deep Dive summary →",
		source: "Blizzard source ↗",
		treeTitle: "Talent trees",
		treeDesc: "Open the full talent data with per-talent verification status.",
		viewAll: `View all ${className} talents →`,
		tracked: "talents tracked",
		playable: "Playable races currently documented",
		diff: "Forever vs Classic talent changes",
		diffDesc: "This comparison is derived from the current research archive. Check individual talent verification labels before treating a granular rank, tooltip, or placement as final.",
		newLabel: "New",
		changed: "Changed",
		same: "Same",
		removed: "Removed"
	};
}
var $$splitComponentImporter = () => import("./classes._classSlug-DZwzV37Z.mjs");
var Route = createFileRoute("/classes/$classSlug")({
	loader: ({ params }) => {
		const summary = getClassSummary(params.classSlug);
		const talents = getTalentSet(params.classSlug);
		if (!summary || !talents) throw notFound();
		return {
			summary,
			talents
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const locale = getLocale();
		const c = detailCopy(locale, loaderData.summary.name);
		return pageHead(`/classes/${loaderData.summary.slug}`, locale, {
			title: c.metaTitle,
			description: c.metaDescription
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { detailCopy as n, Route as t };
