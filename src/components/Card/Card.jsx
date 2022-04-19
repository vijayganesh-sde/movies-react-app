import { Component } from "react";
import "/src/components/Card/Card.css";
import Badge from "@mui/material/Badge";

class Card extends Component {
  render() {
    return (
      <>
        <Badge badgeContent={this.props.rate} color="secondary">
          <img class="image" src={this.props.imgsrc} />
        </Badge>
        <span class="title">{this.props.name}</span>
        <span class="sub_title">{this.props.date}</span>
      </>
    );
  }
}

export default Card;
