import { Component } from "react";
import '/Users/srvijayganesh/Documents/movies-react-app/src/components/Card/Card.css'

class Card extends Component {
  render() {
    return <><img class="image" src={this.props.imgsrc} />
    <span class="title">{this.props.name}</span></>
  }
}

export default Card;