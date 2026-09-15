import { d as lazyRouteComponent, f as createFileRoute, v as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { c as getLocale } from "./_ssr/ssr.mjs";
import { s as envConfigs } from "./_ssr/schema-_Dk5pXhf.mjs";
import { n as getBlogPostFn } from "./_ssr/server-D0L5gi3t.mjs";
import { t as pageHead } from "./_ssr/seo-ZXeCiUz7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Cck2TK6t.js
var $$splitComponentImporter = () => import("./_slug-DYbKt9Ju.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: async ({ params }) => {
		const locale = getLocale();
		const post = await getBlogPostFn({ data: {
			slug: params.slug,
			locale
		} });
		if (!post) throw notFound();
		return {
			locale,
			post
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const { locale, post } = loaderData;
		return pageHead(`/blog/${post.slug}`, locale, {
			title: `${post.title} | ${envConfigs.app_name}`,
			description: post.description,
			image: post.image,
			type: "article"
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
