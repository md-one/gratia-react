import React from "react";
import "./style/menu.scss";
import "./style/title.scss";
import MealsList from "../meals.json";

class test extends React.Component {
  state = {};

  render() {
    console.log(MealsList);
    const meals = MealsList.salads.map(meal => (
      <div class="meal">
        <a href={"/menu/" + meal.category + "/" + meal.title}>
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
        </a>
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
