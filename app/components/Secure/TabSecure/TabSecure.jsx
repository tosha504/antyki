"use client";

import React, { useRef, useState } from "react";
import Login from "../Login/Login";
import RegisterCustomer from "../Register/Register";
import "./TabSecure.scss";

const TabButton = ({ label, isActive, onClick }) => (
  <div className={`tab-button ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

const TabContent = React.forwardRef(({ children, isActive }, ref) => (
  <div className={`tab-content ${isActive ? "active" : "hidden"}`} ref={ref}>
    {children}
  </div>
));

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef(
    Array(tabs.length)
      .fill(0)
      .map(() => React.createRef())
  );

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            label={tab.label}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="tab-contents">
        {tabs.map((tab, index) => (
          <TabContent
            key={index}
            isActive={activeTab === index}
            ref={tabRefs.current[index]}
          >
            {tab.content}
          </TabContent>
        ))}
      </div>
    </>
  );
};

const TabSecure = () => {
  const tabs = [
    { label: "Register", content: <RegisterCustomer /> },
    { label: "Login", content: <Login /> },
  ];
  return (
    <>
      <div className="auth-container">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default TabSecure;
