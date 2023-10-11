import Image from "next/image";
import Link from "next/link";
import "./ProductsList.scss";
const ProductsList = async ({ productsFetch }) => {
  return (
    <>
      <h3>Produtcs</h3>
      <ul className="products-list">
        {productsFetch.data.map((prod, key) => {
          return (
            <li key={prod.id}>
              <Link href={`/product/${prod.id}`}>
                {/* <Image src={prod.images[0].src} width={100} height={100} /> */}
                <h3 key={prod.id}>{prod.name}</h3>
                <p>{prod.attributes[0]?.options}</p>
                <p>{prod.price} zl</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsList;
