import Link from "next/link";
import Logo from "@/app/assets/img/antykwariat-zakladka-warszawa-logo.svg";
import Image from "next/image";
import "./Header.scss";
const Header = () => {
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
        </ul>

        <ul className="header__shop-elements">
          <li>Acc</li>
          <li>Shop cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
