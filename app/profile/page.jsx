import { getServerSession } from "next-auth";
import { authConfig } from "../config/auth";
import { fetchAllCustomers } from "../api/customers/customers";
import axios from "axios";

// Замените 'YOUR_WORDPRESS_API_ENDPOINT' на конечную точку API WordPress,
// и 'YOUR_AUTH_TOKEN' на ваш токен авторизации.
const wordpressAPIEndpoint = "https://fredommaster.pl/shop";
const authToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ZyZWRvbW1hc3Rlci5wbC9zaG9wIiwiaWF0IjoxNjk4MjIyMjEwLCJuYmYiOjE2OTgyMjIyMTAsImV4cCI6MTY5ODgyNzAxMCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiOTMifX19.FmrEhPG9fjLzbdMpUjNbiFfVRfOEDRFS8uRU5TMGCtk";

export async function getProfileData() {
  try {
    const response = await axios.get(`${wordpressAPIEndpoint}/wp/v2/users/me`, {
      headers: {
        Authorization: `Bearer ${authToken}`, // Используйте нужный формат заголовка авторизации
      },
    });

    if (response.status === 200) {
      // Данные профиля доступны в response.data
      return response;
    } else {
      throw new Error("Не удалось получить данные профиля пользователя.");
    }
  } catch (error) {
    throw error;
  }
}

export default async function Profile() {
  const session = await getServerSession(authConfig);
  const customers = await getProfileData();
  console.log(session);
  // console.log(customers);

  return (
    <>
      <main>
        <div className="container">Profile of {session?.user?.name}</div>
      </main>
      ;
    </>
  );
}
