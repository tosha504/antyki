import { fetchProductList } from "../../../store/api";
import { Suspense } from "react";
import ProductsList from "../../components/ShopPage/ProductsList/ProductsList";
import CustomPagination from "../../components/CustomPagination";
// import Loading from "../../loading.jsx";

import dynamic from 'next/dynamic'

const ProductsListLoading = dynamic(
  () => import('../../components/ShopPage/ProductsList/ProductsList'),
  {
    loading: () => <p>Loading from lazy or dynamic...</p>,
  }
)

export const metadata = {
  title: {
    default: "Sklep",
  },
};
const Products = async ({ params, searchParams }) => {
  console.log(params);
  const productsFetch = await fetchProductList(null, searchParams.page);

  return (
    <>

      <ProductsListLoading
        productsFetch={productsFetch.data}
        total={productsFetch.headers["x-wp-total"]}
        page={searchParams.page}
        perPage={productsFetch.config.params.per_page}
      />

      <CustomPagination headers={productsFetch.headers["x-wp-totalpages"]} />
    </>
  );
};

export default Products;
