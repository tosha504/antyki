import { Suspense } from "react";
import "./../shop.scss";
import { categoriesListNew } from "@/store/api";
import PageTitle from "../components/PageTitle/PageTitle";
import Categories from "../components/Categories/Categories";

const ShopPageLayout = async ({ children }) => {
  const categoriesList = await categoriesListNew();
  return (
    <>
      <div className="container shop">
        <PageTitle />
        <div className="shop__filter">
          <Categories categoriesList={categoriesList} />
        </div>
        <div className="shop__products">{children}</div>
      </div>
    </>
  );
};

export default ShopPageLayout;
