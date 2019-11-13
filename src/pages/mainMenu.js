import React from "react";
import "./style/menu.scss";
import "./style/title.scss";
import MealsList from "../meals.json";
import { Link } from "react-router-dom";

class test extends React.Component {
  state = {};

  render() {
    console.log(MealsList);
    const meals = MealsList.Main_Dishes.map(meal => (
      <div class="meal">
        <Link
          to={{
            pathname: `/menu/${meal.category}/${meal.title}`,
            state: {
              description: `${meal.description}`,
              img: `${meal.img}`
            }
          }}
        >
          <div
            class="mealImg"
            style={{
              backgroundImage: "url(" + meal.img + ")"
            }}
          ></div>
          <div class="description">
            <h2>{meal.title}</h2>
            <p>{meal.description}</p>
          </div>
        </Link>
      </div>
    ));

    return (
      <main>
        <div class="title">
          <h3>Gratia</h3>
          <h2>PERFECTION</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="meals">{meals}</div>
      </main>
    );
  }
}

export default test;
