import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApiData from "./pages/ApiData";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-data" element={<ApiData />} />
      </Routes>
    </BrowserRouter>
  );
}
