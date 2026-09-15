import { d as lazyRouteComponent, f as createFileRoute, v as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { t as pageHead } from "./seo-ZXeCiUz7.mjs";
import { d as getTalentSet, g as slugify } from "./wiki-v1-data-DEzgNKYh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/talents._classSlug-BcE0V-Q8.js
function detailCopy(locale, className) {
	if (locale === "zh") return {
		metaTitle: `${className} 天赋计算器 · WoW Forever`,
		metaDescription: `为 ${className} 构建并分享 World of Warcraft: Forever 天赋方案，对比 Classic，并查看种族、种族技能与逐天赋证据状态。`,
		eyebrow: "天赋计算器",
		title: `${className} 天赋计算器`,
		description: (trees) => `在 ${trees.join("、")} 天赋树中分配点数、分享构筑、对比 Forever 与 Classic 天赋，并查看目前记录的 ${className} 可玩种族。具体技能说明等级和位置在 Beta 校验前会继续保留验证标签。`,
		talents: "天赋",
		playable: "可玩种族",
		gameplay: "实机确认",
		community: "社区转录",
		estimated: "估算",
		paladinTitle: "Paladin 已有官方 Deep Dive 信息。",
		paladinBody: "暴雪已经确认若干基础能力与天赋系统改动。对尚未公布为完整官方天赋树的数值，计算器仍保留逐天赋研究标签。",
		paladinLink: "查看官方 Paladin 改动 →",
		evidence: "实机证据",
		reference: "BlizzCon Demo 参考画面"
	};
	if (locale === "zh-TW") return {
		metaTitle: `${className} 天賦計算器 · WoW Forever`,
		metaDescription: `為 ${className} 建立並分享 World of Warcraft: Forever 天賦配點，比較 Classic，並查看種族、種族技能與逐天賦證據狀態。`,
		eyebrow: "天賦計算器",
		title: `${className} 天賦計算器`,
		description: (trees) => `在 ${trees.join("、")} 天賦樹中分配點數、分享配點、比較 Forever 與 Classic 天賦，並查看目前記錄的 ${className} 可玩種族。具體技能說明等級與位置在 Beta 校驗前會繼續保留驗證標籤。`,
		talents: "天賦",
		playable: "可玩種族",
		gameplay: "實機確認",
		community: "社群轉錄",
		estimated: "估算",
		paladinTitle: "Paladin 已有官方 Deep Dive 資訊。",
		paladinBody: "暴雪已確認若干基礎能力與天賦系統改動。對尚未公布為完整官方天賦樹的數值，計算器仍保留逐天賦研究標籤。",
		paladinLink: "查看官方 Paladin 改動 →",
		evidence: "實機證據",
		reference: "BlizzCon Demo 參考畫面"
	};
	return {
		metaTitle: `${className} Talent Calculator · WoW Forever`,
		metaDescription: `Build and share ${className} talent trees for World of Warcraft: Forever, compare talents with Classic, and review races, racials, and per-talent evidence status.`,
		eyebrow: "Talent calculator",
		title: `${className} Talent Calculator`,
		description: (trees) => `Spend points across ${trees.join(", ")}, share builds, compare Forever talents with Classic, and review the races currently documented for ${className}. Granular tooltip ranks and placements retain verification labels until Beta data can validate them.`,
		talents: "Talents",
		playable: "Playable races",
		gameplay: "Gameplay verified",
		community: "Community transcribed",
		estimated: "Estimated",
		paladinTitle: "Paladin has official Deep Dive coverage.",
		paladinBody: "Blizzard has confirmed several baseline abilities and talent-system changes. The calculator still preserves per-talent research labels for values not yet published as a complete official tree.",
		paladinLink: "Review official Paladin changes →",
		evidence: "Gameplay evidence",
		reference: "BlizzCon demo reference"
	};
}
var $$splitComponentImporter = () => import("./talents._classSlug-Cm4jVNvV.mjs");
var Route = createFileRoute("/talents/$classSlug")({
	loader: ({ params }) => {
		const set = getTalentSet(params.classSlug);
		if (!set) throw notFound();
		return set;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const locale = getLocale();
		const slug = slugify(loaderData.class);
		const c = detailCopy(locale, loaderData.class);
		return pageHead(`/talents/${slug}`, locale, {
			title: c.metaTitle,
			description: c.metaDescription
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { detailCopy as n, Route as t };
