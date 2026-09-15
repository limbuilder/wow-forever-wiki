import { $ as require_jsx_runtime } from "./_libs/@base-ui/react+[...].mjs";
import { r as loadLocalPost, t as formatPostDate } from "./_ssr/posts-Bd0RxuZy.mjs";
import { ha as blog_title } from "./_ssr/messages-DKBWZPg0.mjs";
import { t as Route } from "./_slug-Cck2TK6t.mjs";
import { wt as Calendar } from "./_libs/lucide-react.mjs";
import { t as WikiBreadcrumbs } from "./_ssr/wiki-breadcrumbs-MquqTq0b.mjs";
import { t as mdxComponents } from "./_ssr/mdx-components-BtAxwlPH.mjs";
import { t as MarkdownContent } from "./_ssr/markdown-content-DAIMZpSI.mjs";
import { n as Header, t as Footer } from "./_ssr/header-DrpgL_ne.mjs";
import { t as MDXProvider } from "./_libs/mdx-js__react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DYbKt9Ju.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPostPage() {
	const { locale, post } = Route.useLoaderData();
	const LocalContent = post.source === "local" ? loadLocalPost(post.slug, locale)?.default : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 px-6 py-12 md:px-8 md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mx-auto max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiBreadcrumbs, { items: [{
							label: blog_title(),
							href: "/blog"
						}, { label: post.title }] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "border-border mb-6 border-b pb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-foreground text-3xl font-semibold tracking-tight md:text-4xl",
									children: post.title
								}),
								post.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mt-3",
									children: post.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-muted-foreground mt-4 flex items-center gap-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" }), formatPostDate(post.createdAt, locale)]
									}), (post.authorName || post.authorImage) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [post.authorImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: post.authorImage,
											alt: post.authorName || "",
											width: 20,
											height: 20,
											className: "size-5 rounded-full object-cover"
										}), post.authorName]
									})]
								})
							]
						}),
						post.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: post.image,
							alt: post.title,
							className: "border-border mb-8 w-full rounded-2xl border object-cover"
						}),
						LocalContent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-foreground/90 text-[15px] leading-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MDXProvider, {
								components: mdxComponents,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalContent, {})
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownContent, { content: post.content || "" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { BlogPostPage as component };
