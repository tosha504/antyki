import { Suspense } from "react";
import { categoriesListNew } from "../../store/api";
import "./shop.scss";
import PageTitle from "./components/PageTitle/PageTitle";
import Categories from "./components/Categories/Categories";

const ShopPageLayout = async ({ children }) => {
  const categoriesList = await categoriesListNew();
  return (
    <>
      <main>
        <div className="container shop">
          <PageTitle />
          <div className="shop__filter">
            <Categories categoriesList={categoriesList} />
          </div>
          <Suspense fallback={"custom loading"}>
            <div className="shop__products">{children}</div>
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default ShopPageLayout;
