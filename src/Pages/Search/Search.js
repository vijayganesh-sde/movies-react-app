import axios from "axios";
import "/src/Pages/Search/Search.css";
import { Component, React } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Movie_disp from "/src/components/Movie_display/Movie_disp";
import Card from "/src/components/Card/Card";
import { img_200 } from "/src/config.js";
import Series_disp from "/src/components/Series_display/Series_disp";
class Search extends Component {
  state = {
    movies: [],
    series: [],
    page: 1,
    page1: 3,
    open: false,
    movie_details: [],
    movie_cast: [],
    external_ids: [],
    search_inp: "",
    search_results: [],
    all_movies: [],
    all_series: [],
    search_ser_results: []
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
        `https://api.themoviedb.org/3/tv/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page}`
      )
      .then((res) => {
        this.setState({ series: res.data.results });
      });
    this.pagechange();
  }
  pagechange() {
    for (let i = 0; i < 20; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page}`
        )
        .then((res) => {
          res.data.results.map((item) => {
            this.setState((prevState) => ({
              all_movies: [
                ...prevState.all_movies,
                {
                  original_title: item.original_title,
                  poster_path: item.poster_path,
                  vote_average: item.vote_average,
                  id: item.id
                }
              ]
            }));
          });
        });
      this.state.page += 1;
      //console.log(this.state.all_movies);
    }
    for (let i = 0; i < 20; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page1}`
        )
        .then((res) => {
          res.data.results.map((item) => {
            this.setState((prevState) => ({
              all_series: [
                ...prevState.all_series,
                {
                  name: item.name,
                  poster_path: item.poster_path,
                  vote_average: item.vote_average,
                  id: item.id
                }
              ]
            }));
          });
        });
      this.state.page1 += 1;
      //console.log(this.state.all_movies);
    }
  }
  onsearch() {
    this.setState({ search_results: [] });
    this.setState({ search_ser_results: [] });
    this.state.all_movies.map((item) => {
      if (
        item.original_title.includes(
          document.getElementById("search_input").value
        )
      ) {
        this.setState((prevState) => ({
          search_results: [
            ...prevState.search_results,
            {
              original_title: item.original_title,
              poster_path: item.poster_path,
              vote_average: item.vote_average,
              id: item.id
            }
          ]
        }));
      }
    });
    this.state.all_series.map((item) => {
      if (item.name.includes(document.getElementById("search_input").value)) {
        this.setState((prevState) => ({
          search_ser_results: [
            ...prevState.search_ser_results,
            {
              name: item.name,
              poster_path: item.poster_path,
              vote_average: item.vote_average,
              id: item.id
            }
          ]
        }));
      }
    });
  }
  render() {
    return (
      <>
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 }
            }}
          >
            {" "}
            <TextField
              helperText=" "
              id="search_input"
              label="Enter Movie or TvSeries"
              style={{ width: "80%", marginLeft: "8%" }}
            />{" "}
            <Button
              variant="outlined"
              color="primary"
              class="search_but"
              onClick={() => this.onsearch()}
            >
              Search
            </Button>
          </Box>
        </div>
        <div className="movie_list">
          {this.state.search_results.map((item) => {
            return (
              <>
                <div className="media2">
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
          {this.state.search_ser_results.map((item) => {
            return (
              <>
                <div className="media2">
                  <Series_disp
                    imgsrc={`${img_200}/${item.poster_path}`}
                    name={item.name}
                    rate={item.vote_average}
                    id={item.id}
                  />
                </div>
                <br />
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default Search;
