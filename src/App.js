import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home/Home";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Header from "./Component/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
