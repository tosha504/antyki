import { singlePage } from "@/store/api";

const slug = async ({ params }) => {
  const singlPageWodpress = await singlePage(parseInt(params.slug));
  return (
    <>
      <div className="container">
        <h1>{singlPageWodpress.post_title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: singlPageWodpress.post_content }}
        />
      </div>
    </>
  );
};

export default slug;
