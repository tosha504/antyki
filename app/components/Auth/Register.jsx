"use client";
import { signIn } from "next-auth/react";
import React from "react";
import "./Register.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import * as Yup from "yup";
const RegisterCustomer = () => {
  // const [customerData, setCustomerData] = useState({
  //   username: "Last for this daty",
  //   email: "lasr@gmail.com",
  //   password: "q13w2e3",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCustomerData({ ...customerData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(customerData);
  //   try {
  //     // Replace with your WooCommerce API endpoint and valid consumer key & secret
  //     const apiUrl = "https://fredommaster.pl/shop/wp-json/wc/v3/customers";
  //     const consumerKey = "ck_287f3f3155ad6df9b741abce1fcb830a1e2a6391";
  //     const consumerSecret = "cs_2d6cec8fe27ee3cdacb7e843eabe2e14ec68c496";
  //     const response = await fetch(apiUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Basic ${btoa(
  //           `${consumerKey}:${consumerSecret}`
  //         ).toString()}`,
  //       },
  //       body: JSON.stringify(customerData),
  //     });
  //     console.log(response.status, response.statusText);
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       console.log("Customer registered successfully:", data);
  //       const loginData = {
  //         username: customerData.username,
  //         password: customerData.password,
  //         callbackUrl: "/profile",
  //         redirect: true,
  //       };
  //       await signIn("credentials", loginData);
  //     } else {
  //       console.error("Error registering customer:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error registering customer:", error);
  //   }
  // };

  // const SignupSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(70, "Too Long!")
  //     .required("Required"),
  //   email: Yup.string().email("Invalid email").required("Required"),
  // });

  const userSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Required"),
  });
  return (
    <>
      <h2>Register Customer</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={userSchema}
      >
        {({ handleChange, handleSubmit, errors, touched }) => (
          <form className="form">
            <TextField
              label="email"
              variant="outlined"
              type="email"
              name="email"
              size="small"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              // color={errors.email && touched.email ? "red" : ""}
              onChange={handleChange("email")}
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <TextField
              size="small"
              label="password"
              type="text"
              name="password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              onChange={handleChange("password")}
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              size="small"
            >
              Register
            </Button>
          </form>
        )}
      </Formik>

      {/* <form onSubmit={handleSubmit}></form> */}
      {/* <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <ErrorMessage name="name" />
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <ErrorMessage name="email" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik> */}
    </>
  );
};

export default RegisterCustomer;
