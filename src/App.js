import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import Detailcomponent from "./components/Detailcomponent";
//styling
import "./App.css";
import { useState } from "react";

function App() {
  const [Cookie, Setcookie] = useState("");

  const [theme, setTheme] = useState(".lighttheme");
  return (
    <div className={theme}>
      <Home setTheme={setTheme} theme={theme} />
      <ProductList Setcookie={Setcookie} />
      <Detailcomponent Cookie={Cookie} />
    </div>
  );
}

export default App;
