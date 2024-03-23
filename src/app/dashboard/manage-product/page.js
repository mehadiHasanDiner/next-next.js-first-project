import getAllProducts from "@/utils/getAllProducts";
import ManageProduct from "./ManageProduct";

export const metadata = {
  title: "Manage Product-Dashboard | Next JS First Project",
  description: "Dashboar manage product page-Learning Next js",
};

const ManageProductPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="w-full mt-10">
      <h1 className="mb-5 text-2xl font-semibold">Manage Product</h1>
      <ManageProduct products={products} />
    </div>
  );
};

export default ManageProductPage;
