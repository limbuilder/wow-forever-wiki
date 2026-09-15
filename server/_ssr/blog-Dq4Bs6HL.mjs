import { d as lazyRouteComponent, f as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getLocale } from "./ssr.mjs";
import { s as envConfigs } from "./schema-_Dk5pXhf.mjs";
import { ha as blog_title, pa as blog_description } from "./messages-DKBWZPg0.mjs";
import { r as getBlogPostsFn } from "./server-D0L5gi3t.mjs";
import { t as pageHead } from "./seo-ZXeCiUz7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-Dq4Bs6HL.js
var $$splitComponentImporter = () => import("./blog-CUn1w6HF.mjs");
var Route = createFileRoute("/blog/")({
	loader: async () => {
		const locale = getLocale();
		return {
			locale,
			posts: await getBlogPostsFn({ data: { locale } })
		};
	},
	head: ({ loaderData }) => {
		const locale = loaderData?.locale ?? getLocale();
		const posts = loaderData?.posts ?? [];
		return pageHead("/blog", locale, {
			title: `${blog_title({}, { locale })} | ${envConfigs.app_name}`,
			description: blog_description({}, { locale }),
			robots: posts.length === 0 ? "noindex, follow" : void 0
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
