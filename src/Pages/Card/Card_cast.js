import { Component } from "react";
import "../Card/Card_cast.css";
import Tooltip from "@mui/material/Tooltip";

class Card_cast extends Component {
  render() {
    return (
      <>
        <a
          class="cast_data"
          href={"https://www.google.com/search?q=" + this.props.name}
          target="_blank"
        >
          <img class="image1" src={this.props.imgsrc} />
          <span class="title1">{this.props.name}</span>
        </a>
      </>
    );
  }
}

export default Card_cast;
