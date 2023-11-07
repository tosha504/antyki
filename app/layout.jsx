"use client";
import Header from "@/app/components/Header/Header";
import "./index.scss";
import { Providers } from "./components/providers/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="wrapper">
            <Header />
            {children}
            <footer>
              <div className="container">Footer</div>
            </footer>
            <ToastContainer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
