import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { t as WikiBreadcrumbs } from "./wiki-breadcrumbs-MquqTq0b.mjs";
import { n as Header, t as Footer } from "./header-DrpgL_ne.mjs";
import { i as extractSourceUrls, v as verificationLabels } from "./wiki-v1-data-DEzgNKYh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wiki-v1-page-C1jV_Ymk.js
var import_jsx_runtime = require_jsx_runtime();
function WikiShell({ eyebrow, title, description, titleIconSrc, titleIconAlt, breadcrumbs, children }) {
	const crumbs = breadcrumbs?.length ? breadcrumbs : [{ label: eyebrow }];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiBreadcrumbs, { items: crumbs }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary text-xs font-medium tracking-[0.2em] uppercase",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex max-w-4xl items-center gap-4",
						children: [titleIconSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: titleIconSrc,
							alt: titleIconAlt || "",
							width: 56,
							height: 56,
							className: "border-border size-12 shrink-0 border object-cover sm:size-14"
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-4xl tracking-tight sm:text-5xl",
							children: title
						})]
					}),
					description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-4 max-w-3xl text-base leading-7 sm:text-lg",
						children: description
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function WikiMediaFigure({ media, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: `border-border bg-card overflow-hidden border ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-muted aspect-video overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: media.src,
				alt: media.alt,
				width: 1280,
				height: 720,
				loading: "lazy",
				decoding: "async",
				className: "h-full w-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "border-border flex flex-col gap-2 border-t px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground leading-5",
				children: media.caption
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: media.sourceUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "text-primary underline-offset-4 hover:underline",
					children: [media.sourceLabel, media.timestamp ? ` · ${media.timestamp}` : ""]
				})
			})]
		})]
	});
}
var dataNoticeCopy = {
	en: {
		official: {
			title: "Blizzard-confirmed information.",
			body: "The core facts in this section come from official World of Warcraft: Forever announcements or panel recaps. Any research-only detail is called out separately rather than blended into the official record."
		},
		mixed: {
			title: "Mixed evidence, labeled by source.",
			body: "This page combines Blizzard-confirmed information with gameplay captures, media reporting, and community research. Verification badges show the evidence level for individual entries; official confirmation takes precedence where sources differ."
		},
		provisional: {
			title: "Research data — some details remain provisional.",
			body: "Specific tooltips, ranks, placements, level ranges, boss lists, loot details, or other granular values may still come from gameplay footage, media reporting, community transcription, or estimates. These details should be rechecked against Beta and release data as it becomes available."
		},
		sources: "Sources"
	},
	zh: {
		official: {
			title: "暴雪官方确认信息。",
			body: "本页核心事实来自 World of Warcraft: Forever 官方公告或面板回顾。仅来自研究的细节会单独标注，不会与官方记录混写。"
		},
		mixed: {
			title: "混合来源，并按证据等级标注。",
			body: "本页同时包含暴雪官方确认信息、实机截图、媒体报道与社区研究。每条数据的验证标签用于说明证据等级；不同来源冲突时，以官方确认为优先。"
		},
		provisional: {
			title: "研究数据——部分细节仍为暂定。",
			body: "具体技能说明、等级、位置、推荐等级、Boss 列表、掉落等细粒度数据，可能仍来自实机录像、媒体报道、社区转录或估算。Beta 与正式版数据公开后需要继续校验。"
		},
		sources: "来源"
	},
	"zh-TW": {
		official: {
			title: "暴雪官方確認資訊。",
			body: "本頁核心事實來自 World of Warcraft: Forever 官方公告或專題座談回顧。僅來自研究的細節會另外標示，不會與官方紀錄混寫。"
		},
		mixed: {
			title: "混合來源，並依證據等級標示。",
			body: "本頁同時包含暴雪官方確認資訊、實機畫面、媒體報導與社群研究。每筆資料的驗證標籤用於說明證據等級；不同來源衝突時，以官方確認為優先。"
		},
		provisional: {
			title: "研究資料——部分細節仍為暫定。",
			body: "具體技能說明、等級、位置、建議等級、Boss 清單、掉落等細部資料，可能仍來自實機錄影、媒體報導、社群轉錄或估算。Beta 與正式版資料公開後仍需繼續校驗。"
		},
		sources: "來源"
	}
};
var dataNoticeClasses = {
	official: "border-emerald-500/30 bg-emerald-500/5",
	mixed: "border-primary/30 bg-primary/5",
	provisional: "border-amber-500/30 bg-amber-500/5"
};
function currentUiCopy() {
	const locale = getLocale();
	return locale === "zh" ? dataNoticeCopy.zh : locale === "zh-TW" ? dataNoticeCopy["zh-TW"] : dataNoticeCopy.en;
}
function DataNotice({ variant = "mixed" }) {
	const copy = currentUiCopy()[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `mb-8 border p-4 text-sm leading-6 ${dataNoticeClasses[variant]}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: copy.title }),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: copy.body
			})
		]
	});
}
var localizedVerificationLabels = {
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
function VerificationBadge({ verification }) {
	const value = verification || "unknown";
	const label = localizedVerificationLabels[getLocale()]?.[value] ?? verificationLabels[value] ?? value.replaceAll("_", " ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: ["inline-flex items-center border px-2 py-0.5 text-[11px] font-medium tracking-wide uppercase", value === "official_confirmed" || value === "visually_confirmed" ? "border-primary/30 bg-primary/10 text-primary" : value === "estimated" || value === "unknown" ? "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300" : "border-border bg-muted text-muted-foreground"].join(" "),
		children: label
	});
}
function StatGrid({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-border bg-card border p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-xs tracking-wide uppercase",
					children: item.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-2xl font-semibold",
					children: item.value
				}),
				item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-1 text-xs leading-5",
					children: item.note
				}) : null
			]
		}, item.label))
	});
}
function EntityCard({ href, title, description, meta, verification, iconSrc, iconAlt }) {
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-border bg-card hover:border-primary/40 h-full border p-5 transition-colors",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-3",
					children: [iconSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: iconSrc,
						alt: iconAlt || "",
						width: 44,
						height: 44,
						loading: "lazy",
						className: "border-border size-11 shrink-0 border object-cover"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl",
						children: title
					})]
				}), verification ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationBadge, { verification }) : null]
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-3 text-sm leading-6",
				children: description
			}) : null,
			meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground mt-4 text-xs leading-5",
				children: meta
			}) : null
		]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
		href,
		className: "block h-full",
		children: body
	}) : body;
}
function SourceLinks({ source }) {
	const urls = extractSourceUrls(source);
	if (!urls.length) return null;
	const label = currentUiCopy().sources;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-border mt-8 border-t pt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-sm font-semibold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2 text-sm",
			children: urls.map((url) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "min-w-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: url,
					target: "_blank",
					rel: "noreferrer",
					className: "text-primary break-all underline-offset-4 hover:underline",
					children: url
				})
			}, url))
		})]
	});
}
//#endregion
export { VerificationBadge as a, StatGrid as i, EntityCard as n, WikiMediaFigure as o, SourceLinks as r, WikiShell as s, DataNotice as t };
