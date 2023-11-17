"use server";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { authConfig } from "../config/auth";

export async function updateCustomerData(formData) {
  const session = await getServerSession(authConfig);
  const accessToken = session.user.accessToken;
  const schema = z.object({
    first_name: z.string().min(1),
  });
  const data = schema.parse({
    first_name: formData.firstName,
  });
  console.log(data);
  try {
    // Make the PUT request to update the customer's first name
    const res = await fetch(
      `https://fredommaster.pl/shop/wp-json/usercustomer/v1/current_user_data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      }
    );

    revalidatePath("/");

    const mes = await res.json();
    if (!res.ok) {
      return mes;
    }
    console.log(mes);
    return { message: "Zmieniono szczegóły konta." };
  } catch (e) {
    return { code: 500, message: "Problem techniczny" };
  }
}
