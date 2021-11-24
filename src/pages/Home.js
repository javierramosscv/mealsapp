import React, { useState, useEffect } from "react";
import CategoryList from "../components/meal/CategoryList";
import Spinner from "../components/ui/Spiner";

const Home = (props) => {
  const [categiryList, setCategiryList] = useState([]);
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  useEffect(() => {
    setLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);

        const categories = [];

        data.categories.map((category) => {
          if (category.strCategory !== "Miscellaneous") {
            categories.push({
              id: category.idCategory,
              name: category.strCategory,
              imageThumb: category.strCategoryThumb,
              description: category.strCategoryDescription,
            });
          }
          return category;
        });

        setCategiryList(categories);
      })
      .catch((error) => {
        console.log("Something wrong");
      });
  }, []);

  return (
    <div>
      <h1>Meal Categories</h1>
      {loading ? <Spinner /> : <CategoryList list={categiryList} />}
    </div>
  );
};

export default Home;
