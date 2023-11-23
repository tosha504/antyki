import Link from "next/link";

const SingleProduct = ({ prodData }) => {
  return (
    <li>
      <Link href={`/product/${prodData.id}`}>
        {/* <Image
                  src={prod.images[0].src}
                  width={300}
                  height={300}
                  alt={prod.images[0].alt}
                /> */}
        <h3 key={prodData.id}>{prodData.name}</h3>
        <p className="aut-name">{prodData.attributes[0]?.options}</p>
        <div
          className="price"
          dangerouslySetInnerHTML={{
            __html: prodData.price_html,
          }}
        />
      </Link>
    </li>
  );
};

export default SingleProduct;
