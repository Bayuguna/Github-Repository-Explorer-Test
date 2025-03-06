import BFooter from "@/components/organisms/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <div className="container-wrapper">
        <Outlet />
      </div>
      <div className="absolute bottom-0 w-full">
        <BFooter />
      </div>
    </div>
  );
};

export default MainLayout;
