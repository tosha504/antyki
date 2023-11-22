import { authConfig } from "@/app/config/auth";
import { getServerSession } from "next-auth";

export async function orderData(authToken) {
  const getOrdersWoo = await fetch(
    `https://fredommaster.pl/shop/wp-json/user-order/v1/current-order`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  const getOrders = await getOrdersWoo.json();

  return getOrders;
}

const orders = async () => {
  const session = await getServerSession(authConfig);
  const accessToken = session.user.accessToken;
  const ordersData = await orderData(accessToken);
  console.log(ordersData);
  return <div>download</div>;
};

export default orders;
