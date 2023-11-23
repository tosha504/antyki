import { Suspense } from "react";
import ProductsList from "../components/ProductsList/ProductsList";

export const metadata = {
  title: {
    default: "Sklep Gene",
  },
};
const Products = async ({ params, searchParams }) => {
  return (
    <>
      <Suspense fallback={"custom loading page sklep"}>
        <ProductsList pageProps={searchParams.page} />
      </Suspense>
    </>
  );
};

export default Products;
