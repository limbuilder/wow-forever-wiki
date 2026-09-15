import { o as __toESM } from "../_runtime.mjs";
import { $ as require_jsx_runtime, et as require_react } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale, d as locales } from "./ssr.mjs";
import { s as envConfigs } from "./schema-_Dk5pXhf.mjs";
import { ka as common_search_placeholder } from "./messages-DKBWZPg0.mjs";
import { t as getWikiCopy } from "./wiki-i18n-BCyX1rmf.mjs";
import { n as usePathname, t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { Ct as Check, K as Languages, L as Menu, N as Moon, St as ChevronDown, n as X, p as Sun, rt as Globe, y as Search } from "../_libs/lucide-react.mjs";
import { n as buttonVariants, t as Button$1 } from "./button-RkClB0x2.mjs";
import { t as localeNames } from "./locale-CdwHvp6g.mjs";
import { i as DropdownMenuItem, n as DropdownMenuContent, t as DropdownMenu, u as DropdownMenuTrigger } from "./dropdown-menu-7WHFSjMx.mjs";
import { n as z } from "../_libs/next-themes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/header-DrpgL_ne.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var localePrefixes = {
	en: "",
	zh: "/zh-cn",
	"zh-TW": "/zh-tw"
};
function stripLocalePrefix(pathname) {
	return pathname.replace(/^\/(?:zh-cn|zh-tw)(?=\/|$)/, "") || "/";
}
function localizedPath(pathname, locale) {
	const basePath = stripLocalePrefix(pathname);
	const prefix = localePrefixes[locale] ?? "";
	if (basePath === "/") return prefix || "/";
	return `${prefix}${basePath}`;
}
function LocaleSelector({ variant = "icon", className }) {
	const locale = getLocale();
	function handleSwitch(newLocale) {
		if (newLocale === locale || typeof window === "undefined") return;
		const target = `${localizedPath(window.location.pathname, newLocale)}${window.location.search}${window.location.hash}`;
		document.cookie = `PARAGLIDE_LOCALE=${encodeURIComponent(newLocale)}; Max-Age=31536000; Path=/; SameSite=Lax`;
		window.location.assign(target);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		className: cn("inline-flex items-center transition-colors outline-none", variant === "icon" ? "text-muted-foreground hover:bg-accent hover:text-accent-foreground size-8 justify-center rounded-md" : "h-9 gap-2 rounded-full border px-4 text-sm", className),
		children: variant === "icon" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Switch language"
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: localeNames[locale] || locale }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 opacity-70" })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
		align: "end",
		children: locales.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			onClick: () => handleSwitch(loc),
			className: "flex items-center justify-between gap-2",
			children: [localeNames[loc] || loc, loc === locale && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })]
		}, loc))
	})] });
}
/** Off-site URLs render as plain <a>; internal paths use the locale-aware Link. */
var isExternalHref$1 = (href) => /^https?:\/\//.test(href);
function SiteFooter({ tagline, columns, socials, disclaimer, copyright }) {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "dark:bg-card dark:text-card-foreground bg-[oklch(0.14_0.02_280)] text-[oklch(0.93_0.02_85)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 pt-14 pb-6 sm:px-10 sm:pt-16 lg:px-16",
			children: [
				tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-12 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight italic sm:text-4xl",
					children: tagline
				}),
				columns && columns.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("grid gap-x-8 gap-y-10 sm:gap-x-12", columns.length <= 3 ? "grid-cols-1 sm:grid-cols-3" : columns.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"),
					children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold tracking-wide",
							children: col.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: isExternalHref$1(link.href) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-sm text-white/55 transition-colors hover:text-white",
								children: link.label
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								href: link.href,
								target: link.external ? "_blank" : void 0,
								className: "text-sm text-white/55 transition-colors hover:text-white",
								children: link.label
							}) }, link.label))
						})]
					}, col.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [socials && socials.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-5",
						children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							"aria-label": s.label,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex size-10 items-center justify-center text-white/70 transition-colors hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-[18px]" })
						}, s.label))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleSelector, {
						variant: "pill",
						className: "border-white/20 text-white/80 hover:bg-white/5 hover:text-white"
					})]
				}),
				disclaimer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-4xl text-xs leading-5 text-white/40",
					children: disclaimer
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 border-t border-white/10 pt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-white/55",
						children: copyright || `© ${year} ${envConfigs.app_name}. All rights reserved.`
					})
				})
			]
		})
	});
}
function Footer() {
	const copy = getWikiCopy(getLocale());
	const columns = [
		{
			title: copy.footer.browse,
			links: [
				{
					label: copy.nav.deepDive,
					href: "/deep-dive"
				},
				{
					label: copy.nav.classes,
					href: "/classes"
				},
				{
					label: copy.nav.races,
					href: "/races"
				},
				{
					label: copy.nav.talents,
					href: "/talents"
				}
			]
		},
		{
			title: copy.footer.resources,
			links: [
				{
					label: copy.nav.zones,
					href: "/zones"
				},
				{
					label: copy.nav.quests,
					href: "/quests"
				},
				{
					label: copy.nav.items,
					href: "/items"
				},
				{
					label: copy.nav.dungeons,
					href: "/dungeons"
				},
				{
					label: copy.nav.raids,
					href: "/raids"
				},
				{
					label: "Forever vs Classic",
					href: "/forever-vs-classic"
				},
				{
					label: copy.nav.raceClass,
					href: "/race-class-combinations"
				},
				{
					label: copy.nav.search,
					href: "/search"
				}
			]
		},
		{
			title: copy.footer.legal,
			links: [
				{
					label: copy.footer.about,
					href: "/about"
				},
				{
					label: copy.footer.privacy,
					href: "/privacy-policy"
				},
				{
					label: copy.footer.terms,
					href: "/terms-of-service"
				},
				{
					label: copy.footer.contact,
					href: "/contact"
				}
			]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {
		tagline: copy.footer.tagline,
		columns,
		disclaimer: copy.footer.disclaimer
	});
}
var logo_mark_default = "/assets/logo-mark-9OULke3l.png";
function ThemeToggle() {
	const { theme, setTheme } = z();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
		variant: "ghost",
		size: "icon",
		onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 dark:hidden" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "hidden size-4 dark:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Toggle theme"
			})
		]
	});
}
/** Off-site URLs render as plain <a>; internal paths use the locale-aware Link. */
var isExternalHref = (href) => Boolean(href && /^https?:\/\//.test(href));
function isActivePath(pathname, href) {
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(`${href}/`);
}
function isGroupActive(pathname, link) {
	if (link.href && isActivePath(pathname, link.href)) return true;
	return Boolean(link.children?.some((child) => child.href && isActivePath(pathname, child.href)));
}
function leafClassName({ active, onDark, nested = false }) {
	return cn("rounded-md px-3 py-2 text-sm transition-colors", nested && "pl-6", active ? onDark ? "bg-white/10 font-medium text-amber-200" : "bg-accent text-foreground font-medium" : onDark ? "text-white/75 hover:bg-white/10 hover:text-white" : "text-muted-foreground hover:bg-accent hover:text-foreground");
}
function DesktopLeafLink({ link, pathname }) {
	if (!link.href) return null;
	const active = isActivePath(pathname, link.href);
	if (isExternalHref(link.href)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: link.href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: leafClassName({
			active: false,
			onDark: false
		}),
		children: link.label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
		href: link.href,
		target: link.external ? "_blank" : void 0,
		"aria-current": active ? "page" : void 0,
		className: cn(leafClassName({
			active,
			onDark: false
		}), "block"),
		children: link.label
	});
}
function MobileLeafLink({ link, pathname, onNavigate, nested = false }) {
	if (!link.href) return null;
	const active = isActivePath(pathname, link.href);
	const className = leafClassName({
		active,
		onDark: false,
		nested
	});
	if (isExternalHref(link.href)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: link.href,
		target: "_blank",
		rel: "noopener noreferrer",
		className,
		onClick: onNavigate,
		children: link.label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
		href: link.href,
		target: link.external ? "_blank" : void 0,
		"aria-current": active ? "page" : void 0,
		className,
		onClick: onNavigate,
		children: link.label
	});
}
function SiteHeader({ navLinks, showSearch = true, overlay = false }) {
	const pathname = usePathname();
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const solid = !overlay || scrolled || mobileOpen;
	const onDark = overlay && !solid;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300", overlay ? "fixed inset-x-0 top-0" : "sticky top-0", solid ? "bg-background/95 border-border/60 border-b backdrop-blur-sm" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					href: "/",
					className: cn("flex items-center gap-2.5", onDark && "text-white"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_mark_default,
						alt: "",
						className: "size-8 rounded-md",
						width: 32,
						height: 32
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg tracking-tight",
						children: envConfigs.app_name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: navLinks?.map((link) => {
						if (link.children?.length) {
							const wide = link.children.length > 6;
							const groupActive = isGroupActive(pathname, link);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: cn("flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors", groupActive ? onDark ? "font-medium text-amber-200" : "text-primary font-medium" : onDark ? "text-white/75 hover:bg-white/10 hover:text-white" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
									"aria-haspopup": "menu",
									"aria-current": groupActive ? "true" : void 0,
									children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("invisible absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility] group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100", wide ? "w-[420px]" : "w-60"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("border-border bg-popover text-popover-foreground rounded-lg border p-2 shadow-lg", wide && "grid grid-cols-2 gap-x-1"),
										role: "menu",
										children: link.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopLeafLink, {
											link: child,
											pathname
										}, `${link.label}-${child.label}`))
									})
								})]
							}, link.label);
						}
						if (!link.href) return null;
						const active = isActivePath(pathname, link.href);
						return isExternalHref(link.href) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: cn("rounded-md px-3 py-2 text-sm transition-colors", onDark ? "text-white/75 hover:bg-white/10 hover:text-white" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
							children: link.label
						}, link.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							href: link.href,
							target: link.external ? "_blank" : void 0,
							"aria-current": active ? "page" : void 0,
							className: cn("rounded-md px-3 py-2 text-sm transition-colors", active ? onDark ? "font-medium text-amber-200" : "text-primary font-medium" : onDark ? "text-white/75 hover:bg-white/10 hover:text-white" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
							children: link.label
						}, link.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn(onDark && "[&_[data-slot=dropdown-menu-trigger]]:text-white/80 [&_[data-slot=dropdown-menu-trigger]]:hover:bg-white/10 [&_[data-slot=dropdown-menu-trigger]]:hover:text-white"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleSelector, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn(onDark && "[&_button]:text-white/80 [&_button]:hover:bg-white/10 [&_button]:hover:text-white"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
						}),
						showSearch ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
							href: "/search",
							className: cn(buttonVariants({
								variant: "outline",
								size: "sm"
							}), "gap-1.5", onDark && "border-white/25 bg-black/20 text-white hover:bg-white/10 hover:text-white"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5" }), common_search_placeholder()]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("inline-flex size-10 items-center justify-center rounded-md md:hidden", onDark && "text-white hover:bg-white/10"),
					onClick: () => setMobileOpen(!mobileOpen),
					"aria-label": mobileOpen ? "Close menu" : "Open menu",
					"aria-expanded": mobileOpen,
					children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-border bg-background/95 border-t px-4 pt-2 pb-4 backdrop-blur-sm md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1",
				children: navLinks?.map((link) => {
					if (link.children?.length) {
						const groupActive = isGroupActive(pathname, link);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group/nav",
							open: groupActive || void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: cn("flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-sm transition-colors [&::-webkit-details-marker]:hidden", groupActive ? "text-primary font-medium" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 transition-transform group-open/nav:rotate-180" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-border/70 mt-1 ml-3 flex flex-col gap-1 border-l pl-1",
								children: link.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLeafLink, {
									link: child,
									pathname,
									nested: true,
									onNavigate: () => setMobileOpen(false)
								}, `${link.label}-${child.label}`))
							})]
						}, link.label);
					}
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLeafLink, {
						link,
						pathname,
						onNavigate: () => setMobileOpen(false)
					}, link.label);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-border mt-3 flex items-center gap-2 border-t pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleSelector, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
					showSearch ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
						href: "/search",
						className: cn(buttonVariants({ size: "sm" }), "gap-1.5"),
						onClick: () => setMobileOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5" }), common_search_placeholder()]
					}) : null
				]
			})]
		})]
	});
}
function Header({ overlay = false }) {
	const copy = getWikiCopy(getLocale());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {
		navLinks: [
			{
				href: "/deep-dive",
				label: copy.nav.deepDive
			},
			{
				label: copy.nav.characters,
				children: [
					{
						href: "/classes",
						label: copy.nav.classes
					},
					{
						href: "/races",
						label: copy.nav.races
					},
					{
						href: "/race-class-combinations",
						label: copy.nav.raceClass
					}
				]
			},
			{
				label: copy.nav.talents,
				children: [
					{
						href: "/talents",
						label: copy.nav.allTalents
					},
					{
						href: "/talents/warrior",
						label: "Warrior"
					},
					{
						href: "/talents/paladin",
						label: "Paladin"
					},
					{
						href: "/talents/hunter",
						label: "Hunter"
					},
					{
						href: "/talents/rogue",
						label: "Rogue"
					},
					{
						href: "/talents/priest",
						label: "Priest"
					},
					{
						href: "/talents/shaman",
						label: "Shaman"
					},
					{
						href: "/talents/mage",
						label: "Mage"
					},
					{
						href: "/talents/warlock",
						label: "Warlock"
					},
					{
						href: "/talents/druid",
						label: "Druid"
					},
					{
						href: "/forever-vs-classic",
						label: copy.nav.talentCompare
					}
				]
			},
			{
				label: copy.nav.world,
				children: [
					{
						href: "/zones",
						label: copy.nav.zones
					},
					{
						href: "/quests",
						label: copy.nav.quests
					},
					{
						href: "/items",
						label: copy.nav.items
					},
					{
						href: "/dungeons",
						label: copy.nav.dungeons
					},
					{
						href: "/raids",
						label: copy.nav.raids
					}
				]
			},
			{
				href: "/forever-vs-classic",
				label: copy.nav.compare
			}
		],
		showSearch: true,
		overlay
	});
}
//#endregion
export { Header as n, Footer as t };
