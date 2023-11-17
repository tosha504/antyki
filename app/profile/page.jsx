import { getServerSession } from "next-auth";
import { authConfig } from "../config/auth";
import axios from "axios";
import { revalidatePath } from "next/cache";
import UpdateFirsName from "../components/UpdateFirsName";
// Замените 'YOUR_WORDPRESS_API_ENDPOINT' на конечную точку API WordPress,
// и 'YOUR_AUTH_TOKEN' на ваш токен авторизации.

export async function getProfileData(authToken) {
  const wordpressAPIEndpoint = "https://fredommaster.pl/shop";
  try {
    const response = await fetch(
      `https://fredommaster.pl/shop/wp-json/customer/v1/user-data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    const mes = await response.json();
    if (!response.ok) {
      return mes;
    }
    return mes;
  } catch (error) {
    throw error;
  }
}

export default async function Profile() {
  const session = await getServerSession(authConfig);
  const accessToken = session.user.accessToken;
  const customers = await getProfileData(accessToken);
  // console.log(customers);
  return (
    <>
      {new Date().getTime()}
      <div className="container">
        Profile of
        {customers?.first_name + " / " + customers?.billing_email}
        <br />
        {/* leng {customers.data.data.first_name.length} {customers.data.data.id} */}
        <UpdateFirsName />
      </div>
    </>
  );
}
