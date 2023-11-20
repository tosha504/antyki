"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

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


    const login = await signIn("credentials", loginData);

    if (login.ok) {
      toast.success(`Witaj ${loginData.username}!`);
      router.push("/profile");
    } else {
      toast.error("Błąd uwierzytelnienia.");
    }
  };

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
