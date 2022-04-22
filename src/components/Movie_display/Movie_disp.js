import { Component } from "react";
import "/src/components/Card/Card.css";
import Badge from "@mui/material/Badge";

class Movie_disp extends Component {
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

export default Movie_disp;
