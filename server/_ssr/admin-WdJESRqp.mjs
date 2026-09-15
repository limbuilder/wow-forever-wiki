import { $ as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { Bi as admin_title, V as admin_description, li as admin_stats_roles, ui as admin_stats_total_users } from "./messages-DKBWZPg0.mjs";
import { _ as Shield, r as Users } from "../_libs/lucide-react.mjs";
import { r as apiGet } from "./api-client-ddg0Kx1A.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-CJS2GQq6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-WdJESRqp.js
var import_jsx_runtime = require_jsx_runtime();
function AdminPage() {
	const usersQuery = useQuery({
		queryKey: ["admin-users-total"],
		queryFn: () => apiGet("/api/admin/users")
	});
	const rolesQuery = useQuery({
		queryKey: ["admin-roles-total"],
		queryFn: () => apiGet("/api/admin/roles")
	});
	const stats = {
		users: usersQuery.data?.total ?? 0,
		roles: rolesQuery.data?.total ?? 0
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold",
			children: admin_title()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: admin_description()
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex flex-row items-center justify-between space-y-0 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-sm font-medium",
					children: admin_stats_total_users()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "text-muted-foreground size-4" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-2xl font-bold",
				children: stats.users
			}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex flex-row items-center justify-between space-y-0 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-sm font-medium",
					children: admin_stats_roles()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "text-muted-foreground size-4" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-2xl font-bold",
				children: stats.roles
			}) })] })]
		})]
	});
}
//#endregion
export { AdminPage as component };
