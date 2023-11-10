import { Suspense } from "react";
import Loading from "../loading";
import "./my-account.scss";
import TabSecure from "../components/Secure/TabSecure/TabSecure";

const MyAccount = () => {
  return (
    <>
      <div className="container">
        <Suspense fallback={<Loading />}>
          <h1>My Account</h1>
          <TabSecure />
        </Suspense>
      </div>
    </>
  );
};

export default MyAccount;
