import NavLink from "../components/NavLink";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Products",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="mr-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul>
        {navLinks.map(({ path, title }) => (
          <li className="my-3" key={path}>
            <NavLink exact activeClassName="text-blue-500" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
