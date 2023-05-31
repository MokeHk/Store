import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import BuySell from "./pages/buySell";
import Edit from "./pages/edit";
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BuySell />} />
        <Route path="/:id/edit" element={<Edit />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
