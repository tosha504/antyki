import CustomPagination from "@/app/components/CustomPagination";
import ProductsList from "@/app/components/ShopPage/ProductsList/ProductsList";
import { fetchProductList, fetchProductCurrentCatgoryData } from "@/store/api";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const categoryData = await fetchProductCurrentCatgoryData(params.ID);

  return {
    title: categoryData.data.name + " - Sklpe",
  };
}

const currentCategory = async ({ params, searchParams }) => {
  const paramID = params.ID && params.ID;
  const productsFetch = await fetchProductList(paramID, searchParams.page);
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
