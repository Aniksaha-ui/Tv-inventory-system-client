import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home/Home";
import Header from "./Component/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
