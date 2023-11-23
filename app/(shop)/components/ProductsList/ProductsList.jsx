import Image from "next/image";
import "./ProductsList.scss";
import { use } from "react";
import { fetchProductList } from "@/store/api";
import CustomPagination from "../../../components/CustomPagination";

import dynamic from "next/dynamic";

const LazyProductItem = dynamic(() => import("./SingleProduct"));
const ProductsList = ({ pageProps }) => {
  const productsFetch = use(fetchProductList(null, pageProps));
  // const _currentPage = !pageProps ? 1 : parseInt(pageProps);
  // const from = (_currentPage - 1) * parseInt(perPage) + 1;
  // const to = Math.min(
  //   parseInt(_currentPage) * parseInt(perPage),
  //   parseInt(total)
  // );
  // console.log(productsFetch?.headers["x-wp-total"]);
  return (
    <>
      <ul className="products-list">
        {productsFetch.data.map((prod, key) => {
          return <LazyProductItem key={key} prodData={prod} />;
        })}
      </ul>
      <CustomPagination headers={productsFetch.headers["x-wp-totalpages"]} />
    </>
  );
};

export default ProductsList;
