"use client";
import Image from "next/image";
import arrow from "@/app/assets/img/arrow-right.svg";
import { useState } from "react";

const ToggleArrow = () => {
  return (
    <span className="toggle-arrow" onClick={(e) => setIsOpen(!isOpen)}>
      <Image src={arrow} width={15} height={15} alt="arrow" />
    </span>
  );
};

export default ToggleArrow;
