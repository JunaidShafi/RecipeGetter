import { useEffect, useState } from "react";

export default function Search({ foodData, setFoodsData }) {
  const [query, setQuery] = useState("pizza");
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=719b21c6a7a8411eb28cc160283c141e`;

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(url);
      const data = await res.json();
      await setFoodsData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
