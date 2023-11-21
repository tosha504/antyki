import Link from "next/link";
import Logo from "@/app/assets/img/antykwariat-zakladka-warszawa-logo.svg";
import User from "@/app/assets/img/user-ant.svg";
import Image from "next/image";
import "./Header.scss";
import CartLogo from "./CartLogo/CartLogo";
import { getServerSession } from "next-auth";
import { authConfig } from "@/app/config/auth";
import Nav from "./Nav/Nav";
import { pages } from "@/store/api";
const Header = async () => {
  const session = await getServerSession(authConfig);
  const pagesWodpress = await pages();

  return (
    <header className="header">
      <div className="container">
        <div>
          <Link href="/">
            <Image src={Logo} width={250} height={40} alt="Logo" />
          </Link>
        </div>
        <Nav propsPagesWodpress={pagesWodpress} />

        <ul className="header__shop-elements">
          {session !== null ? (
            <>
              {session?.data?.user?.name} <br />
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
