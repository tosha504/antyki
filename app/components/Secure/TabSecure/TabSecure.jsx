import Login from "../Login/Login";
import RegisterCustomer from "../Register/Register";
import "./TabSecure.scss";
import { Tabs } from "./TabComponents/Tabs";

const TabSecure = () => {
  const tabs = [
    { label: "Register", content: <RegisterCustomer /> },
    { label: "Login", content: <Login /> },
  ];
  return (
    <div className="auth-container">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabSecure;
