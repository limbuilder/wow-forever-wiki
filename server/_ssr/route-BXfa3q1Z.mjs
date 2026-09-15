import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { u as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as mdxComponents } from "./mdx-components-BtAxwlPH.mjs";
import { t as MDXProvider } from "../_libs/mdx-js__react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-BXfa3q1Z.js
var import_jsx_runtime = require_jsx_runtime();
function PagesLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl px-6 pt-8 pb-12 md:px-8 md:pt-10 md:pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MDXProvider, {
				components: mdxComponents,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})
		})
	});
}
//#endregion
export { PagesLayout as component };
