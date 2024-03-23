// "use client";

import loadBlogData from "@/utils/loadBlogData";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const metadata = {
  title: "Blogs Page | Next JS First Project",
  description: "Blogs page-Learning Next js",
};

// const blogs = [
//   { id: 1, title: "Title 1", year: 2022 },
//   { id: 2, title: "Title 2", year: 2023 },
//   { id: 3, title: "Title 3", year: 2023 },
//   { id: 4, title: "Title 4", year: 2024 },
//   { id: 5, title: "Title 5", year: 2024 },
// ];

const BlogsPage = async () => {
  //   const router = useRouter();

  const blogs = await loadBlogData();

  return (
    <div className="container mx-auto p-2">
      {blogs.map(({ id, body, title }) => (
        <div className="border border-blue-500 p-2 my-2" key={id}>
          <h2 className="text-2xl">
            {" "}
            {id}. {title}
          </h2>
          <p>{body}</p>

          <Link
            className="inline-block mt-5"
            href={`/blogs/${id}`}
            // href={{
            //   pathname: `/blogs/${year}/${id}`,
            //   query: {
            //     title: title,
            //   },
            // }}
            //   onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)}
          >
            <button className="text-white px-2 py-1 bg-blue-500">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
