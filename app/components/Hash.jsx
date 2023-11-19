"use client";
import React, { useEffect, useState } from "react";
import generateHash from "random-hash";
import axios from "axios";
import { useSession } from "next-auth/react";

const postData = async () => {
  const hash = generateHash();
  // console.log(hash);
  try {
    const data = {
      key: "value",
      foo: "bar",
      customHash: hash,
    };

    const response = await axios.post(
      "https://fredommaster.pl/shop/wp-json/create-post/v1/post-data",
      data
    );

    if (response.status === 200) {
      console.log("Data posted and saved:", response.data);
    } else {
      console.error("Error posting data:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const Hash = () => {
  // postData();
  // useEffect(() => {
  //   // Combine user and browser identifiers
  //   const dataToHash = browserId;

  //   // Generate a unique SHA-256 hash for this user and browser
  //   const uniqueHash = SHA256(dataToHash).toString();

  //   setHash(uniqueHash);
  // }, []);

  return <div>{1}</div>;
};

export default Hash;
