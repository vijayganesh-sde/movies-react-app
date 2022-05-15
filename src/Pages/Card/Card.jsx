import { Component } from "react";
import "../Card/Card.css";
import Badge from "@mui/material/Badge";

class Card extends Component {
  render() {
    return (
      <>
        <Badge badgeContent={this.props.rate} color="secondary">
          <img class="image" src={this.props.imgsrc} />
        </Badge>
        <span class="title">{this.props.name}</span>
      </>
    );
  }
}

export default Card;
