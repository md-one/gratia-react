import React from "react";
import "./style/menu.scss";
import "./style/title.scss";

class menu extends React.Component {
  state = {};

  render() {
    let mealsCategories = [
      {
        category: "Breakfast",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1572533547/test/breakfast/pancake-1984716_640_ty8v4y.jpg",
        title: "BREAKFAST",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        category: "Main_Dishes",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1572620721/test/main/caroline-attwood-bpPTlXWTOvg-unsplash_afn7cz.jpg",
        title: "MAIN DISHES",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        category: "Desserts",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1569362535/test/desserts/blur-cake-chocolate-954199_hhluyj.jpg",
        title: "DESSERTS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        category: "Sandwich",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1573051377/test/sandwich/youjeen-cho-sBKLiRiunK0-unsplash_baij7h.jpg",
        title: "SANDWICH",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        category: "Soups",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1572618936/test/soup/8-low-ural-l3Mr7vSdmd4-unsplash_jth7xa.jpg",
        title: "SOUPS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        category: "Salads",
        img:
          "https://res.cloudinary.com/dyndxow8x/image/upload/v1573705363/test/salads/cucumber-and-red-cabbage-coleslaw-salad-105968-1_ealql0.webp",
        title: "SALADS",
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
          ></div>{" "}
          <div class="description">
            <h2> {meal.title} </h2> <p> {meal.description} </p>{" "}
          </div>{" "}
        </a>{" "}
      </div>
    ));

    return (
      <main>
        <div class="title">
          <h3> Gratia </h3> <h2> PERFECTION </h2>{" "}
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>{" "}
        </div>
        <div class="meals"> {meals} </div>{" "}
      </main>
    );
  }
}

export default menu;
