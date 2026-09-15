import "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts-Bd0RxuZy.js
/**
* Local blog posts written as MDX files in this directory.
* File naming: `<slug>.<locale>.mdx` (falls back to the base locale).
* Register every local post slug here — it drives loading and the sitemap.
*
* This module is isomorphic (safe in client bundles). Database posts are
* fetched through the server functions in ./server.ts and merged with the
* local posts via the pure helpers below.
*
* Demo ShipAny posts removed — add Forever research slugs here when ready.
*/
var BLOG_POST_SLUGS = [];
var postModules = /* #__PURE__ */ Object.assign({});
function loadLocalPost(slug, locale) {
	if (!BLOG_POST_SLUGS.includes(slug)) return null;
	return postModules[`/src/content/posts/${slug}.${locale}.mdx`] ?? postModules[`/src/content/posts/${slug}.en.mdx`] ?? null;
}
function localPostToItem(slug, meta) {
	return {
		slug,
		title: meta.title,
		description: meta.description,
		image: meta.image,
		createdAt: new Date(meta.created_at).toISOString(),
		authorName: meta.author_name,
		authorImage: meta.author_image,
		source: "local"
	};
}
function getLocalPosts(locale) {
	return BLOG_POST_SLUGS.map((slug) => ({
		slug,
		mod: loadLocalPost(slug, locale)
	})).filter((m) => m.mod !== null).map(({ slug, mod }) => localPostToItem(slug, mod.meta));
}
/**
* Merge database posts with local MDX posts, deduped by slug
* (database wins), newest first.
*/
function mergePosts(dbPosts, localPosts, options = {}) {
	const dbSlugs = new Set(dbPosts.map((p) => p.slug));
	const merged = [...dbPosts, ...localPosts.filter((p) => !dbSlugs.has(p.slug))].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
	return options.limit ? merged.slice(0, options.limit) : merged;
}
function formatPostDate(dateIso, locale) {
	return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
		year: "numeric",
		month: locale === "zh" ? "long" : "short",
		day: "numeric"
	}).format(new Date(dateIso));
}
//#endregion
export { mergePosts as i, getLocalPosts as n, loadLocalPost as r, formatPostDate as t };
