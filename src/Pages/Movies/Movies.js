import axios from "axios";
import { Component, React } from "react";
import { img_200 } from "/src/config.js";
import { page } from "/src/config.js";
import "/src/Pages/Movies/Movies.css";
import Card from "/src/components/Card/Card";
import Pagination from "/src/components/Pagination/Pagination";
export default class PersonList extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${page}`
      )
      .then((res) => {
        this.setState({ movies: res.data.results });
        console.log(this.state.movies);
      });
  }

  render() {
    return (
      <>
        <div className="movpage">
          {this.state.movies.map((item) => {
            return (
              <>
                <div className="media">
                  <Card
                    imgsrc={`${img_200}/${item.poster_path}`}
                    name={item.original_title}
                    date={item.release_date}
                    rate={item.vote_average}
                  />
                </div>
                <br />
              </>
            );
          })}
        </div>
        <div className="pagination">
          <Pagination />
        </div>
      </>
    );
  }
}
