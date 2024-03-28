import { SIDENAV_ITEMS } from "./SIDEBAR_CONSTANTS";

// Without a defined matcher, this one line applies next-auth 
// to the entire project
export { default } from "next-auth/middleware"

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/Dashboard", "/Records", "/Visits", "/Reports", "/Settings", "/Account", "/Support"] }
// export const config = {
//     matcher: ["/extra", "/dashboard", ...SIDENAV_ITEMS.map(item => item.path)]
// };