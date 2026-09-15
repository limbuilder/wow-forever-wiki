import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { m as races, p as raceClassMatrix, t as classNames } from "./wiki-v1-data-DEzgNKYh.mjs";
import { t as getClassIcon } from "./class-icons-DCc3cvJS.mjs";
import { s as WikiShell, t as DataNotice } from "./wiki-v1-page-C1jV_Ymk.mjs";
import { t as matrixCopy } from "./race-class-combinations-ClTRLo4a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/race-class-combinations-Culcs5Xd.js
var import_jsx_runtime = require_jsx_runtime();
var deepDiveSource = "https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap";
var officialNewCombinations = [
	"Gnome Priest",
	"Human Hunter",
	"Dwarf Shaman",
	"Orc Mage",
	"Troll Warlock",
	"Undead Paladin"
];
function RaceClassPage() {
	const copy = matrixCopy(getLocale());
	const lookup = new Map(raceClassMatrix.map((row) => [`${row.race}::${row.class}`, row]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WikiShell, {
		eyebrow: copy.eyebrow,
		title: copy.title,
		description: copy.description,
		breadcrumbs: [{ label: copy.breadcrumb }],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNotice, { variant: "mixed" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-primary/30 bg-primary/5 mb-8 border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary text-xs font-semibold tracking-[0.16em] uppercase",
						children: copy.confirmed
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl",
						children: copy.six
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: deepDiveSource,
						target: "_blank",
						rel: "noreferrer",
						className: "text-primary text-sm underline-offset-4 hover:underline",
						children: copy.source
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
					children: officialNewCombinations.map((combination) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-border bg-background/50 border px-4 py-3 text-sm font-medium",
						children: combination
					}, combination))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mb-2 text-xs sm:hidden",
				children: copy.swipe
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border overflow-x-auto border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[900px] border-collapse text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "bg-muted/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "border-border border-b p-3 text-left font-medium",
							children: copy.race
						}), classNames.map((className) => {
							const icon = getClassIcon(className);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "border-border border-b p-3 text-center font-medium",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center gap-1.5",
									title: className,
									children: [icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: icon.src,
										alt: icon.alt,
										width: 32,
										height: 32,
										loading: "lazy",
										className: "border-border size-8 border object-cover"
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground text-[11px]",
										children: className
									})]
								})
							}, className);
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: races.map((race) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-border border-b last:border-b-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "bg-muted/20 p-3 text-left font-medium",
							children: race.race
						}), classNames.map((className) => {
							const row = lookup.get(`${race.race}::${className}`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-3 text-center",
								title: `${className}: ${row?.verification ?? "unknown"}`,
								children: row ? row.available ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-semibold",
									"aria-label": copy.available,
									children: "✓"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									"aria-label": copy.unavailable,
									children: "—"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									"aria-label": copy.unknown,
									children: "?"
								})
							}, className);
						})]
					}, race.race)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-4 text-xs leading-5",
				children: copy.legend
			})
		]
	});
}
//#endregion
export { RaceClassPage as component };
