import { signIn } from "next-auth/react";
import React, { useState } from "react";

const RegisterCustomer = () => {
  const [customerData, setCustomerData] = useState({
    username: "Last for this daty",
    email: "lasr@gmail.com",
    password: "q13w2e3",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(customerData);
    try {
      // Replace with your WooCommerce API endpoint and valid consumer key & secret
      const apiUrl = "https://fredommaster.pl/shop/wp-json/wc/v3/customers";
      const consumerKey = "ck_287f3f3155ad6df9b741abce1fcb830a1e2a6391";
      const consumerSecret = "cs_2d6cec8fe27ee3cdacb7e843eabe2e14ec68c496";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(
            `${consumerKey}:${consumerSecret}`
          ).toString()}`,
        },
        body: JSON.stringify(customerData),
      });
      console.log(response.status, response.statusText);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("Customer registered successfully:", data);
        const loginData = {
          username: customerData.username,
          password: customerData.password,
          callbackUrl: "/profile",
          redirect: true,
        };
        await signIn("credentials", loginData);
      } else {
        console.error("Error registering customer:", response.statusText);
      }
    } catch (error) {
      console.error("Error registering customer:", error);
    }
  };

  return (
    <div>
      <h2>Register Customer</h2>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="username" />
        <input type="email" name="email" />
        <input type="password" name="password" /> */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterCustomer;
