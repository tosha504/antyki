"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

const CustomLink = ({ linkData }) => {
  const segment = useSelectedLayoutSegments();
  const isActive = parseInt(linkData.term_id) === parseInt(segment[1]);
  return (
    <Link
      href={`/sklep/categories/${linkData.term_id}`}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {linkData.name}
    </Link>
  );
};

export default CustomLink;
