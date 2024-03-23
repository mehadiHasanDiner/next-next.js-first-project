import Sidebar from "./Sidebar";

export const metadata = {
  title: "Dashboard | Next JS First Project",
  description: "Dashboard page-Learning Next js",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default DashboardLayout;
