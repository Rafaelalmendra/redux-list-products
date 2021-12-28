import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Details } from "./components/Details";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<List />} />
          <Route path="/product/:productId" exact element={<Details />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}