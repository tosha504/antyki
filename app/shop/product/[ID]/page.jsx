import PrevPage from "@/app/components/PrevPage";
import {
  relatedProductIds,
  shippingFetchData,
  singleProductData,
} from "@/store/api";
import Image from "next/image";
import Link from "next/link";
const Product = async ({ params }) => {
  const productData = await singleProductData(params.ID);
  const relatedProducts = await relatedProductIds(productData.related_ids);
  console.log(productData);
  return (
    <>
      <PrevPage>Back</PrevPage>
      <Image
        src={productData.images[0].src}
        width={500}
        height={500}
        alt={productData.images[0].name}
      />
      <h1>{productData.name}</h1>
      <p>{productData.price} zl</p>
      {productData.attributes &&
        productData.attributes.map((attr) => (
          <li key={attr.id}>
            <p>
              {attr.name}/ {attr.options}
            </p>
          </li>
        ))}
      <button>Add to cart</button>
      <ul>
        {productData.categories.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
      <p dangerouslySetInnerHTML={{ __html: productData.description }}></p>
      <h2>Podobne produkty</h2>
      {relatedProducts &&
        relatedProducts.map((prod) => (
          <>
            <h3>
              <Link href={`/shop/product/${prod.id}`}>{prod.name}</Link>
            </h3>
          </>
        ))}
    </>
  );
};

export default Product;
