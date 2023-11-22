"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
const LoggoutLink = () => {
  return (
    <Link href="/" onClick={() => signOut()}>
      Wyloguj się
    </Link>
  );
};

export default LoggoutLink;
