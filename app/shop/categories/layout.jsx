import { categoriesListNew } from "../../../store/api";
import Categories from "../../components/Categories";
import "../shop.scss";

const ShopPageLayout = async ({ children, params }) => {
  const categoriesLis = await categoriesListNew();
  console.log(params);
  return (
    <>
      <main>
        <div className="container shop">
          <div className="shop__filter">
            <Categories categoriesLis={categoriesLis} activeid={338} />
          </div>
          <div className="shop__products">{children}</div>
        </div>
      </main>
    </>
  );
};

export default ShopPageLayout;
