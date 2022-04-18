import { Component } from "react";
import "/src/components/Card/Card.css";

class Card extends Component {
  render() {
    return (
      <>
        <img class="image" src={this.props.imgsrc} />
        <span class="title">{this.props.name}</span>
        <span class="sub_title">
          {this.props.date} <p class="rate">Rating:{this.props.rate}</p>
        </span>
      </>
    );
  }
}

export default Card;
