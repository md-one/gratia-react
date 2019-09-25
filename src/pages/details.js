import React from "react";
import "./style/details.scss";
import "./style/title.scss";

function details({ match }) {
  console.log(match);
  return <h1>{match.params.title}</h1>;
}
export default details;
