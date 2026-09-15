import { r as apiGet } from "./api-client-ddg0Kx1A.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-public-config-CH8e7YtM.js
function usePublicConfig() {
	return useQuery({
		queryKey: ["public-config"],
		queryFn: () => apiGet("/api/config/public", { cache: "no-store" }),
		staleTime: 0
	});
}
//#endregion
export { usePublicConfig as t };
