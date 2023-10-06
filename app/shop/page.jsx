import { fetchProductList } from "../../store/api";
import { Suspense } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import CustomPagination from "../components/CustomPagination";

const Products = async ({ params, searchParams }) => {
  const productsFetch = await fetchProductList(null, searchParams.page);
  return (
    <>
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductsList productsFetch={productsFetch} params={params} />
      </Suspense>
      <CustomPagination headers={productsFetch.headers["x-wp-totalpages"]} />
    </>
  );
};

export default Products;
