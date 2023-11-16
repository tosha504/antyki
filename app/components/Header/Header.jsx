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
        </ul>

        <ul className="header__shop-elements">
          {session.status !== "unauthenticated" ? (
            <>
              {session?.data?.user?.name} <br />
              <button
                className="user"
                onClick={() => signOut({ callbackUrl: "/" })}
              ></button>
              <Link href="/my-account">
                <Image src={User} width={24} height={24} alt="User" />
              </Link>
            </>
          ) : (
            <>
              <Link href="/my-account">
                <Image src={User} width={24} height={24} alt="User" />
              </Link>
            </>
          )}
          <li>
            <CartLogo />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
