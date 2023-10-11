"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function CurrentNavLink({ categoryData }) {
  const segment = useSelectedLayoutSegment();
  const isActive = categoryData.term_id === parseInt(segment);

  return (
    <Link
      href={`/shop/categories/${categoryData.term_id}`}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {categoryData.count > 0 && categoryData.name}
    </Link>
  );
}
