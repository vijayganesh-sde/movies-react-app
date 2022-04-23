import { Component } from "react";
import "/src/components/Card/Card_cast.css";
import goog from "/src/config.js";
import Tooltip from "@mui/material/Tooltip";

class Card_cast extends Component {
  render() {
    return (
      <>
        <Tooltip title="cmd + click to follow">
          <a
            class="ref"
            href={"https://www.google.com/search?q=" + this.props.name}
          >
            <img class="image1" src={this.props.imgsrc} />
            <span class="title1">{this.props.name}</span>
          </a>
        </Tooltip>
      </>
    );
  }
}

export default Card_cast;
