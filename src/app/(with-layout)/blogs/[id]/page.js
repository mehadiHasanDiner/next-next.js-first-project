// "use client";
import loadBlogData from "@/utils/loadBlogData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";

// import { useParams, useSearchParams } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { title } = await loadSingleBlogData(params.id);

  return {
    title: title,
  };
};

export const generateStaticParams = async () => {
  const blogs = await loadBlogData();
  return blogs.map(({ id }) => ({
    id: id.toString(),
  }));
};

const SingleBlog = async ({ params }) => {
  // const [year, id] = params.segments || [];
  // const params2 = useParams();
  // const searchParams2 = useSearchParams();
  // console.log(params2.segments, searchParams2.get("title"));

  const { id, title, body } = await loadSingleBlogData(params.id);

  return (
    <div className="container mx-auto p-2">
      <div className="border border-blue-500 p-2 my-2">
        <h2 className="text-2xl">
          {" "}
          {id}. {title}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
