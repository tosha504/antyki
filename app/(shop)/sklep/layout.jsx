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
          <Suspense fallback={"custom loading ccategories"}>
            <Categories categoriesList={categoriesList} />
          </Suspense>
        </div>
        <Suspense fallback={<h2>"custom loading for chIldren"</h2>}>
          <div className="shop__products">{children}</div>
        </Suspense>
      </div>
    </>
  );
};

export default ShopPageLayout;
