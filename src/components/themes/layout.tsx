import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import AlertHome from "../AlertHome";

const Layout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <AlertHome />
      <main className="flex flex-col items-center gap-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
