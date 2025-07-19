import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home";
import { Layout } from "@components/Layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
