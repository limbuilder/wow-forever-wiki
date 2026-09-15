import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { u as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as envConfigs } from "./schema-_Dk5pXhf.mjs";
import { At as admin_nav_subscriptions, Ct as admin_nav_overview, Dt as admin_nav_rbac, Et as admin_nav_posts, Ko as common_systems_admin, Mt as admin_nav_users, Ot as admin_nav_roles, St as admin_nav_invite_codes, Tt as admin_nav_permissions, bt as admin_nav_content, jt as admin_nav_tickets, kt as admin_nav_settings, qo as common_systems_home, vt as admin_nav_billing, wt as admin_nav_payments, xt as admin_nav_credits, yt as admin_nav_categories } from "./messages-DKBWZPg0.mjs";
import { $ as House, G as LayoutDashboard, _ as Shield, pt as CreditCard, st as FolderOpen, v as Settings } from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./app-layout-Dpf8Ut-B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-CthtGtTy.js
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const group = common_systems_admin();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLayout, {
		navItems: [
			{
				href: "/admin",
				label: admin_nav_overview(),
				icon: LayoutDashboard,
				group
			},
			{
				href: "/admin/users",
				label: admin_nav_rbac(),
				icon: Shield,
				group,
				items: [
					{
						href: "/admin/users",
						label: admin_nav_users()
					},
					{
						href: "/admin/invite-codes",
						label: admin_nav_invite_codes()
					},
					{
						href: "/admin/roles",
						label: admin_nav_roles()
					},
					{
						href: "/admin/permissions",
						label: admin_nav_permissions()
					}
				]
			},
			{
				href: "/admin/payments",
				label: admin_nav_billing(),
				icon: CreditCard,
				group,
				items: [
					{
						href: "/admin/payments",
						label: admin_nav_payments()
					},
					{
						href: "/admin/subscriptions",
						label: admin_nav_subscriptions()
					},
					{
						href: "/admin/credits",
						label: admin_nav_credits()
					}
				]
			},
			{
				href: "/admin/categories",
				label: admin_nav_content(),
				icon: FolderOpen,
				group,
				items: [
					{
						href: "/admin/categories",
						label: admin_nav_categories()
					},
					{
						href: "/admin/posts",
						label: admin_nav_posts()
					},
					{
						href: "/admin/tickets",
						label: admin_nav_tickets()
					}
				]
			}
		],
		footerNavItems: [{
			href: "/admin/settings",
			label: admin_nav_settings(),
			icon: Settings
		}, {
			href: "/",
			label: common_systems_home(),
			icon: House,
			newTab: true
		}],
		brand: envConfigs.app_name,
		brandHref: "/admin",
		profileHref: "/settings/profile",
		requirePermission: "admin.*",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
//#endregion
export { AdminLayout as component };
