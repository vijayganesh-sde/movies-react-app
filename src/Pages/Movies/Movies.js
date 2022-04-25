import axios from "axios";
import { Component, React } from "react";
import { img_200 } from "/src/config.js";
import "/src/Pages/Movies/Movies.css";
import Movie_disp from "/src/components/Movie_display/Movie_disp";

export default class MovieList extends Component {
  state = {
    movies: [],
    page: 1,
    open: false,
    movie_details: [],
    movie_cast: [],
    external_ids: [],
    mov_id: 2
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page}`
      )
      .then((res) => {
        this.setState({ movies: res.data.results });
      });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/634649/external_ids?api_key=e0f5e5e0e8f0c8afdebf528691360696"
      )
      .then((res) => {
        this.setState({ external_ids: res.data });
      });
  }
  pageforward() {
    if (this.state.page === 10) {
      alert("You have good Patience!! Please Stop");
    } else {
      this.state.page += 1;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page}`
      )
      .then((res) => {
        this.setState({ movies: res.data.results });
      });
  }
  pagebackward() {
    if (this.state.page === 1) {
      alert("This is the first page");
    } else {
      this.state.page -= 1;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page}`
      )
      .then((res) => {
        this.setState({ movies: res.data.results });
      });
  }
  handleOpen() {
    this.setState({ open: true });
    this.state.movies.map((item2) => {
      this.setState({ mov_id: item2.id });
    });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.state.mov_id}?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US`
      )
      .then((res) => {
        this.setState({ movie_details: res.data });
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.state.mov_id}/credits?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US`
      )
      .then((res) => {
        this.setState({ movie_cast: res.data.cast });
      });
  }
  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <>
        <div className="movpage">
          {this.state.movies.map((item) => {
            return (
              <>
                <div className="media" onClick={() => this.handleOpen()}>
                  <Movie_disp
                    imgsrc={`${img_200}/${item.poster_path}`}
                    name={item.original_title}
                    rate={item.vote_average}
                    id={item.id}
                  />
                </div>
                <br />
              </>
            );
          })}
        </div>
        <div className="pagination">
          <a class="prevpage">
            <input
              type="Submit"
              style={{ backgroundColor: "#808080", color: "#fff" }}
              value="<-- Previous Page"
              variant="text"
              onClick={() => this.pagebackward()}
            />
          </a>
          <a class="pageno">Page : {this.state.page}</a>
          <a class="nxtpage">
            <input
              type="Submit"
              value="next page -->"
              variant="text"
              style={{ backgroundColor: "#909090", color: "#fff" }}
              onClick={() => this.pageforward()}
            />
          </a>
        </div>
      </>
    );
  }
}
