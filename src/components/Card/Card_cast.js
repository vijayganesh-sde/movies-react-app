import { Component } from "react";
import "/src/components/Card/Card_cast.css";
import goog from "/src/config.js";

class Card_cast extends Component {
  render() {
    return (
      <>
        <img class="image1" src={this.props.imgsrc} />
        <span class="title1">{this.props.name}</span>
      </>
    );
  }
}

export default Card_cast;
