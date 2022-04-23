import axios from "axios";
import { Component, React, useState } from "react";
import { img_200, img_unavail } from "/src/config.js";
import "/src/Pages/Movies/Movies.css";
import Card from "/src/components/Card/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Card_cast from "/src/components/Card/Card_cast";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Tooltip from "@mui/material/Tooltip";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  background: "#303030"
};
export default class PersonList extends Component {
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
        console.log(this.state.movies);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/634649/external_ids?api_key=e0f5e5e0e8f0c8afdebf528691360696"
      )
      .then((res) => {
        this.setState({ external_ids: res.data });
        console.log(this.state.external_ids);
      });
    this.func();
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
        console.log(this.state.movies);
      });
  }
  func() {}
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
        console.log(this.state.movie_details);
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
            console.log(item.id);
            return (
              <>
                <div className="media" onClick={() => this.handleOpen()}>
                  <Card
                    imgsrc={`${img_200}/${item.poster_path}`}
                    name={item.original_title}
                    rate={item.vote_average}
                  />
                </div>
                <br />
              </>
            );
          })}
          <div>
            <Modal
              open={this.state.open}
              onClose={() => this.handleClose()}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{ color: "#fff" }}
                >
                  {this.state.movie_details.original_title}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ color: "#fff" }}
                >
                  Run Time : {this.state.movie_details.runtime + " Minutes "}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ color: "#fff" }}
                >
                  {this.state.movie_details.overview}
                  <br />
                  <br />
                  Release Date: {this.state.movie_details.release_date}
                  <br />
                  <br />
                  Cast:
                  <div class="cast">
                    {this.state.movie_cast.map((item1) => {
                      if (item1.profile_path == null) {
                        return (
                          <>
                            <div class="media1">
                              <Card_cast
                                imgsrc={
                                  "https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg"
                                }
                                name={item1.name}
                                name1={item1.name}
                              />
                            </div>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <div class="media1">
                              <Card_cast
                                imgsrc={`${img_200}/${item1.profile_path}`}
                                name={item1.name}
                              />
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                </Typography>
                <div class="social_media">
                  <Tooltip title="ctrl / cmd + click to follow">
                    <a
                      href={
                        "https://www.instagram.com/" +
                        this.state.external_ids.instagram_id
                      }
                    >
                      <InstagramIcon fontSize="large" color="action" />
                    </a>
                  </Tooltip>
                  <Tooltip title="ctrl / cmd + click to follow">
                    <a
                      href={
                        "https://www.facebook.com/" +
                        this.state.external_ids.facebook_id
                      }
                    >
                      <FacebookIcon fontSize="large" color="action" />
                    </a>
                  </Tooltip>
                  <Tooltip title="ctrl / cmd + click to follow">
                    <a
                      href={
                        "https://www.twitter.com/" +
                        this.state.external_ids.twitter_id
                      }
                    >
                      <TwitterIcon fontSize="large" color="action" />
                    </a>
                  </Tooltip>
                </div>
              </Box>
            </Modal>
          </div>
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
