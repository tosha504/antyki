"use client";
import { useState } from "react";
// import handler from "../api/login";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// async function requestLogin(username, password) {
//   try {
//     const response = await axios.post(
//       "https://fredommaster.pl/shop/wp-json/jwt-auth/v1/token",
//       {
//         username,
//         password,
//       }
//     );
//     if (response.data.token) {
//       return response.status(200).json({ token: response.data.token });
//     } else {
//       return response.status(401).json({ error: "Authentication failed" });
//     }
//   } catch (error) {
//     return { error: "Internal server error" };
//   }
// }

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlSubmit = async (event) => {
    event.preventDefault();
    const loginData = {
      username: username,
      password: password,

      callbackUrl: "/profile",
      redirect: false,
    };

    console.log(loginData);
    const login = await signIn("credentials", loginData);

    if (login.ok) {
      alert("Successfully Logged in! Redirecting...");
      router.push("/profile");
    } else {
      alert("Login failed.");
      console.log(login);
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await requestLogin(username, password);

  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //     // Handle network or server errors.
  //   }
  // };

  return (
    <>
      <Box
        onSubmit={handlSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {new Date().getTime()}
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue=""
          placeholder="Email"
          onChange={(e) => setUsername(e.target.value)}
          size="small"
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          size="small"
        />
        <Button type="submit" size="large" variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </>
  );
}

export default Login;
