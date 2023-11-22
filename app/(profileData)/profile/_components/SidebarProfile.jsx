import { signOut } from "next-auth/react";
import Link from "next/link";
const SidebarProfile = () => {
  return (
    <ul>
      <li>
        <Link href="/profile">Kokpit</Link>
      </li>
      <li>
        <Link href={`/profile/orders/`}>Zamówienia</Link>
      </li>
      <li>
        <Link href={`/profile/download/`}>Pliki do pobrania</Link>
      </li>
      <li>
        <Link href={`/profile/edit-address`}>Adresy</Link>
      </li>
      <li>
        <Link href={`/profile/edit-account`}>Szczegóły konta</Link>
      </li>
      <li>
        <Link href="/" onClick={() => signOut()}>
          Wyloguj się
        </Link>
      </li>
    </ul>
  );
};

export default SidebarProfile;
