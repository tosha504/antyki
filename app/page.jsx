import { revalidatePath } from "next/cache";
export async function posts() {
  try {
    const getPosts = await fetch(
      `https://fredommaster.pl/shop/wp-json/wp/v2/posts/79746`
    );
    // revalidatePath("/");
    const getPostsJ = await getPosts.json();

    return getPostsJ;
  } catch (e) {
    return e;
  }
}

export default async function Home() {
  const res = await posts();
  // console.log(res.title.rendered);
  return (
    <>
      <div className="container">
        Home
        <h1 className="custom-class">{res?.title?.rendered}</h1>
        <div className="has-hazy-dawn-gradient-background">
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: res?.content?.rendered }}
          />
        </div>
      </div>
    </>
  );
}
