import CustomPagination from "@/app/components/CustomPagination";
import ProductsList from "@/app/components/ProductsList/ProductsList";
import { fetchProductList } from "@/store/api";
import { Suspense } from "react";
const currentCategory = async ({ params }) => {
  const paramID = params.ID && params.ID;
  const productsFetch = await fetchProductList(paramID, 1);
  console.log(params);
  return (
    <>
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductsList productsFetch={productsFetch} params={params} />
      </Suspense>
      <CustomPagination headers={productsFetch.headers["x-wp-totalpages"]} />
    </>
  );
};

export default currentCategory;
