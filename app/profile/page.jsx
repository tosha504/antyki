import { getServerSession } from "next-auth";
import { authConfig } from "../config/auth";
import axios from "axios";
import UpdateFirsName from "../components/UpdateFirsName";
// Замените 'YOUR_WORDPRESS_API_ENDPOINT' на конечную точку API WordPress,
// и 'YOUR_AUTH_TOKEN' на ваш токен авторизации.

export async function getProfileData(authToken) {
  const wordpressAPIEndpoint = "https://fredommaster.pl/shop";
  try {
    const response = await axios.get(
      `${wordpressAPIEndpoint}/wp-json/usercustomer/v1/current_user_data`,

      {
        next: { revalidate: 0 },
        headers: {
          Authorization: `Bearer ${authToken}`, // Используйте нужный формат заголовка авторизации
        },
      }
    );

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
  const accessToken = session.user.accessToken;
  // console.log(session.user.accessToken);
  const customers = await getProfileData(accessToken);
  console.log(customers);

  // console.log(accessToken);
  return (
    <>
      <div className="container">
        Profile of
        {customers?.data.data.first_name + " / " + customers.data.data.email}
        <br />
        leng {customers.data.data.first_name.length} {customers.data.data.id}
        <UpdateFirsName />
      </div>
    </>
  );
}
