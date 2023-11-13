import "./my-account.scss";
import TabSecure from "../components/Secure/TabSecure/TabSecure";
import { authConfig } from "../config/auth";
import { getServerSession } from "next-auth";

const MyAccount = async () => {
  const session = await getServerSession(authConfig);

  return (
    <>
      <div className="container">
        <h1>My Account</h1>

        {!session?.user ? <TabSecure /> : "nie"}
      </div>
    </>
  );
};

export default MyAccount;
