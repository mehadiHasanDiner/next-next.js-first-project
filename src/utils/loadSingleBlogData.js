const loadSingleBlogData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // cache: "no-cache",
    cache: "force-cache",
  });
  return res.json();
};

export default loadSingleBlogData;
