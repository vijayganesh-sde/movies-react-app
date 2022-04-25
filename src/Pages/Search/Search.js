import axios from "axios";
import "/src/Pages/Search/Search.css";
import { Component, React } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Movie_disp from "/src/components/Movie_display/Movie_disp";
import Card from "/src/components/Card/Card";
import { img_200 } from "/src/config.js";
class Search extends Component {
  state = {
    movies: [],
    page: 1,
    open: false,
    movie_details: [],
    movie_cast: [],
    external_ids: [],
    search_inp: "",
    search_results: [],
    all_movies: []
  };

  componentDidMount() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page}`
        )
        .then((res) => {
          this.setState({ movies: res.data.results });
        });
      
  }
  onsearch() {
    this.setState({ search_results: [] });
    this.state.all_movies.map((item) => {
      if (
        item.original_title.includes(
          document.getElementById("search_input").value
        )
      ) {
        console.log(item.original_title);
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
        </div>
      </>
    );
  }
}
export default Search;
