import { d as locales, p as localizeUrl } from "./ssr.mjs";
import { s as envConfigs } from "./schema-_Dk5pXhf.mjs";
import { n as wikiHreflang } from "./wiki-i18n-BCyX1rmf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seo-ZXeCiUz7.js
function normalizePath(path) {
	if (!path || path === "/") return "/";
	return path.startsWith("/") ? path : `/${path}`;
}
/** Absolute localized URL for a locale-free path (e.g. `/classes/mage`). */
function pageUrl(path, locale) {
	const normalized = normalizePath(path);
	return localizeUrl(`${envConfigs.app_url}${normalized}`, { locale }).href;
}
/** Self-canonical + hreflang alternates + x-default. */
function pageLinks(path, locale) {
	return [
		{
			rel: "canonical",
			href: pageUrl(path, locale)
		},
		...locales.map((loc) => ({
			rel: "alternate",
			hrefLang: wikiHreflang(loc),
			href: pageUrl(path, loc)
		})),
		{
			rel: "alternate",
			hrefLang: "x-default",
			href: pageUrl(path, "en")
		}
	];
}
/** Shared title/description + Open Graph / Twitter card meta for route head(). */
function pageMeta({ title, description, url, image, type = "website", robots }) {
	const ogImage = image || `${envConfigs.app_url}/imgs/hero-forever.jpg`;
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		...robots ? [{
			name: "robots",
			content: robots
		}] : [],
		{
			property: "og:type",
			content: type
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:url",
			content: url
		},
		{
			property: "og:image",
			content: ogImage
		},
		{
			property: "og:site_name",
			content: envConfigs.app_name
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:image",
			content: ogImage
		}
	];
}
/** Convenience: meta + links for a public page. */
function pageHead(path, locale, opts) {
	const url = pageUrl(path, locale);
	return {
		meta: pageMeta({
			...opts,
			url
		}),
		links: pageLinks(path, locale)
	};
}
//#endregion
export { pageUrl as n, pageHead as t };
