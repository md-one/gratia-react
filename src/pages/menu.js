import React from "react";
import "./style/menu.scss";
import "./style/title.scss";

class menu extends React.Component {
  state = {};

  render() {
    let mealsCategories = [
      {
        category: "Main_Dishes",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1568762907/test/meal1_lwg3xa.png",
        title: "MAIN DISHES",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        category: "Soups",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1568762911/test/meal2_zcmpnj.png",
        title: "SOUPS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        category: "Hamburgers",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1568762895/test/meal3_fy94er.png",
        title: "HAMBURGERS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        category: "Desserts",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1568762907/test/meal4_vbkrao.png",
        title: "Desserts",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        category: "Main_Dishes",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1568762909/test/meal5_nct0jn.png",
        title: "MAIN DISHES",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        category: "Main_Dishes",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1568762915/test/meal6_pfrhah.png",
        title: "MAIN DISHES",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ];
    const meals = mealsCategories.map(meal => (
      <div class="meal">
        <a href={"/menu/" + meal.category}>
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

export default menu;
