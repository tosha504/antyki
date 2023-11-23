import ProductsList from "@/app/(shop)/components/ProductsList/ProductsList";
import CustomPagination from "@/app/components/CustomPagination";
import { fetchProductCurrentCatgoryData } from "@/store/api";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const categoryData = await fetchProductCurrentCatgoryData(params.ID);

  return {
    title: categoryData.data.name + " - Sklpe",
  };
}

const currentCategory = async ({ params, searchParams }) => {
  const paramID = params.ID && params.ID;
  const title = await fetchProductCurrentCatgoryData(params.ID);

  return (
    <>
      <h1>page category:{title.data.name}</h1>
      <Suspense fallback={<h2>Loading products in category...</h2>}>
        <ProductsList id={paramID} pageProps={searchParams.page} />
      </Suspense>
    </>
  );
};

export default currentCategory;
