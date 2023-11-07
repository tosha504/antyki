import RegisterCustomer from "../components/Auth/Register";

const MyAccount = () => {
  return (
    <>
      <main>
        <div className="container">
          <h1>My Account</h1>
          <RegisterCustomer />
        </div>
      </main>
    </>
  );
};

export default MyAccount;
