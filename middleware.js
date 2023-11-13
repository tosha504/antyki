// export { default } from "next-auth/middleware";

export const config = { matcher: ["/profile", "/protected/:path*"] };

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    myAccount: "/shop",
  },
});
