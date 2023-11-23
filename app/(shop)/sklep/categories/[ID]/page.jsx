import ProductsList from "@/app/(shop)/components/ProductsList/ProductsList";
import CustomPagination from "@/app/components/CustomPagination";
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
      page category
      <Suspense fallback={<h2>Loading products in category...</h2>}>
        <ProductsList />
      </Suspense>
      {/* <CustomPagination headers={productsFetch.headers["x-wp-totalpages"]} /> */}
    </>
  );
};

export default currentCategory;
