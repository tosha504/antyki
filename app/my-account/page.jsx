import { Suspense } from "react";
import RegisterCustomer from "../components/Secure/Register/Register";
import Loading from "../loading";
import Login from "../components/Secure/Login/Login";

const MyAccount = () => {
  return (
    <>
      <div className="container">
        <Suspense fallback={<Loading />}>
          <h1>My Account</h1>
          <RegisterCustomer />
          <Login />
        </Suspense>
      </div>
    </>
  );
};

export default MyAccount;
