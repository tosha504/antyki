import Link from "next/link";
import Logo from "@/app/assets/img/antykwariat-zakladka-warszawa-logo.svg";
import User from "@/app/assets/img/user-ant.svg";
import Image from "next/image";
import "./Header.scss";
import CartLogo from "./CartLogo/CartLogo";
import { useSession, signOut, signIn } from "next-auth/react";

const Header = () => {
  const session = useSession();
  console.log(session);
  const loginData = {
    username: "test2@gmail.com",
    password: "q1w2e3",

    redirect: false,
  };
  return (
    <header className="header">
      <div className="container">
        <div>
          <Link href="/">
            <Image src={Logo} width={250} height={40} alt="Logo" />
          </Link>
        </div>
        <ul className="header__nav">
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/">Link1</Link>
          </li>
          <li>
            <Link href="/">Link3</Link>
          </li>
          <li>
            <Link href="/">Link2</Link>
          </li>
          <li>{session?.data && <Link href="/profile">Profile</Link>}</li>
        </ul>

        <ul className="header__shop-elements">
          {session.status !== "unauthenticated" ? (
            <>
              Signed in as {session?.data?.user?.name} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <>
              Not signed in <br />
              <button
                onClick={() =>
                  signIn("credentials", {
                    loginData,
                    callbackUrl: "http://localhost:3000/profile",
                  })
                }
              >
                Sign in
              </button>
            </>
          )}
          {/* <li> */}
          {/* <Link href="/login">
              <Image src={User} width={24} height={24} alt="User" />
            </Link> */}
          {/* </li> */}
          <li>
            <CartLogo />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
