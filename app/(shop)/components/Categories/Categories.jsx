import React from "react";
import Link from "next/link";
import CatNavLink from "./Cat-nav";
import "./Cat.scss";
const Categories = async ({ categoriesList }) => {
  return (
    <>
      <h3>KATEGORIE PRODUKTÓW</h3>
      <h3>{new Date().getTime()}</h3>
      <ul className="category-nav">
        {categoriesList.map((categoryLink) => {
          return (
            <li
              key={categoryLink.category.term_id}
              className={categoryLink.subcategories.length > 0 ? "arrow" : ""}
            >
              {categoryLink.category.count > 0 && (
                <CatNavLink categoryData={categoryLink} />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Categories;
