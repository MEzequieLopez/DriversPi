import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Form from "./views/form/form";
import Landing from "./views/landing/landing";
import Nav from "./components/navBar/navBar";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" && <Nav />}

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
