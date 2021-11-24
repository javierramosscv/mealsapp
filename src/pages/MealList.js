import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealsList from "../components/meal/MealsList";
import Spinner from "../components/ui/Spiner";
const MealList = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [mealList, setMealList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.idCategory}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);

        const mealListData = [];
        data.meals.map((meal) =>
          mealListData.push({
            id: meal.idMeal,
            name: meal.strMeal,
            imageThumb: meal.strMealThumb,
            price: 10,
          })
        );
        setMealList(mealListData);
      })
      .catch((error) => {
        console.log("Something wrong");
      });
  }, [params.idCategory]);

  return (
    <div>
      <p>Category: {params.idCategory}</p>
      <div>{loading ? <Spinner /> : <MealsList list={mealList} />}</div>
    </div>
  );
};

export default MealList;
