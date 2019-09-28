import React from "react";
import "./style/details.scss";
import "./style/title.scss";

function details({ match, location }) {
  console.log(location.state);
  console.log(match);

  return (
    <main id="theMealDetails">
      <div
        class="theMealImg"
        style={{ backgroundImage: "url(" + location.state.img + ")" }}
      ></div>
      <div class="description">
        <h2>{match.params.title}</h2>
        <p>{location.state.description}</p>
      </div>
      <div class="components">
        <h2>Components</h2>
        <p>
          chicken breast fillet, marinated overnight accompained with tomato cos
          lettuce & Spanish red onion
        </p>
      </div>
      <div class="cost">
        <h4>5$</h4>
        <p>Total cost</p>
      </div>
    </main>
  );
}
export default details;
