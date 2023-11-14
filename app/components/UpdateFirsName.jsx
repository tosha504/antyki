"use client";
import { useState } from "react";
import { updateCustomerData } from "../actions/update-customer-data";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { experimental_useFormState as useFormState } from "react-dom";

const initialState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  );
}

export default function UpdateFirsName() {
  const [state, setUpdateUserWithId] = useFormState(
    updateCustomerData,
    initialState
  );
  // console.log(state);
  return (
    <div>
      {/* <button onClick={handleUpdate}>Update first name</button> */}
      <form action={setUpdateUserWithId}>
        <input type="text" name="first_name" required />
        <SubmitButton />
      </form>
    </div>
  );
}
