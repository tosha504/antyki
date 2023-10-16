"use client";
import Image from "next/image";
import arrow from "@/app/assets/img/arrow-right.svg";
import CustomLink from "./Link";
import { useState } from "react";

export default function CatNavLink({ categoryData }) {
  const [isOpenList, setIsOpenList] = useState([]);
  function handleClick(id) {
    if (isOpenList.includes(id)) {
      setIsOpenList(isOpenList.filter((item) => item !== id));
    } else {
      setIsOpenList([...isOpenList, id]);
    }
  }
  return (
    <>
      <CustomLink linkData={categoryData.category} />
      {categoryData.subcategories.length > 0 && (
        <span
          className={`toggle-arrow
            ${
              isOpenList.includes(categoryData.subcategories.term_id)
                ? "active"
                : ""
            }`}
          onClick={() => handleClick(categoryData.subcategories.term_id)}
        >
          <Image src={arrow} width={15} height={15} alt="arrow" />
        </span>
      )}
      {categoryData.subcategories && (
        <ul
          className={`sub-menu ${
            isOpenList.includes(categoryData.subcategories.term_id)
              ? " active"
              : ""
          }`}
        >
          {categoryData.subcategories.map((s) => (
            <li
              key={s.category.term_id}
              style={{ marginLeft: "20px" }}
              className={s.subcategories.length > 0 ? "arrow" : ""}
            >
              <CustomLink linkData={s.category} />
              {s.subcategories.length > 0 && (
                <span
                  className="toggle-arrow"
                  onClick={() => handleClick(s.category.term_id)}
                >
                  <Image src={arrow} width={15} height={15} alt="arrow" />
                </span>
              )}

              {s.subcategories && (
                <ul
                  style={{
                    display: isOpenList.includes(s.category.term_id)
                      ? "block"
                      : "none",
                  }}
                  className={
                    isOpenList.includes(categoryData.subcategories.term_id)
                      ? "active"
                      : ""
                  }
                >
                  {s.subcategories.map((sub) => (
                    <li
                      key={sub.category.term_id}
                      style={{ marginLeft: "20px" }}
                      className={sub.subcategories.length > 0 ? "arrow" : ""}
                    >
                      <CustomLink linkData={sub.category} />
                      {sub.subcategories[0]?.subcategories.length > 0 && (
                        <span
                          className="toggle-arrow"
                          onClick={() => handleClick(sub.subcategories.term_id)}
                        >
                          <Image
                            src={arrow}
                            width={15}
                            height={15}
                            alt="arrow"
                          />
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
