export async function singlePage(id) {
  const getPosts = await fetch(
    `https://fredommaster.pl/shop/wp-json/custom/v1/page/${id}`
  );
  const getPostsJa = await getPosts.json();

  return getPostsJa;
}

const slug = async ({ params }) => {
  console.log(params);
  const singlPageWodpress = await singlePage(parseInt(params.slug));
  // const content = { __html: singlPageWodpress.content }
  return (
    <>
      <div className="container">
        <h1>{singlPageWodpress.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: singlPageWodpress.content }} />
      </div>
    </>
  );
};

export default slug;
