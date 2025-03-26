import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { History } from "./pages/History.tsx";
import { LayoutDefault } from "./layouts/LayoutDefault.tsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
