import { Outlet } from "react-router-dom";
import { Aside } from "./Aside/Aside";

export const Layout = () => (
  <>
    <Aside />
    <main>
      <Outlet />
    </main>
  </>
);
