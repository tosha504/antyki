"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import arrow from "@/app/assets/img/arrow-right.svg";

// This *client* component will be imported into a blog layout
export default function CatNavLink({ categoryData }) {
  const segment = useSelectedLayoutSegments();
  const isActive =
    parseInt(categoryData.parent.term_id) === parseInt(segment[1]);
  console.log(categoryData);
  return (
    <>
      <Link
        href={`/categories/${categoryData.parent.term_id}`}
        // Change style depending on whether the link is active
        style={{ fontWeight: isActive ? "bold" : "normal" }}
        className={categoryData.subcategories.length > 0 ? "arrow" : ""}
      ></Link>
      {categoryData.parent.name}
      {categoryData.subcategories.length > 0 && (
        <span className="toggle-arrow">
          <Image src={arrow} width={15} height={15} alt="arrow" />
        </span>
      )}

      {categoryData.subcategories && categoryData.subcategories.length > 0 && (
        <ul>
          {categoryData.subcategories.map((s) => (
            <li key={s.term_id} style={{ marginLeft: "20px" }}>
              <Link href={`/categories/${s.term_id}`}>{s.name}</Link>
            </li>
          ))}
        </ul>
      )}

      {/* {categoryData.subcategories &&
        categoryData.subcategories.map((s) => {
          return (
            <p key={s.term_id} style={{ marginLeft: 20 + "px" }}>
              <Link href={`/categories/${s.term_id}`}>{s.name}</Link>
            </p>
          );
        })} */}
    </>
  );
}
