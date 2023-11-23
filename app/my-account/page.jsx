import "./my-account.scss";
import TabSecure from "../components/Secure/TabSecure/TabSecure";

const MyAccount = async () => {
  return (
    <>
      <div className="container">
        <h1>My Account</h1>
        <TabSecure />
      </div>
    </>
  );
};

export default MyAccount;
