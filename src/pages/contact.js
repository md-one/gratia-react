import React from "react";
import "./style/contact.scss";
import "./style/title.scss";

class contact extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div class="title">
          <h3>Gratia</h3>
          <h2>PERFECTION</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <form>
          <input type="time" />
          <input type="date" />
          <input type="date" />
          <input type="number" placeholder="HOUR" />
          <input type="number" placeholder="NUMBER OF PEOPLE" />
          <input type="text" placeholder="FIRST NAME AND LAST NAME" />
          <input type="number" placeholder="PHONE NUMBER" />
          <input type="email" />
          <input type="text" />
          <textarea></textarea>
          <button>SEND</button>
        </form>
      </div>
    );
  }
}

export default contact;
