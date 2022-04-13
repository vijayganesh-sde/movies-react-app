import axios from "axios";
import { Component, React } from "react";
export default class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/4/account/Vijay@03/movie/recommendations?page=1`
      )
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
        console.log(this.state.persons);
      });
  }

  render() {
    return (
      <>
        <div>
          {this.state.persons.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </div>
      </>
    );
  }
}
