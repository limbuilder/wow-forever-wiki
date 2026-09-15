import { d as lazyRouteComponent, f as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { gu as wiki_search_description, xu as wiki_search_title } from "./messages-DKBWZPg0.mjs";
import { t as pageHead } from "./seo-ZXeCiUz7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-CzVNt4wm.js
var $$splitComponentImporter = () => import("./search-Cu8tis3I.mjs");
var Route = createFileRoute("/search")({
	validateSearch: (search) => {
		const q = typeof search.q === "string" ? search.q.trim() : "";
		return q ? { q } : {};
	},
	loader: () => ({ locale: getLocale() }),
	head: ({ loaderData }) => {
		const locale = loaderData?.locale ?? "en";
		return pageHead("/search", locale, {
			title: wiki_search_title({}, { locale }),
			description: wiki_search_description({}, { locale }),
			robots: "noindex, follow"
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
