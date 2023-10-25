// import axios from "axios";

// export default async function handler(req, res) {
//   console.log(req, res);
//   if (req.method !== "POST") {
//     return res.status(405).end();
//   }
//   try {
//     const { username, password } = req.body;

//     // Make a POST request to the WooCommerce API to authenticate the user.
//     const response = await axios.post(
//       "https://fredommaster.pl/shop/wp-json/jwt-auth/v1/token",
//       {
//         username,
//         password,
//       }
//     );

//     console.log(response);

//     if (response.data.token) {
//       // Authentication successful, send a success response with the token.
//       return res.status(200).json({ token: response.data.token });
//     } else {
//       // Authentication failed, send an error response.
//       return res.status(401).json({ error: "Authentication failed" });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }

// ("use client");
// import { useState } from "react";
// // import handler from "../api/login";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";

// export default async function requestLogin(username, password) {
//   try {
//     const response = await axios.post(
//       "https://fredommaster.pl/shop/wp-json/jwt-auth/v1/token",
//       {
//         username,
//         password,
//       }
//     );
//     console.log(response);
//     if (response.data.token) {
//       return response.status(200).json({ token: response.data.token });
//     } else {
//       return res.status(401).json({ error: "Authentication failed" });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }
// // function Login() {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = async () => {
// //     try {
// //       const response = await requestLogin(username, password);

// //       console.log(response);
// //     } catch (error) {
// //       console.log(error);
// //       // Handle network or server errors.
// //     }
// //   };

// //   return (
// //     <main>
// //       <Box
// //         component="form"
// //         sx={{
// //           "& .MuiTextField-root": { m: 1, width: "25ch" },
// //         }}
// //         noValidate
// //         autoComplete="off"
// //       >
// //         <TextField
// //           required
// //           id="outlined-required"
// //           label="Required"
// //           defaultValue=""
// //           placeholder="Email"
// //           onChange={(e) => setUsername(e.target.value)}
// //           size="small"
// //         />

// //         <TextField
// //           id="outlined-password-input"
// //           label="Password"
// //           type="password"
// //           autoComplete="current-password"
// //           onChange={(e) => setPassword(e.target.value)}
// //           size="small"
// //         />
// //         <Button
// //           onClick={handleLogin}
// //           size="large"
// //           variant="contained"
// //           color="primary"
// //         >
// //           Login
// //         </Button>
// //       </Box>
// //     </main>
// //   );
// // }

// // export default Login;
