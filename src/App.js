import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home/Home";
import Inventory from "./Component/Inventory/Inventory";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Header from "./Component/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
