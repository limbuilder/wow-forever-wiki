import { o as __toESM } from "../_runtime.mjs";
import { $ as require_jsx_runtime, et as require_react } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { s as envConfigs } from "./schema-_Dk5pXhf.mjs";
import { t as getWikiCopy } from "./wiki-i18n-BCyX1rmf.mjs";
import { n as pageUrl } from "./seo-ZXeCiUz7.mjs";
import { t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { Dt as ArrowRight, M as Network, Tt as BookOpenCheck, _ as Shield, f as Swords, g as Sparkles, it as GitCompareArrows, r as Users, y as Search } from "../_libs/lucide-react.mjs";
import { n as buttonVariants } from "./button-RkClB0x2.mjs";
import { n as Header, t as Footer } from "./header-DrpgL_ne.mjs";
import { t as homepageMeta } from "./routes-DmYSoGnl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BPwl5bTf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Categories() {
	const copy = getWikiCopy(getLocale());
	const categories = [
		{
			href: "/deep-dive",
			title: copy.categories.cards.deepDive[0],
			description: copy.categories.cards.deepDive[1],
			icon: BookOpenCheck
		},
		{
			href: "/classes",
			title: copy.categories.cards.classes[0],
			description: copy.categories.cards.classes[1],
			icon: Swords
		},
		{
			href: "/talents",
			title: copy.categories.cards.talents[0],
			description: copy.categories.cards.talents[1],
			icon: Sparkles
		},
		{
			href: "/races",
			title: copy.categories.cards.races[0],
			description: copy.categories.cards.races[1],
			icon: Users
		},
		{
			href: "/race-class-combinations",
			title: copy.categories.cards.matrix[0],
			description: copy.categories.cards.matrix[1],
			icon: Network
		},
		{
			href: "/dungeons",
			title: copy.categories.cards.dungeons[0],
			description: copy.categories.cards.dungeons[1],
			icon: Shield
		},
		{
			href: "/forever-vs-classic",
			title: copy.categories.cards.compare[0],
			description: copy.categories.cards.compare[1],
			icon: GitCompareArrows
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "browse",
		className: "px-4 py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 text-center sm:mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary text-xs font-medium tracking-[0.2em] uppercase",
							children: copy.categories.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-serif text-3xl font-normal tracking-tight sm:text-4xl",
							children: copy.categories.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mx-auto mt-4 max-w-2xl leading-7",
							children: copy.categories.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: categories.map(({ href, title, description, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
						href,
						className: "group border-border bg-card/60 hover:border-primary/40 hover:bg-card relative flex flex-col gap-3 border p-5 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-primary/10 text-primary inline-flex size-10 items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: 1.75
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "group-hover:text-primary font-medium transition-colors",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm leading-relaxed",
								children: description
							})]
						})]
					}, href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							href: "/zones",
							className: "text-primary underline-offset-4 hover:underline",
							children: copy.categories.zones
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							href: "/items",
							className: "text-primary underline-offset-4 hover:underline",
							children: copy.categories.items
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							href: "/raids",
							className: "text-primary underline-offset-4 hover:underline",
							children: copy.categories.raids
						})
					]
				})
			]
		})
	});
}
var copy = {
	en: {
		eyebrow: "Data status",
		title: "Official facts first, Beta checks next",
		description: "Blizzard's What's Next, Deep Dive, and Found Photos recaps now anchor the site's zones, quests, dungeons, raids, race-class combinations, Legacy, Camping, itemization, and selected class/race changes. Gameplay footage and community transcriptions supplement those sources and remain labeled separately. Beta will be used to validate granular talent ranks, tooltip values, boss lists, loot details, recipes, quest records, and other research-derived fields.",
		deepDive: "Read official Deep Dive notes",
		zones: "Explore official zone notes",
		compare: "Explore Forever vs Classic"
	},
	zh: {
		eyebrow: "数据状态",
		title: "先以官方信息为准，再用 Beta 数据校验",
		description: "暴雪的 What’s Next、Deep Dive 与 Found Photos 回顾现在共同构成本站区域、任务、地下城、团队副本、种族-职业组合、Legacy、Camping、装备体系及部分职业/种族改动的官方基线。实机录像与社区转录仅作为补充，并会单独标注。Beta 开启后，我们会继续校验天赋等级、技能说明数值、Boss、掉落、配方、任务记录等细粒度研究数据。",
		deepDive: "查看官方 Deep Dive 记录",
		zones: "查看官方区域记录",
		compare: "查看 Forever vs Classic"
	},
	"zh-TW": {
		eyebrow: "資料狀態",
		title: "先以官方資訊為準，再用 Beta 資料校驗",
		description: "暴雪的 What’s Next、Deep Dive 與 Found Photos 回顧現在共同構成本站區域、任務、地城、團隊副本、種族-職業組合、Legacy、Camping、裝備系統及部分職業/種族改動的官方基線。實機影片與社群轉錄僅作為補充，並會分開標示。Beta 開放後，我們會繼續校驗天賦等級、技能說明數值、Boss、掉落、配方、任務紀錄等細部研究資料。",
		deepDive: "查看官方 Deep Dive 紀錄",
		zones: "查看官方區域紀錄",
		compare: "查看 Forever vs Classic"
	}
};
function ComingSoonNote() {
	const locale = getLocale();
	const text = locale === "zh" ? copy.zh : locale === "zh-TW" ? copy["zh-TW"] : copy.en;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-border bg-muted/40 mx-auto max-w-5xl border px-6 py-10 text-center sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary text-xs font-medium tracking-[0.2em] uppercase",
					children: text.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-2xl tracking-tight sm:text-3xl",
					children: text.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:text-base",
					children: text.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							href: "/deep-dive",
							className: "text-primary underline-offset-4 hover:underline",
							children: text.deepDive
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							href: "/zones",
							className: "text-primary underline-offset-4 hover:underline",
							children: text.zones
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							href: "/forever-vs-classic",
							className: "text-primary underline-offset-4 hover:underline",
							children: text.compare
						})
					]
				})
			]
		})
	});
}
var HERO_POSTER = "/imgs/hero-forever.jpg";
var HERO_VIDEO_WEBM = "/videos/hero-forever.webm";
var HERO_VIDEO_MP4 = "/videos/hero-forever.mp4";
function Hero() {
	const [playVideo, setPlayVideo] = (0, import_react.useState)(false);
	const copy = getWikiCopy(getLocale());
	(0, import_react.useEffect)(() => {
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const saveData = "connection" in navigator && Boolean(navigator.connection?.saveData);
		if (reduceMotion || saveData) return;
		const start = () => setPlayVideo(true);
		if ("requestIdleCallback" in window) {
			const id = window.requestIdleCallback(start, { timeout: 2500 });
			return () => window.cancelIdleCallback(id);
		}
		const timer = window.setTimeout(start, 1200);
		return () => window.clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-[78vh] items-center overflow-hidden px-4 pt-28 pb-20 sm:min-h-[85vh] sm:pt-32 sm:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: HERO_POSTER,
					alt: "",
					width: 1920,
					height: 1080,
					loading: "eager",
					fetchPriority: "high",
					decoding: "async",
					className: "absolute inset-0 h-full w-full max-w-none scale-105 object-cover object-[center_40%]"
				}),
				playVideo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
					className: "absolute inset-0 h-full w-full scale-105 object-cover object-[center_40%] motion-reduce:hidden",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					preload: "none",
					poster: HERO_POSTER,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: HERO_VIDEO_WEBM,
						type: "video/webm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: HERO_VIDEO_MP4,
						type: "video/mp4"
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.12_0.02_55_/_0.78)_0%,oklch(0.1_0.02_55_/_0.82)_42%,var(--background)_100%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0_0_0_/_0.35)_0%,transparent_62%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.1_85_/_0.12),transparent_55%)]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-fade-up mx-auto max-w-3xl space-y-7 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.28em] text-amber-200/90 uppercase",
						children: envConfigs.app_name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border border-amber-300/25 bg-amber-400/10 px-3 py-1 text-[11px] font-medium tracking-[0.14em] text-amber-100/90 uppercase",
						children: copy.hero.badge
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl leading-[1.12] font-normal tracking-tight text-white sm:text-5xl lg:text-6xl",
					children: copy.hero.headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl",
					children: copy.hero.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-2xl text-xs leading-5 text-white/50",
					children: copy.hero.evidence
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-3 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
						href: "/search",
						className: cn(buttonVariants({ size: "lg" }), "h-11 gap-2 rounded-md px-7"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), copy.hero.search]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
						href: "/deep-dive",
						className: cn(buttonVariants({
							variant: "outline",
							size: "lg"
						}), "h-11 gap-2 rounded-md border-white/25 bg-black/20 px-7 text-white hover:bg-white/10 hover:text-white"),
						children: [copy.hero.deepDive, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})
			]
		})]
	});
}
function HomePage() {
	const locale = getLocale();
	const url = pageUrl("/", locale);
	const { description } = homepageMeta(locale);
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "WebSite",
			name: envConfigs.app_name,
			url,
			description,
			inLanguage: [
				"en",
				"zh-CN",
				"zh-TW"
			],
			potentialAction: {
				"@type": "SearchAction",
				target: `${pageUrl("/search", locale)}?q={search_term_string}`,
				"query-input": "required name=search_term_string"
			}
		}, {
			"@type": "Organization",
			name: envConfigs.app_name,
			url,
			description: "Unofficial community wiki for World of Warcraft: Forever. Not affiliated with Blizzard Entertainment."
		}]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { overlay: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Categories, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonNote, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { HomePage as component };
