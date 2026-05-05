import { Outlet } from "react-router";
import { Header } from "./startPage/Header";
import { Footer } from "./startPage/Footer";

export function DefaultGameLayout() {
  return(
    <>
      <Header/>
      <div className="shell">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}