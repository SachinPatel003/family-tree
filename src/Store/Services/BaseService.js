// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// // import { updateAuthInfo } from "../Slices/AuthenticationSlice";
// import { getUserAuthInfo, setUserAuthInfo } from "../../utils/asyncStorage";
// import { showToats } from "../../utils/toast";
// import { BASE_URL } from "../../utils";

// const baseQuery = fetchBaseQuery({
//   baseUrl: BASE_URL,
//   prepareHeaders: async (headers) => {
//     const userInfo = await getUserAuthInfo();
//     if (userInfo) headers.set("Authorization", `jwt ${userInfo?.accessToken}`);
//     return headers;
//   },
// });

// const wrappedQuery = async (args, api, extraOptions) => {
//   try {
//     const result = await baseQuery(args, api, extraOptions);
//     if (result?.meta?.response?.status === 404) {
//       showToats({
//         type: "error",
//         text2: "404 Not Found.",
//       });
//     }
//     if (result?.error?.status === 400) {
//       showToats({
//         type: "error",
//         text2: result?.error?.data?.message,
//       });
//     }
//     if (result.error && result.error.status === 401) {
//       await setUserAuthInfo(null);
//       // api.dispatch(updateAuthInfo({}));
//     }
//     return result;
//   } catch (error) {
//     throw new Error("Something went wrong");
//   }
// };

// export const baseService = createApi({
//   reducerPath: "baseService",
//   baseQuery: wrappedQuery,
//   tagTypes: [],
//   endpoints: () => ({}),
// });
