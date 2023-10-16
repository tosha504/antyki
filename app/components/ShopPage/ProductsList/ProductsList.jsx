import Image from "next/image";
import Link from "next/link";
import "./ProductsList.scss";
const ProductsList = async ({
  productsFetch,
  total,
  totalPages,
  page,
  perPage,
}) => {
  const _currentPage = !page ? 1 : parseInt(page);
  const currentPage = _currentPage - 1;
  const num = Math.ceil(parseInt(total) / parseInt(perPage));
  const from = currentPage * num + 1;
  console.log(total, from);
  const to = from + num - 1;
  return (
    <>
      <p>
        Wyświetlanie {from}-{to} z {total} wyników
      </p>
      <ul className="products-list">
        {productsFetch.map((prod, key) => {
          return (
            <li key={prod.id}>
              <Link href={`/product/${prod.id}`}>
                {/* <Image
                  src={prod.images[0].src}
                  width={300}
                  height={300}
                  alt={prod.images[0].alt}
                /> */}
                <h3 key={prod.id}>{prod.name}</h3>
                <p className="aut-name">{prod.attributes[0]?.options}</p>
                <p
                  className="price"
                  dangerouslySetInnerHTML={{
                    __html: prod.price_html,
                  }}
                ></p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsList;
