import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "../assets/img/arrow-right.svg";

const Categories = async ({ categoriesLis, activeid }) => {
  console.log(categoriesLis);
  return (
    <>
      <h3>KATEGORIE PRODUKTÓW</h3>
      <ul>
        {categoriesLis.map((c) => {
          let v = "child";
          console.log(activeid, c);
          return (
            <li key={c.parent.term_id}>
              <Link
                href={`/shop/categories/${c.parent.term_id}`}
                // className={c.subcategories.length > 0 ? v : ""}
                className={activeid === c.parent.term_id ? "wertyui" : ""}
              >
                {c.parent.name}
                {/* {c.subcategories.length > 0 && (
                  <span className="toggle-arrow">
                    <Image src={arrow} width={15} height={15} alt="arrow" />
                  </span>
                )} */}
              </Link>
              {/* {c.subcategories &&
                c.subcategories.map((s) => {
                  return (
                    <p key={s.term_id} style={{ marginLeft: 20 + "px" }}>
                      <Link href={`/shop/categories/${s.term_id}`}>
                        {s.name}
                      </Link>
                    </p>
                  );
                })} */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Categories;
