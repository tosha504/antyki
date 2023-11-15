"use server";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { authConfig } from "../config/auth";

const params = {
  consumer_key: process.env.NEXT_APP_CONSUMER_DATA_KEY,
  consumer_secret: "cs_2d6cec8fe27ee3cdacb7e843eabe2e14ec68c496",
};
const queryString = new URLSearchParams(params).toString();
export async function updateCustomerData(id, formData) {
  const session = await getServerSession(authConfig);
  const accessToken = session.user.accessToken;
  const schema = z.object({
    first_name: z.string().min(1),
  });
  const data = schema.parse({
    first_name: formData.get("first_name"),
  });
  console.log(accessToken);
  try {
    // Make the PUT request to update the customer's first name
    await fetch(
      `https://fredommaster.pl/shop/wp-json/wc/v3/customers/93/?${queryString}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify(data),
      }
    );
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error("Failed to update customer first name");
    //   }
    //   return response.json();
    // })
    // .then(() => {
    //   console.log("Customer first name updated successfully");
    // });
    // console.log(data.first_name);

    revalidatePath("/");
    return { message: `Updated  ${data}` };
  } catch (e) {
    return { message: "Failed to create todo" };
  }
}
