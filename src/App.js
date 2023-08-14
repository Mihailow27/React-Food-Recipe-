import Axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTitle from "./components/recipe-title";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    try {
      const result = await Axios.get(url);
      setrecipes(result.data.hits);
      console.log(result.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingredient"
          autoComplete="off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app__recipes">
        {recipes.length > 0 &&
          recipes.map((recipe, index) => (
            <RecipeTitle key={index} recipe={recipe} />
          ))}
      </div>
    </div>
  );
}

export default App;
