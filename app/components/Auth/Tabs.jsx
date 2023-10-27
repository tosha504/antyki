"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import RegisterCustomer from "./Register";

export default function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Signin" value="1" />
            <Tab label="Register" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">Signin</TabPanel>
        <TabPanel value="2">
          <RegisterCustomer />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
