import { fetchProductList } from "../../../store/api";
import { Suspense } from "react";
import ProductsList from "../../components/ShopPage/ProductsList/ProductsList";
import CustomPagination from "../../components/CustomPagination";
export const metadata = {
  title: {
    default: "Sklep",
  },
};
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
