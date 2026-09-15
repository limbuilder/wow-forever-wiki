import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { t as formatPostDate } from "./posts-Bd0RxuZy.mjs";
import { ha as blog_title, ma as blog_no_posts, pa as blog_description } from "./messages-DKBWZPg0.mjs";
import { t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { wt as Calendar } from "../_libs/lucide-react.mjs";
import { t as WikiBreadcrumbs } from "./wiki-breadcrumbs-MquqTq0b.mjs";
import { n as Header, t as Footer } from "./header-DrpgL_ne.mjs";
import { t as Route } from "./blog-Dq4Bs6HL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-CUn1w6HF.js
var import_jsx_runtime = require_jsx_runtime();
function BlogCard({ href, title, description, image, date, authorName, authorImage }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
		href,
		className: "group border-border bg-card hover:border-foreground/20 relative flex flex-col overflow-hidden rounded-2xl border transition-all hover:shadow-sm",
		children: [image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: title,
			width: 640,
			height: 360,
			loading: "lazy",
			className: "aspect-video w-full object-cover object-center"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "leading-snug font-medium group-hover:underline group-hover:underline-offset-4",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground line-clamp-3 text-sm leading-relaxed",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-muted-foreground mt-auto flex items-center gap-2 pt-2 text-xs",
					children: [
						date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5" }), date]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1" }),
						(authorName || authorImage) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [authorImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: authorImage,
								alt: authorName || "",
								width: 20,
								height: 20,
								loading: "lazy",
								className: "size-5 rounded-full object-cover"
							}), authorName]
						})
					]
				})
			]
		})]
	});
}
function BlogPage() {
	const { locale, posts } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 px-4 py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiBreadcrumbs, { items: [{ label: blog_title() }] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-16 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-4xl font-normal tracking-tight sm:text-5xl",
								children: blog_title()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mx-auto mt-5 max-w-lg",
								children: blog_description()
							})]
						}),
						posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-center",
							children: blog_no_posts()
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, {
								href: `/blog/${post.slug}`,
								title: post.title,
								description: post.description,
								image: post.image,
								date: formatPostDate(post.createdAt, locale),
								authorName: post.authorName,
								authorImage: post.authorImage
							}, post.slug))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { BlogPage as component };
