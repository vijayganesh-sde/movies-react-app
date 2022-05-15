import { Component } from "react";
import "../Movie_display/Movie_disp.css";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import { img_200, img_unavail } from "../config.js";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Card_cast from "../Card/Card_cast";
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
  background: "#303030",
  overflow: "auto"
};
class Movie_disp extends Component {
  state = {
    movies: [],
    page: 1,
    open: false,
    movie_details: [],
    movie_cast: [],
    external_ids: [],
    mov_id: 2
  };
  handleOpen() {
    this.setState({ open: true });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US`
      )
      .then((res) => {
        this.setState({ movie_details: res.data });
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US`
      )
      .then((res) => {
        this.setState({ movie_cast: res.data.cast });
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.id}/external_ids?api_key=e0f5e5e0e8f0c8afdebf528691360696`
      )
      .then((res) => {
        this.setState({ external_ids: res.data });
      });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    return (
      <>
        <Badge badgeContent={this.props.rate} color="secondary">
          <img
            class="image"
            src={this.props.imgsrc}
            onClick={() => this.handleOpen()}
          />
        </Badge>
        <span class="title">{this.props.name}</span>
        <div class="movie_box">
          <Modal
            open={this.state.open}
            style={{ overflow: "auto" }}
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
                    target="_blank"
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
                    target="_blank"
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
                    target="_blank"
                  >
                    <TwitterIcon fontSize="large" color="action" />
                  </a>
                </Tooltip>
              </div>
            </Box>
          </Modal>
        </div>
      </>
    );
  }
}

export default Movie_disp;
