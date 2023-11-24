import Image from "next/image";
import "./ProductsList.scss";
import { Suspense, use } from "react";
import { fetchProductList } from "@/store/api";
import CustomPagination from "../../../components/CustomPagination";

import dynamic from "next/dynamic";

const LazyProductItem = dynamic(() => import("./SingleProduct"));
const ProductsList = ({ id, pageProps }) => {
  const productsFetch = use(fetchProductList(id, pageProps));
  // const _currentPage = !pageProps ? 1 : parseInt(pageProps);
  // const from = (_currentPage - 1) * parseInt(perPage) + 1;
  // const to = Math.min(
  //   parseInt(_currentPage) * parseInt(perPage),
  //   parseInt(total)
  // );
  // console.log(productsFetch?.headers["x-wp-total"]);
  return (
    <>
      <CustomPagination headers={productsFetch.headers["x-wp-totalpages"]} />
      <Suspense fallback={`i dondasfasd fasfdasfdas fas `}>
        <h3>{new Date().getTime()}</h3>
        <ul className="products-list">
          {productsFetch.data.map((prod, key) => {
            return <LazyProductItem key={key} prodData={prod} />;
          })}
        </ul>
      </Suspense>
    </>
  );
};

export default ProductsList;
