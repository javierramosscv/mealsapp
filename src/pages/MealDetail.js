import React, { useState, useEffect } from "react";

import MealsDetail from "../components/meal/MealsDetail";
import Spinner from "../components/ui/Spiner";

const MealDetail = (props) => {
  const [mealDetail, setMealDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.idMeal}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        const meal = {
          id: data.meals[0].idMeal,
          name: data.meals[0].strMeal,
          category: data.meals[0].strCategory,
          area: data.meals[0].strArea,
          intructions: data.meals[0].strInstructions,
          imagenPath: data.meals[0].strMealThumb,
          tags: data.meals[0].strTags,
          youtube: data.meals[0].strYoutube,
          ingredients: buildIngredienList(data.meals[0]),
        };

        setMealDetail(meal);
      })
      .catch((error) => {
        console.log("Something wrong");
      });
  }, [props.idMeal]);

  const buildIngredienList = (meal) => {
    const ingredientsList = [];

    Object.entries(meal).map(([element, value]) => {
      if (element.includes("strIngredient")) {
        const indexMesure = element.split("strIngredient");
        if (value !== null && value.trim() !== "") {
          ingredientsList.push({
            name: value,
            mesure: meal[`strMeasure${indexMesure[1]}`],
            path: `https://www.themealdb.com/images/ingredients/${value}-Small.png`,
          });
        }
      }
      return [element, value];
    });
    return ingredientsList;
  };

  return (
    <div>
      <p>Meal Detail</p>
      {loading ? <Spinner /> : <MealsDetail meal={mealDetail} />}
    </div>
  );
};

export default MealDetail;
