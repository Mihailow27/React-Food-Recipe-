import React from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeTitle({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) && (
      <div
        className="recipeTitle"
        onClick={() => window.open(recipe["recipe"]["url"])}
      >
        <img
          className="recipeTitle__img"
          src={recipe["recipe"]["image"]}
          alt={recipe["recipe"]["label"]}
        />
        <p className="recipeTitle__name" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}
