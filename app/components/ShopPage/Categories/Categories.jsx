import React from "react";
import Link from "next/link";
import CatNavLink from "./Cat-nav";
import "./Cat.scss";
const Categories = async ({ categoriesLis }) => {
  return (
    <>
      <h3>KATEGORIE PRODUKTÓW</h3>
      <ul className="category-nav">
        {categoriesLis.map((category) => {
          return (
            <li key={category.parent.term_id}>
              <CatNavLink categoryData={category} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Categories;
