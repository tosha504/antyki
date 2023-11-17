"use client";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { authConfig } from "../config/auth";
import { useSession } from "next-auth/react";
import { updateCustomerData } from "../actions/update-customer-data";

export default function UpdateFirsName({ userId }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const session = useSession();
  const accessToken = session?.data?.user?.accessToken;
  // console.log(accessToken);
  const onSubmit = async (data) => {
    const res = await updateCustomerData(data);
    // const mes = await res.json();
    if (!res.ok) {
      console.log(res);
    }

    console.log(res);

    // return { message: "Zmieniono szczegóły konta." };
    // const updateData = await updateCustomerData(userId, data);
    // if (updateData.code) {
    //   toast.error(updateData.message);
    // } else {
    //   toast.success(updateData.message);
    // }
  };

  return (
    <div>
      {/* <button onClick={handleUpdate}>Update first name</button> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            required: "First name is required",
            minLength: { value: 2, message: "more chart" },
          })}
          type="text"
          required
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <button disabled={isSubmitting} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
