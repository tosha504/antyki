'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Nav = () => {
  const currentRoute = usePathname();
  console.log(currentRoute);

  const links = [
    {
      'pathname': '/sklep',
      'name': 'Sklep',
    },
    {
      'pathname': '/',
      'name': 'Home',
    },
  ]

  return (
    <nav>
      <ul className="header__nav">
        {links.map(linkData =>
          <li key={linkData.name}>
            <Link className={currentRoute === linkData.pathname ? "acitve" : ""} href={linkData.pathname}>{linkData.name}</Link>
          </li>

        )}
      </ul>
    </nav>
  )
}

export default Nav