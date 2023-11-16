// import axios from "axios";

// export async function fetchAllCustomers() {
//   try {
//     // const response1 = await axios.get(
//     //   `${process.env.NEXTAUTH_URL}/wp-json/wc/v3/customers`,
//     //   {
//     //     params: {
//     //       consumer_key: process.env.NEXT_APP_CONSUMER_DATA_KEY,
//     //       consumer_secret: process.env.NEXT_APP_CONSUMER_DATA_SECRET,
//     //     },
//     //   }
//     // );
//     // const resp1data = response1.headers["x-wp-total"];
//     const url = `${process.env.WORDPRESS_BASE_URL}/wp-json/wc/v3/customers/93`;

//     const params = {
//       email: "test2@gmail.com",
//       consumer_key: process.env.NEXT_APP_CONSUMER_DATA_KEY,
//       consumer_secret: process.env.NEXT_APP_CONSUMER_DATA_SECRET,
//     };

//     const response = await axios.put(url, { params });

//     const customers = response;
//     console.log(process.env.NEXT_APP_CONSUMER_DATA_SECRET);
//     return customers;
//   } catch (error) {
//     // Handle errors here
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         data: null,
//       },
//     };
//   }
// }
