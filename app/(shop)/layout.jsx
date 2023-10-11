import { categoriesListNew } from "../../store/api";
import Categories from "../components/ShopPage/Categories/Categories";
import PageTitle from "../components/ShopPage/PageTitle/PageTitle";
import "./shop.scss";

const ShopPageLayout = async ({ children }) => {
  const categoriesLis = await categoriesListNew();
  return (
    <>
      <main>
        <div className="container shop">
          <PageTitle />
          <div className="shop__filter">
            <Categories categoriesLis={categoriesLis} />
          </div>
          <div className="shop__products">{children}</div>
        </div>
      </main>
    </>
  );
};

export default ShopPageLayout;
