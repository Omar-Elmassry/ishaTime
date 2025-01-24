import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter basename="/ishaTime">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
