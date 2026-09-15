import { o as __toESM } from "../_runtime.mjs";
import { $ as require_jsx_runtime, et as require_react } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { Ct as Check, mt as Copy, x as RotateCcw } from "../_libs/lucide-react.mjs";
import { f as getVerificationCounts, o as getClassRaces, v as verificationLabels } from "./wiki-v1-data-DEzgNKYh.mjs";
import { t as getClassIcon } from "./class-icons-DCc3cvJS.mjs";
import { a as talentMediaByClass } from "./wiki-media-B73q5XyY.mjs";
import { o as WikiMediaFigure, s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { n as detailCopy, t as Route } from "./talents._classSlug-BcE0V-Q8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/talents._classSlug-Cm4jVNvV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var localizedVerification = {
	zh: {
		official_confirmed: "官方确认",
		visually_confirmed: "实机确认",
		community_transcribed: "社区转录",
		media_reported: "媒体报道",
		estimated: "估算",
		unknown: "未知"
	},
	"zh-TW": {
		official_confirmed: "官方確認",
		visually_confirmed: "實機確認",
		community_transcribed: "社群轉錄",
		media_reported: "媒體報導",
		estimated: "估算",
		unknown: "未知"
	}
};
function copy(locale, className) {
	if (locale === "zh") return {
		eyebrow: "种族协同",
		title: `${className} 可玩种族与种族技能`,
		description: `选择目前有资料记录可用于 ${className} 的种族。种族技能沿用 Wiki 其它数据相同的来源与验证等级。`,
		available: "可用种族",
		documented: "个已记录种族技能",
		cooldown: "冷却"
	};
	if (locale === "zh-TW") return {
		eyebrow: "種族協同",
		title: `${className} 可玩種族與種族技能`,
		description: `選擇目前有資料記錄可供 ${className} 使用的種族。種族技能沿用 Wiki 其他資料相同的來源與驗證等級。`,
		available: "可用種族",
		documented: "個已記錄種族技能",
		cooldown: "冷卻"
	};
	return {
		eyebrow: "Race synergy",
		title: `${className} races & racials`,
		description: `Choose a race currently documented as playable for ${className}. Racial data keeps the same source and verification labels as the rest of the wiki.`,
		available: "Available races",
		documented: "documented racials",
		cooldown: "Cooldown"
	};
}
function verificationLabel(locale, value) {
	return localizedVerification[locale]?.[value] ?? verificationLabels[value] ?? value;
}
function ClassRaceRacials({ className, races }) {
	const locale = getLocale();
	const text = copy(locale, className);
	const [selectedSlug, setSelectedSlug] = (0, import_react.useState)(races[0]?.slug ?? "");
	const selectedRace = (0, import_react.useMemo)(() => races.find((race) => race.slug === selectedSlug) ?? races[0], [races, selectedSlug]);
	if (!selectedRace) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-border mb-4 border-b pb-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-xs uppercase tracking-[0.18em]",
					children: text.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-serif text-3xl",
					children: text.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-2 max-w-3xl text-sm leading-6",
					children: text.description
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-[15rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-border bg-card border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground px-2 pb-2 text-xs uppercase tracking-[0.15em]",
					children: text.available
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1",
					children: races.map((race) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setSelectedSlug(race.slug),
						className: `flex w-full items-center justify-between gap-3 px-2.5 py-2 text-left text-sm transition-colors ${race.slug === selectedRace.slug ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: race.race }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-wide",
							children: race.faction
						})]
					}, race.slug))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-border bg-card border p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-2xl",
						children: selectedRace.race
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mt-1 text-sm",
						children: [
							selectedRace.faction,
							" · ",
							selectedRace.racials.length,
							" ",
							text.documented
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border-border text-muted-foreground border px-2 py-1 text-[10px] uppercase tracking-wide",
						children: verificationLabel(locale, selectedRace.verification)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-3 md:grid-cols-2",
					children: selectedRace.racials.map((racial) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-border border p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold",
									children: racial.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground shrink-0 text-[9px] uppercase tracking-wide",
									children: verificationLabel(locale, racial.verification)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2 text-sm leading-6",
								children: racial.description
							}),
							racial.cooldown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [text.cooldown, ":"] }),
									" ",
									racial.cooldown
								]
							}) : null
						]
					}, racial.name))
				})]
			})]
		})]
	});
}
function talentKey(talent) {
	return `${talent.tree}::${talent.tier}::${talent.column}::${talent.name}`;
}
function getTreePoints(set, ranks, tree) {
	return set.talents.filter((talent) => talent.tree === tree).reduce((sum, talent) => sum + (ranks[talentKey(talent)] ?? 0), 0);
}
function getTotalPoints(ranks) {
	return Object.values(ranks).reduce((sum, value) => sum + value, 0);
}
function getRequiredLowerTierPoints(talent) {
	return Math.max(0, (talent.tier - 1) * 5);
}
function buildIsValid(set, ranks) {
	return set.talents.every((talent) => {
		if ((ranks[talentKey(talent)] ?? 0) <= 0) return true;
		if (set.talents.filter((row) => row.tree === talent.tree && row.tier < talent.tier).reduce((sum, row) => sum + (ranks[talentKey(row)] ?? 0), 0) < getRequiredLowerTierPoints(talent)) return false;
		if (talent.prerequisite) {
			const prerequisite = set.talents.find((row) => row.tree === talent.tree && row.name === talent.prerequisite);
			if (!prerequisite) return false;
			if ((ranks[talentKey(prerequisite)] ?? 0) < prerequisite.max_rank) return false;
		}
		return true;
	});
}
function encodeBuild(set, ranks) {
	return set.talents.map((talent) => (ranks[talentKey(talent)] ?? 0).toString(36)).join(".");
}
function decodeBuild(set, value) {
	if (!value) return {};
	const values = value.split(".");
	if (values.length !== set.talents.length) return {};
	const ranks = {};
	set.talents.forEach((talent, index) => {
		const parsed = Number.parseInt(values[index] ?? "0", 36);
		if (!Number.isFinite(parsed) || parsed < 0 || parsed > talent.max_rank) return;
		if (parsed > 0) ranks[talentKey(talent)] = parsed;
	});
	return buildIsValid(set, ranks) ? ranks : {};
}
function getTalentText(talent, currentRank) {
	if (!talent.rank_text?.length) return "Tooltip text has not been captured yet.";
	if (currentRank > 0) return talent.rank_text[Math.min(currentRank - 1, talent.rank_text.length - 1)] ?? talent.rank_text[0];
	return talent.rank_text[0];
}
function statusLabel(status) {
	switch (status) {
		case "new": return "New in Forever";
		case "changed": return "Changed from Classic";
		case "moved": return "Moved in Forever";
		case "same": return "Same as Classic";
		case "removed": return "Removed from Classic";
		default: return null;
	}
}
function iconUrl(icon) {
	if (!icon) return null;
	return `https://wow.zamimg.com/images/wow/icons/large/${icon.toLowerCase()}.jpg`;
}
function TalentIcon({ talent, rank, enabled, onAdd, onRemove, lockReason }) {
	const [hovered, setHovered] = (0, import_react.useState)(false);
	const [focused, setFocused] = (0, import_react.useState)(false);
	const tipOpen = hovered || focused;
	const tipBelow = talent.tier <= 2;
	const src = iconUrl(talent.icon);
	const classicStatus = statusLabel(talent.classic?.status);
	const currentText = getTalentText(talent, rank);
	const nextRank = Math.min(rank + 1, talent.max_rank);
	const nextText = talent.rank_text?.length ? talent.rank_text[Math.min(nextRank - 1, talent.rank_text.length - 1)] ?? talent.rank_text[0] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-0 flex items-center justify-center focus-within:z-30 hover:z-30",
		style: {
			gridColumn: talent.column,
			gridRow: talent.tier
		},
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		onFocusCapture: () => setFocused(true),
		onBlurCapture: (event) => {
			if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
		},
		onContextMenu: (event) => {
			event.preventDefault();
			onRemove();
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: (event) => {
				onAdd();
				event.currentTarget.blur();
			},
			disabled: !enabled,
			"aria-label": `${talent.name}, ${rank} of ${talent.max_rank} points`,
			className: `focus-visible:ring-primary/70 relative size-14 rounded border-2 transition-all focus-visible:ring-2 focus-visible:outline-none ${rank > 0 ? "border-primary shadow-[0_0_18px_rgba(217,164,65,0.22)]" : enabled ? "border-border hover:border-primary/70 hover:-translate-y-0.5" : "border-border/60 opacity-45 grayscale"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bg-muted text-muted-foreground absolute inset-0 flex items-center justify-center text-[10px] font-semibold uppercase",
					children: talent.name.slice(0, 2)
				}),
				src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					loading: "lazy",
					draggable: false,
					className: "relative z-10 size-full rounded-[2px] object-cover",
					onError: (event) => {
						event.currentTarget.style.display = "none";
					}
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `absolute -right-2 -bottom-2 z-20 min-w-6 rounded-sm border px-1 py-0.5 text-center text-[11px] leading-none font-bold ${rank > 0 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground"}`,
					children: [
						rank,
						"/",
						talent.max_rank
					]
				})
			]
		}), tipOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `border-primary/30 bg-popover/98 text-popover-foreground pointer-events-none absolute left-1/2 z-50 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 rounded border p-4 text-left shadow-2xl ${tipBelow ? "top-[calc(100%+0.75rem)]" : "bottom-[calc(100%+0.75rem)]"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-border bg-muted relative size-11 shrink-0 overflow-hidden rounded border",
						children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "size-full object-cover",
							onError: (event) => {
								event.currentTarget.style.display = "none";
							}
						}) : null
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-foreground font-semibold",
								children: talent.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary shrink-0 text-xs font-semibold",
								children: [
									rank,
									"/",
									talent.max_rank
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground mt-0.5 text-[11px]",
							children: [
								talent.tree,
								" · Tier ",
								talent.tier,
								" · Column ",
								talent.column
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-border/70 mt-3 border-t pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground/90 text-sm leading-6",
						children: currentText
					}), rank > 0 && rank < talent.max_rank && nextText ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mt-2 text-xs leading-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "Next rank:"
							}),
							" ",
							nextText
						]
					}) : null]
				}),
				talent.prerequisite ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs text-amber-300/90",
					children: [
						"Requires ",
						talent.prerequisite,
						" at max rank."
					]
				}) : null,
				lockReason && rank === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-2 text-xs",
					children: lockReason
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-border/70 mt-3 flex flex-wrap gap-1.5 border-t pt-3",
					children: [classicStatus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border-border text-muted-foreground border px-1.5 py-0.5 text-[10px]",
						children: classicStatus
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border-border text-muted-foreground border px-1.5 py-0.5 text-[10px]",
						children: verificationLabels[talent.verification] ?? talent.verification
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground mt-3 text-[10px]",
					children: ["Left click to add a point", rank > 0 ? " · right click to remove" : ""]
				})
			]
		}) : null]
	});
}
function TalentCalculator({ set }) {
	const [level, setLevel] = (0, import_react.useState)(60);
	const [ranks, setRanks] = (0, import_react.useState)({});
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const params = new URLSearchParams(window.location.search);
		const sharedLevel = Number(params.get("level"));
		if (Number.isFinite(sharedLevel) && sharedLevel >= 10 && sharedLevel <= 60) setLevel(sharedLevel);
		setRanks(decodeBuild(set, params.get("build")));
	}, [set.class]);
	const maxPoints = Math.max(1, level - 9);
	const spentPoints = getTotalPoints(ranks);
	const pointsLeft = Math.max(0, maxPoints - spentPoints);
	const talentByName = (0, import_react.useMemo)(() => new Map(set.talents.map((talent) => [talent.name, talent])), [set.talents]);
	function canAdd(talent) {
		if ((ranks[talentKey(talent)] ?? 0) >= talent.max_rank || spentPoints >= maxPoints) return false;
		if (set.talents.filter((row) => row.tree === talent.tree && row.tier < talent.tier).reduce((sum, row) => sum + (ranks[talentKey(row)] ?? 0), 0) < getRequiredLowerTierPoints(talent)) return false;
		if (talent.prerequisite) {
			const prerequisite = talentByName.get(talent.prerequisite);
			if (!prerequisite) return false;
			if ((ranks[talentKey(prerequisite)] ?? 0) < prerequisite.max_rank) return false;
		}
		return true;
	}
	function addPoint(talent) {
		if (!canAdd(talent)) return;
		const key = talentKey(talent);
		setRanks((current) => ({
			...current,
			[key]: (current[key] ?? 0) + 1
		}));
	}
	function removePoint(talent) {
		const key = talentKey(talent);
		const currentRank = ranks[key] ?? 0;
		if (currentRank <= 0) return;
		const next = {
			...ranks,
			[key]: currentRank - 1
		};
		if (next[key] === 0) delete next[key];
		if (!buildIsValid(set, next)) return;
		setRanks(next);
	}
	function reset() {
		setRanks({});
		setCopied(false);
	}
	function resetTree(tree) {
		setRanks((current) => {
			const next = { ...current };
			for (const talent of set.talents) if (talent.tree === tree) delete next[talentKey(talent)];
			return next;
		});
		setCopied(false);
	}
	async function copyBuild() {
		const url = new URL(window.location.href);
		url.searchParams.set("level", String(level));
		url.searchParams.set("build", encodeBuild(set, ranks));
		await navigator.clipboard.writeText(url.toString());
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-border bg-card grid gap-4 border p-4 md:grid-cols-[1fr_auto_auto_auto] md:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs tracking-[0.18em] uppercase",
						children: "Interactive build"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "font-serif text-2xl",
							children: [
								spentPoints,
								" / ",
								maxPoints,
								" points"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground text-sm",
							children: [pointsLeft, " left"]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground mr-2",
							children: "Level"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "border-border bg-background h-9 border px-2",
							value: level,
							onChange: (event) => {
								const nextLevel = Number(event.target.value);
								if (getTotalPoints(ranks) > Math.max(1, nextLevel - 9)) reset();
								setLevel(nextLevel);
							},
							children: Array.from({ length: 51 }, (_, index) => index + 10).map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value,
								children: value
							}, value))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: reset,
						className: "border-border hover:bg-muted inline-flex h-9 items-center justify-center gap-2 border px-3 text-sm transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), " Reset"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: copyBuild,
						className: "border-primary/40 bg-primary/10 text-primary hover:bg-primary/15 inline-flex h-9 items-center justify-center gap-2 border px-3 text-sm transition-colors",
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Copied" : "Copy build link"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				children: set.trees.map((tree) => {
					const treeTalents = set.talents.filter((talent) => talent.tree === tree);
					const treePoints = getTreePoints(set, ranks, tree);
					const maxTier = Math.max(...treeTalents.map((talent) => talent.tier));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "border-border bg-card min-w-0 overflow-visible border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-border flex items-end justify-between gap-3 border-b p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-xs tracking-[0.16em] uppercase",
								children: set.class
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-serif text-2xl",
								children: tree
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-xl",
										children: treePoints
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-xs",
										children: "points"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => resetTree(tree),
									disabled: treePoints === 0,
									"aria-label": `Reset ${tree} tree`,
									className: "border-border hover:bg-muted inline-flex h-9 items-center justify-center gap-2 border px-3 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), " Reset"]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-visible",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mx-auto grid w-max min-w-full grid-cols-4 place-items-center gap-x-3 gap-y-5 px-3 py-6 sm:gap-x-4 sm:px-5",
								style: { gridTemplateRows: `repeat(${maxTier}, 4.75rem)` },
								children: treeTalents.map((talent) => {
									const key = talentKey(talent);
									const rank = ranks[key] ?? 0;
									const addEnabled = canAdd(talent);
									const required = getRequiredLowerTierPoints(talent);
									const prerequisite = talent.prerequisite ? talentByName.get(talent.prerequisite) : void 0;
									const lockedByTier = treeTalents.filter((row) => row.tier < talent.tier).reduce((sum, row) => sum + (ranks[talentKey(row)] ?? 0), 0) < required;
									const lockedByPrereq = prerequisite ? (ranks[talentKey(prerequisite)] ?? 0) < prerequisite.max_rank : false;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalentIcon, {
										talent,
										rank,
										enabled: addEnabled,
										onAdd: () => addPoint(talent),
										onRemove: () => removePoint(talent),
										lockReason: lockedByTier ? `Requires ${required} points in earlier ${tree} tiers.` : lockedByPrereq ? `Requires ${talent.prerequisite} at max rank.` : void 0
									}, key);
								})
							})
						})]
					}, tree);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-border text-muted-foreground border border-dashed p-4 text-sm leading-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: "Build controls:"
				}), " left click an icon to add a point, right click to remove one, and hover or keyboard-focus an icon to inspect its full tooltip. Use each tree's Reset to clear only that specialization, or the top Reset to clear the whole build. Talent icons use the game icon identifiers captured in the research data. Values labeled Estimated are reconstructed from incomplete BlizzCon footage and may change in Beta."]
			})
		]
	});
}
function TalentDetailPage() {
	const set = Route.useLoaderData();
	const c = detailCopy(getLocale(), set.class);
	const verification = getVerificationCounts(set.talents);
	const media = talentMediaByClass[set.class.toLowerCase()];
	const playableRaces = getClassRaces(set.class);
	const icon = getClassIcon(set.class);
	const isPaladin = set.class.toLowerCase() === "paladin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: c.eyebrow,
		title: c.title,
		description: c.description(set.trees),
		titleIconSrc: icon?.src,
		titleIconAlt: icon?.alt,
		breadcrumbs: [{
			label: c.talents,
			href: "/talents"
		}, { label: set.class }],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: isPaladin ? "mixed" : "provisional" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-wrap gap-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "border-border border px-3 py-1",
						children: [
							c.talents,
							": ",
							set.talent_count
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "border-border border px-3 py-1",
						children: [
							c.playable,
							": ",
							playableRaces.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "border-border border px-3 py-1",
						children: [
							c.gameplay,
							": ",
							verification.visually_confirmed ?? 0
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "border-border border px-3 py-1",
						children: [
							c.community,
							": ",
							verification.community_transcribed ?? 0
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "border-border border px-3 py-1",
						children: [
							c.estimated,
							": ",
							verification.estimated ?? 0
						]
					})
				]
			}),
			isPaladin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-primary/30 bg-primary/5 mb-8 border p-4 text-sm leading-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: c.paladinTitle }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: c.paladinBody
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						href: "/classes/paladin",
						className: "text-primary underline-offset-4 hover:underline",
						children: c.paladinLink
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalentCalculator, { set }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassRaceRacials, {
				className: set.class,
				races: playableRaces
			}),
			media ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-border mb-4 border-b pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs tracking-[0.18em] uppercase",
						children: c.evidence
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-serif text-3xl",
						children: c.reference
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiMediaFigure, { media })]
			}) : null
		]
	});
}
//#endregion
export { TalentDetailPage as component };
