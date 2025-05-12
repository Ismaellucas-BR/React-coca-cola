import { Outlet } from "react-router";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-5">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
