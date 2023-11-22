import { getServerSession } from "next-auth";
import { authConfig } from "../../config/auth";
import { getProfileData } from "@/store/api";
import LoggoutLink from "@/app/components/LoggoutLink";

export default async function Profile() {
  const session = await getServerSession(authConfig);
  const accessToken = session.user.accessToken;
  const customers = await getProfileData(accessToken);
  console.log(customers);
  return (
    <>
      <p>
        Witaj <b>{customers?.first_name}</b> (nie jesteś&nbsp;
        <b>{customers?.first_name}</b>?
        <LoggoutLink />)
      </p>
      <p>
        W ustawieniach swojego konta możesz przejrzeć swoje ostatnie zamówienia,
        zarządzać adresami płatności i dostawy oraz zmieniać hasło i szczegóły
        konta.
      </p>
    </>
  );
}
