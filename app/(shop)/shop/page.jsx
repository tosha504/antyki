import { fetchProductList } from "../../../store/api";
import { Suspense } from "react";
import ProductsList from "../../components/ShopPage/ProductsList/ProductsList";
import CustomPagination from "../../components/CustomPagination";
import Loading from "../../loading.jsx";
export const metadata = {
  title: {
    default: "Sklep",
  },
};
const Products = async ({ params, searchParams }) => {
  const productsFetch = await fetchProductList(null, searchParams.page);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductsList
          productsFetch={productsFetch.data}
          total={productsFetch.headers["x-wp-total"]}
          totalPages={productsFetch.headers["x-wp-totalpages"]}
          page={searchParams.page}
        />
      </Suspense>
      <CustomPagination headers={productsFetch.headers["x-wp-totalpages"]} />
    </>
  );
};

export default Products;
