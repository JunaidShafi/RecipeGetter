import Search from "./Components/Search.jsx";
import { useState } from "react";
import Recipe from "./Components/recipe.jsx";

function App() {
  const [foodData, setFoodsData] = useState([]);
  return (
    <div>
      <Search foodData={foodData} setFoodsData={setFoodsData} />
      <Recipe foodData={foodData} setFoodsData={setFoodsData} />
    </div>
  );
}

export default App;
