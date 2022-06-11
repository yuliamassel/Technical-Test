import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Case3/Pages/Home";

// import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>  
  );
}

export default App;