"use client";
import "./Register.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

const RegisterCustomer = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data.message) {
        const text = (
          <p
            dangerouslySetInnerHTML={{
              __html: data.message.replace("#", "/shop"),
            }}
          ></p>
        );
        toast.error(text);
      }
      console.log(values);
      if (!data.message) {
        const loginData = {
          username: values.email,
          password: values.password,

          callbackUrl: "/profile",
          redirect: false,
        };

        console.log(loginData);
        const login = await signIn("credentials", loginData);
        if (login.ok) {
          router.push("/profile");
          toast.success("URRRRAAAA");
        } else {
          alert("Login failed.");
          console.log(login);
        }
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={formik.touched.email && formik.errors.email ? "error" : ""}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : null}
      </div>
      <div>
        <input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className={
            formik.touched.password && formik.errors.password ? "error" : ""
          }
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="error">{formik.errors.password}</p>
        ) : null}
      </div>
      <Button myClass={"primary"} title={"Submit"} />
    </form>
  );
};

export default RegisterCustomer;
