import { o as __toESM } from "../_runtime.mjs";
import { $ as require_jsx_runtime, et as require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Al as settings_profile_title, Cl as settings_profile_loading, Dl as settings_profile_save_failed, El as settings_profile_save, Ol as settings_profile_saved, Sl as settings_profile_email, Tl as settings_profile_profile, bl as settings_profile_avatar_hint, kl as settings_profile_saving, wl as settings_profile_name, xl as settings_profile_description, yl as settings_profile_avatar } from "./messages-DKBWZPg0.mjs";
import { t as Button$1 } from "./button-RkClB0x2.mjs";
import { i as apiPatch, r as apiGet } from "./api-client-ddg0Kx1A.mjs";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, t as Card } from "./card-CJS2GQq6.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as Label } from "./label-Dzpc0zKw.mjs";
import { t as Input$1 } from "./input-B6v4Jp25.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as TextField } from "./form-field-DX3nwIlh.mjs";
import { h as object, v as string } from "../_libs/zod.mjs";
import { t as useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { t as ImageUploader } from "./image-uploader-BSMgxL3y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-Az7R8VhK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profileSchema = object({ name: string().min(1) });
function SettingsForm({ name: initialName, email, image: initialImage }) {
	const [image, setImage] = (0, import_react.useState)(initialImage);
	const queryClient = useQueryClient();
	const saveMutation = useMutation({
		mutationFn: (values) => apiPatch("/api/user/profile", values),
		onSuccess: () => {
			toast.success(settings_profile_saved());
			queryClient.invalidateQueries({ queryKey: ["user-info"] });
		},
		onError: (err) => {
			toast.error(err?.message || settings_profile_save_failed());
		}
	});
	const form = useForm({
		defaultValues: { name: initialName },
		validators: { onSubmit: profileSchema },
		onSubmit: async ({ value }) => {
			await saveMutation.mutateAsync({
				name: value.name,
				image
			}).catch(() => {});
		}
	});
	function handleAvatarChange(items) {
		setImage(items.find((item) => item.status === "uploaded" && item.url)?.url || "");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			form.handleSubmit();
		},
		className: "space-y-6 p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold",
			children: settings_profile_title()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: settings_profile_description()
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: settings_profile_profile() }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-6 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: settings_profile_avatar() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUploader, {
							defaultPreviews: image ? [image] : [],
							onChange: handleAvatarChange,
							maxSizeMB: 2,
							emptyHint: settings_profile_avatar_hint()
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "name",
							children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								field,
								label: settings_profile_name(),
								required: true
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: settings_profile_email()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							id: "email",
							value: email,
							disabled: true,
							className: "opacity-60"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
				selector: (s) => s.isSubmitting,
				children: (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "submit",
					disabled: isSubmitting || saveMutation.isPending,
					children: isSubmitting || saveMutation.isPending ? settings_profile_saving() : settings_profile_save()
				})
			}) })
		] })]
	});
}
function SettingsPage() {
	const { data: user } = useQuery({
		queryKey: ["user-info"],
		queryFn: async () => {
			const data = await apiGet("/api/user/info");
			return {
				name: data.name || "",
				email: data.email || "",
				image: data.image || ""
			};
		}
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-muted-foreground p-6",
		children: settings_profile_loading()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsForm, {
		name: user.name,
		email: user.email,
		image: user.image
	});
}
//#endregion
export { SettingsPage as component };
