
import Header from "@/app/components/Header/Header";
import "./index.scss";
import { Providers } from "./components/providers/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <Suspense fallback={<Loading />}>
            <div className="wrapper">
              <Header />
              <main>{children}</main>
              <footer>
                <div className="container">Footer</div>
              </footer>
            </div>
          </Suspense>
          <ToastContainer />
        </body>
      </Providers>
    </html>
  );
}
