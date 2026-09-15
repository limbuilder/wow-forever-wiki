import { o as __toESM } from "../_runtime.mjs";
import { $ as require_jsx_runtime, J as useRender, Y as mergeProps, et as require_react } from "../_libs/@base-ui/react+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { bt as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wiki-breadcrumbs-MquqTq0b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Breadcrumb({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		className: cn(className),
		...props
	});
}
function BreadcrumbList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		"data-slot": "breadcrumb-list",
		className: cn("flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground", className),
		...props
	});
}
function BreadcrumbItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		"data-slot": "breadcrumb-item",
		className: cn("inline-flex items-center gap-1", className),
		...props
	});
}
function BreadcrumbLink({ className, render, ...props }) {
	return useRender({
		defaultTagName: "a",
		props: mergeProps({ className: cn("transition-colors hover:text-foreground", className) }, props),
		render,
		state: { slot: "breadcrumb-link" }
	});
}
function BreadcrumbPage({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: cn("font-normal text-foreground", className),
		...props
	});
}
function BreadcrumbSeparator({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: cn("[&>svg]:size-3.5", className),
		...props,
		children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
	});
}
function WikiBreadcrumbs({ items }) {
	const locale = getLocale();
	const crumbs = [{
		label: locale === "zh" ? "首页" : locale === "zh-TW" ? "首頁" : "Home",
		href: "/"
	}, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, {
		className: "mb-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbList, { children: crumbs.map((crumb, index) => {
			const isLast = index === crumbs.length - 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [index > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: isLast || !crumb.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, { children: crumb.label }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, { href: crumb.href }),
				children: crumb.label
			}) })] }, `${crumb.label}-${index}`);
		}) })
	});
}
//#endregion
export { WikiBreadcrumbs as t };
