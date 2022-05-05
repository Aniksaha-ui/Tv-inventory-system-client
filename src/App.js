import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home/Home";
import Inventory from "./Component/Inventory/Inventory";
import Login from "./Component/Login/Login";
import ManageInventory from "./Component/ManageInventory/ManageInventory";
import MyItem from "./Component/MyItem/MyItem";
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

        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/myItem"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
