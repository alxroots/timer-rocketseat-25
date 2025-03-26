import { Header } from "./Header.tsx";
import { Outlet } from "react-router-dom";

export function LayoutDefault() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
