import Link from "next/link";
import Logo from "@/app/assets/img/antykwariat-zakladka-warszawa-logo.svg";
import User from "@/app/assets/img/user-ant.svg";
import Image from "next/image";
import "./Header.scss";
import CartLogo from "./CartLogo/CartLogo";
import { getServerSession } from "next-auth";
import { authConfig } from "@/app/config/auth";
import Nav from "./Nav/Nav";
export async function pages() {

  const getPosts = await fetch(
    `https://fredommaster.pl/shop/wp-json/custom/v1/pages/`,

  );
  const getPostsJ = await getPosts.json();

  return getPostsJ;
}




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
        <Nav />

        <div>
          {
            pagesWodpress.map(element =>
              <li key={element.id} >
                <Link href={`/${element.id}`}>{element.id}</Link>
              </li>

            )
          }
        </div>

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
