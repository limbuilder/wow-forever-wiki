import { o as __toESM } from "../_runtime.mjs";
import { $ as require_jsx_runtime, et as require_react } from "../_libs/@base-ui/react+[...].mjs";
import { u as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as envConfigs } from "./schema-_Dk5pXhf.mjs";
import { Ao as common_support_cancel, Bo as common_support_success, Fo as common_support_required, Go as common_support_track_hint_prefix, Ho as common_support_title_label, Io as common_support_sign_in, Jc as settings_nav_credits, Jo as common_systems_settings, Kc as settings_nav_apikeys, Lo as common_support_sign_in_notice, Mo as common_support_content_placeholder, No as common_support_description, Po as common_support_open_label, Qc as settings_nav_tickets, Ro as common_support_submit, Uo as common_support_title_placeholder, Vo as common_support_title, Wo as common_support_track_hint_link, Xc as settings_nav_payments, Yc as settings_nav_overview, Zc as settings_nav_profile, jo as common_support_content_label, ko as common_support_attachments_label, qc as settings_nav_billing, qo as common_systems_home, zo as common_support_submitting } from "./messages-DKBWZPg0.mjs";
import { t as Link$1 } from "./navigation-D5t9xqBf.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { $ as House, G as LayoutDashboard, W as LifeBuoy, ht as Coins, i as User, n as X, pt as CreditCard, q as Key, w as Receipt } from "../_libs/lucide-react.mjs";
import { n as buttonVariants, t as Button$1 } from "./button-RkClB0x2.mjs";
import { a as apiPost } from "./api-client-ddg0Kx1A.mjs";
import { t as Label } from "./label-Dzpc0zKw.mjs";
import { t as Input$1 } from "./input-B6v4Jp25.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog$1 } from "./dialog-D6wavpEs.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { v as useSession } from "./client-CzZaD_wx.mjs";
import { t as currentPathWithQuery } from "./redirect-iO2kTEiP.mjs";
import { t as ImageUploader } from "./image-uploader-BSMgxL3y.mjs";
import { t as AppLayout } from "./app-layout-Dpf8Ut-B.mjs";
import { t as Textarea } from "./textarea-kLCUgc24.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-GlZxCBws.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Floating support button (bottom-right) that opens a quick ticket form.
* Drop into any page or layout: <SupportWidget />
*
* Requires login — unauthenticated users get a sign-in prompt instead.
*/
function SupportWidget() {
	const { data: session, isPending } = useSession();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)("");
	const [content, setContent] = (0, import_react.useState)("");
	const [attachments, setAttachments] = (0, import_react.useState)([]);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [uploaderKey, setUploaderKey] = (0, import_react.useState)(0);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	async function submit() {
		if (!title.trim() || !content.trim()) {
			toast.error(common_support_required());
			return;
		}
		setSubmitting(true);
		try {
			await apiPost("/api/tickets", {
				title,
				content,
				attachments
			});
			toast.success(common_support_success());
			setOpen(false);
			setTitle("");
			setContent("");
			setAttachments([]);
			setUploaderKey((k) => k + 1);
		} catch (e) {
			toast.error(e?.message || "Failed");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		"aria-label": common_support_open_label(),
		onClick: () => setOpen(true),
		className: cn("fixed right-6 bottom-6 z-50 size-12 rounded-full", "bg-primary text-primary-foreground shadow-lg", "flex items-center justify-center", "transition-all hover:scale-105 hover:shadow-xl"),
		children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "size-5" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: common_support_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: common_support_description() })] }), !isPending && !session?.user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4 py-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: common_support_sign_in_notice()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
				href: `/sign-in?callbackUrl=${encodeURIComponent(currentPathWithQuery("/"))}`,
				className: cn(buttonVariants()),
				children: common_support_sign_in()
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				submit();
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "support-title",
							children: common_support_title_label()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							id: "support-title",
							value: title,
							maxLength: 200,
							onChange: (e) => setTitle(e.target.value),
							placeholder: common_support_title_placeholder()
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "support-content",
							children: common_support_content_label()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "support-content",
							value: content,
							maxLength: 5e3,
							rows: 5,
							onChange: (e) => setContent(e.target.value),
							placeholder: common_support_content_placeholder()
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: common_support_attachments_label() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUploader, {
							allowMultiple: true,
							maxImages: 9,
							onChange: (items) => {
								setAttachments(items.filter((i) => i.status === "uploaded" && i.url).map((i) => i.url));
								setUploading(items.some((i) => i.status === "uploading"));
							}
						}, uploaderKey)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground text-xs",
						children: [
							common_support_track_hint_prefix(),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								href: "/settings/tickets",
								className: "hover:text-foreground underline",
								children: common_support_track_hint_link()
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				type: "button",
				variant: "outline",
				onClick: () => setOpen(false),
				children: common_support_cancel()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				type: "submit",
				disabled: submitting || uploading,
				children: submitting ? common_support_submitting() : common_support_submit()
			})] })]
		})] })
	})] });
}
function SettingsLayout() {
	const group = common_systems_settings();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, {
		navItems: [
			{
				href: "/settings",
				label: settings_nav_overview(),
				icon: LayoutDashboard,
				group
			},
			{
				href: "/settings/billing",
				label: settings_nav_billing(),
				icon: CreditCard,
				group
			},
			{
				href: "/settings/payments",
				label: settings_nav_payments(),
				icon: Receipt,
				group
			},
			{
				href: "/settings/credits",
				label: settings_nav_credits(),
				icon: Coins,
				group
			},
			{
				href: "/settings/apikeys",
				label: settings_nav_apikeys(),
				icon: Key,
				group
			},
			{
				href: "/settings/tickets",
				label: settings_nav_tickets(),
				icon: LifeBuoy,
				group
			}
		],
		footerNavItems: [{
			href: "/settings/profile",
			label: settings_nav_profile(),
			icon: User
		}, {
			href: "/",
			label: common_systems_home(),
			icon: House,
			newTab: true
		}],
		brand: envConfigs.app_name,
		brandHref: "/settings",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportWidget, {})]
	});
}
//#endregion
export { SettingsLayout as component };
