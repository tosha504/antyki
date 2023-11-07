// "use client";
import PrevPage from "@/app/components/PrevPage";
import {
  relatedProductIds,
  shippingFetchData,
  singleProductData,
} from "@/store/api";
import Image from "next/image";
import Link from "next/link";
import "./product.scss";
import ProductsList from "@/app/components/ShopPage/ProductsList/ProductsList";
import AddToCArt from "@/app/components/SingleProduct/AddToCart";

const Product = async ({ params }) => {
  const productData = await singleProductData(params.ID);
  const relatedProducts = await relatedProductIds(productData.related_ids);
  return (
    <>
      <PrevPage>Back</PrevPage>
      <div className="product-items">
        <div className="product-items__image">
          <Image
            src={productData.images[0].src}
            width={400}
            height={400}
            alt={productData.images[0].name}
          />
        </div>
        <div className="product-items__content">
          <h1>{productData.name}</h1>
          <p
            className="price"
            dangerouslySetInnerHTML={{
              __html: productData.price_html,
            }}
          ></p>
          {productData.attributes && (
            <ul className="product-items__content_attributes">
              {productData.attributes.map((attr) => (
                <li key={attr.id}>
                  <p>
                    {attr.name}/ <span>{attr.options}</span>
                  </p>
                </li>
              ))}
            </ul>
          )}
          <AddToCArt id={productData} />
          {productData.categories.length > 0 && (
            <ul className="product-items__content_meta">
              <li>Kategorie:</li>
              {productData.categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.id}`}>{cat.name}, </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: productData.description }}
      ></div>
      {relatedProducts.length > 0 && (
        <>
          <h5 className="related-products">Podobne produkty</h5>
          <ProductsList productsFetch={relatedProducts} />
        </>
      )}
    </>
  );
};

export default Product;
