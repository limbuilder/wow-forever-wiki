import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { s as WikiShell } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { n as lang, t as copy } from "./deep-dive-s8Qv1XED.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deep-dive-D4O0ggS0.js
var import_jsx_runtime = require_jsx_runtime();
var source = "https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap";
var images = {
	camping: "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/6i/6IOXC42AUBHX1789319298469.png",
	legacy: "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/U742QH5FL0F71789247720813.png",
	rulesets: "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/5s/5SESV5MAQI1U1789320729663.PNG",
	paladin: "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/7SGUHEP05HV71789247720285.png"
};
function Shot({ src, alt, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-6 overflow-hidden border border-white/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			loading: "lazy",
			className: "w-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "text-muted-foreground px-3 py-2 text-xs",
			children: caption
		})]
	});
}
function DeepDivePage() {
	const c = copy[lang(getLocale())];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: c.eyebrow,
		title: c.title,
		description: c.description,
		breadcrumbs: [{ label: "Deep Dive" }],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-emerald-500/30 bg-emerald-500/5 p-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: c.official }),
					" ",
					c.officialBody,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: source,
						target: "_blank",
						rel: "noreferrer",
						className: "text-primary underline",
						children: c.source
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "camping-professions",
				className: "mt-10 scroll-mt-24 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: c.campingTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-7",
						children: c.camping1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-7",
						children: c.camping2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shot, {
						src: images.camping,
						alt: "WoW Forever Camping system",
						caption: c.imageCaption
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "legacy-system",
				className: "mt-10 scroll-mt-24 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: c.legacyTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-7",
						children: c.legacy1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							["16", c.stat1],
							["65", c.stat2],
							["3", c.stat3]
						].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-border border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-primary font-serif text-3xl",
								children: v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground text-sm",
								children: l
							})]
						}, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-7",
						children: c.legacy2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shot, {
						src: images.legacy,
						alt: "WoW Forever Legacy System",
						caption: c.imageCaption
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "realmless-azeroth",
				className: "mt-10 scroll-mt-24 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: c.rulesTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-7",
						children: c.rules
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shot, {
						src: images.rulesets,
						alt: "WoW Forever ruleset selection",
						caption: c.imageCaption
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "transmog",
				className: "mt-10 scroll-mt-24 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: c.transmogTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground leading-7",
					children: c.transmog
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "combat-itemization",
				className: "mt-10 scroll-mt-24 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: c.combatTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-7",
						children: c.combat
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "text-muted-foreground list-disc space-y-2 pl-5 leading-7",
						children: c.bullets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-7",
						children: c.examples
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "races-new-class-paths",
				className: "mt-10 scroll-mt-24 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: c.racesTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground leading-7",
					children: c.races
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "talents-paladin",
				className: "mt-10 scroll-mt-24 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: c.talentsTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-7",
						children: c.talents1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shot, {
						src: images.paladin,
						alt: "WoW Forever Paladin talent tree preview",
						caption: c.imageCaption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-7",
						children: c.talents2
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-10 border-t border-white/10 pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground leading-7",
					children: c.closing
				})
			})
		]
	});
}
//#endregion
export { DeepDivePage as component };
