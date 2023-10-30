import RegisterCustomer from "../components/Auth/Register";
import LabTabs from "../components/Auth/Tabs";

const MyAccount = () => {
  return (
    <>
      <main>
        <div className="container">
          <h1>My Account</h1>
          {/* <LabTabs /> */}
          <RegisterCustomer />
        </div>
      </main>
    </>
  );
};

export default MyAccount;
