import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { _ as talentDiffs, a as getClassDiffs, c as getDiffStats, n as classes } from "./wiki-v1-data-DEzgNKYh.mjs";
import { t as getClassIcon } from "./class-icons-DCc3cvJS.mjs";
import { i as StatGrid, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { t as compareCopy } from "./forever-vs-classic-B-iWlB-2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forever-vs-classic-CI6lrcqv.js
var import_jsx_runtime = require_jsx_runtime();
var deepDiveSource = "https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap";
var officialSystemChanges = [
	{
		key: "realmless",
		title: "Realmless structure",
		classic: "Choose a named realm first.",
		forever: "Choose Normal, PvP, Roleplaying, or Hardcore rulesets instead of a traditional realm."
	},
	{
		key: "names",
		title: "Character names",
		classic: "Single character name scoped by realm.",
		forever: "Two-part character names that are unique per region."
	},
	{
		key: "talents",
		title: "Talent milestones",
		classic: "Familiar 11/21/31-point milestones.",
		forever: "Keeps 11/21/31 and adds a new 16-point milestone."
	},
	{
		key: "buffs",
		title: "Class buffs",
		classic: "Some signature group buffs consume talent points.",
		forever: "Divine Spirit, Blessing of Kings, and Improved Mark of the Wild move to baseline class abilities."
	},
	{
		key: "hitcrit",
		title: "Hit and Crit stats",
		classic: "Separate spell, melee, and ranged variants.",
		forever: "Spell, melee, and ranged Hit are combined; Crit is combined in the same way."
	},
	{
		key: "healing",
		title: "Healing gear",
		classic: "Healing and damage bonuses are more sharply separated.",
		forever: "Bonus Healing also grants one-third of that amount as Bonus Damage."
	},
	{
		key: "transmog",
		title: "Transmog",
		classic: "No modern collection-based transmog system.",
		forever: "Transmog is supported but can be disabled entirely; Classic Mode starts with it disabled."
	},
	{
		key: "loot",
		title: "Dungeon loot",
		classic: "Original Classic-era itemization and appearance acquisition.",
		forever: "Dungeon drops are being reviewed broadly, with hundreds of new drops and shared eligible-looter appearance unlocks for Uncommon/Rare BoP items."
	}
];
var zhSystemChanges = {
	realmless: {
		title: "无服务器结构",
		classic: "先选择一个命名服务器。",
		forever: "改为选择 Normal、PvP、Roleplaying 或 Hardcore 规则集，而不是传统命名服务器。"
	},
	names: {
		title: "角色名称",
		classic: "单段角色名，并受服务器范围限制。",
		forever: "采用两段式角色名，并在整个地区范围内唯一。"
	},
	talents: {
		title: "天赋里程碑",
		classic: "熟悉的 11/21/31 点里程碑。",
		forever: "保留 11/21/31，并新增 16 点里程碑。"
	},
	buffs: {
		title: "职业增益",
		classic: "部分标志性团队增益需要消耗天赋点。",
		forever: "Divine Spirit、Blessing of Kings 与 Improved Mark of the Wild 改为职业基础能力。"
	},
	hitcrit: {
		title: "命中与暴击属性",
		classic: "法术、近战和远程版本分别计算。",
		forever: "法术、近战和远程命中合并；暴击也采用相同方式合并。"
	},
	healing: {
		title: "治疗装备",
		classic: "治疗与伤害加成区分更明显。",
		forever: "Bonus Healing 同时按三分之一比例提供 Bonus Damage。"
	},
	transmog: {
		title: "幻化",
		classic: "没有现代收藏式幻化系统。",
		forever: "支持幻化，但可以完全关闭；Classic Mode 默认关闭。"
	},
	loot: {
		title: "地下城掉落",
		classic: "沿用原 Classic 时代的装备体系与外观获取方式。",
		forever: "会广泛重审地下城掉落，新增数百件物品；符合资格的拾取者还能共享解锁 Uncommon/Rare BoP 外观。"
	}
};
var zhTWSystemChanges = {
	realmless: {
		title: "無伺服器結構",
		classic: "先選擇一個命名伺服器。",
		forever: "改為選擇 Normal、PvP、Roleplaying 或 Hardcore 規則集，而不是傳統命名伺服器。"
	},
	names: {
		title: "角色名稱",
		classic: "單段角色名，並受伺服器範圍限制。",
		forever: "採用兩段式角色名，並在整個地區範圍內唯一。"
	},
	talents: {
		title: "天賦里程碑",
		classic: "熟悉的 11/21/31 點里程碑。",
		forever: "保留 11/21/31，並新增 16 點里程碑。"
	},
	buffs: {
		title: "職業增益",
		classic: "部分標誌性團隊增益需要消耗天賦點。",
		forever: "Divine Spirit、Blessing of Kings 與 Improved Mark of the Wild 改為職業基礎能力。"
	},
	hitcrit: {
		title: "命中與致命一擊屬性",
		classic: "法術、近戰與遠程版本分別計算。",
		forever: "法術、近戰與遠程命中合併；致命一擊也採相同方式合併。"
	},
	healing: {
		title: "治療裝備",
		classic: "治療與傷害加成區分更明顯。",
		forever: "Bonus Healing 同時依三分之一比例提供 Bonus Damage。"
	},
	transmog: {
		title: "塑形",
		classic: "沒有現代收藏式塑形系統。",
		forever: "支援塑形，但可以完全關閉；Classic Mode 預設關閉。"
	},
	loot: {
		title: "地城掉落",
		classic: "沿用原 Classic 時代的裝備系統與外觀取得方式。",
		forever: "會廣泛重審地城掉落，新增數百件物品；符合資格的拾取者也能共享解鎖 Uncommon/Rare BoP 外觀。"
	}
};
function localizedSystemChanges(locale) {
	if (locale === "zh") return officialSystemChanges.map((row) => ({
		...row,
		...zhSystemChanges[row.key]
	}));
	if (locale === "zh-TW") return officialSystemChanges.map((row) => ({
		...row,
		...zhTWSystemChanges[row.key]
	}));
	return officialSystemChanges;
}
function ForeverVsClassicPage() {
	const locale = getLocale();
	const copy = compareCopy(locale);
	const totals = getDiffStats();
	const systemChanges = localizedSystemChanges(locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: copy.eyebrow,
		title: copy.title,
		description: copy.description,
		breadcrumbs: [{ label: "Forever vs Classic" }],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: "mixed" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-primary/30 bg-primary/5 mt-8 border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-primary text-xs font-semibold tracking-[0.16em] uppercase",
								children: copy.confirmed
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-serif text-2xl",
								children: copy.systems
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2 text-sm leading-6",
								children: copy.systemsDesc
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							href: "/deep-dive",
							className: "text-primary underline-offset-4 hover:underline",
							children: copy.wiki
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: deepDiveSource,
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: copy.source
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-border mt-5 overflow-x-auto border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[760px] text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-background/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3 text-left",
									children: copy.area
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3 text-left",
									children: "Classic"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3 text-left",
									children: "Forever"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: systemChanges.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-border border-t align-top",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-3 font-medium",
									children: row.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-muted-foreground p-3 leading-6",
									children: row.classic
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-3 leading-6",
									children: row.forever
								})
							]
						}, row.key)) })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase",
							children: copy.research
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-serif text-2xl",
							children: copy.talentDiff
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatGrid, { items: [
						{
							label: copy.diffRows,
							value: talentDiffs.length
						},
						{
							label: copy.newTalents,
							value: totals.NEW_IN_FOREVER ?? 0
						},
						{
							label: copy.changedTalents,
							value: totals.CHANGED_FROM_CLASSIC ?? 0
						},
						{
							label: copy.removedTalents,
							value: totals.REMOVED_FROM_CLASSIC ?? 0
						}
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-8 mb-2 text-xs sm:hidden",
						children: copy.swipe
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-border overflow-x-auto border sm:mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[760px] text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 text-left",
										children: copy.class
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 text-right",
										children: copy.new
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 text-right",
										children: copy.changed
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 text-right",
										children: copy.same
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 text-right",
										children: copy.removed
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 text-right",
										children: copy.total
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: classes.map((entry) => {
								const rows = getClassDiffs(entry.name);
								const stats = getDiffStats(rows);
								const icon = getClassIcon(entry.name);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-border border-t",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 font-medium",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: icon.src,
													alt: icon.alt,
													width: 32,
													height: 32,
													loading: "lazy",
													className: "size-8 border border-white/10 object-cover"
												}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
													href: `/classes/${entry.slug}`,
													className: "hover:text-primary transition-colors",
													children: entry.name
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 text-right",
											children: stats.NEW_IN_FOREVER ?? 0
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 text-right",
											children: stats.CHANGED_FROM_CLASSIC ?? 0
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 text-right",
											children: stats.SAME_AS_CLASSIC ?? 0
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 text-right",
											children: stats.REMOVED_FROM_CLASSIC ?? 0
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 text-right",
											children: rows.length
										})
									]
								}, entry.name);
							}) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: copy.meaning
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-muted-foreground mt-3 max-w-3xl space-y-3 text-sm leading-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.newBody }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.changedBody }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.removedBody })
					]
				})]
			})
		]
	});
}
//#endregion
export { ForeverVsClassicPage as component };
