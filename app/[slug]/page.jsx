
export async function singlePage(id) {

  const getPosts = await fetch(
    `https://fredommaster.pl/shop/wp-json/custom/v1/page/${id}`,

  );
  const getPostsJa = await getPosts.json();

  return getPostsJa;
}

const slug = async ({ params }) => {

  const singlPageWodpress = await singlePage(params.slug);
  console.log(singlPageWodpress);
  return (
    <>
      <div className="container">
        <h1>{singlPageWodpress.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: singlPageWodpress.content }}>

        </div>
      </div>
    </>
  )
}

export default slug