import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import axios from "axios";
import { Component, useState } from "react";
import { img_200 } from "/src/config.js";
import Card from "/src/components/Card/Card";

function handleClick() {
  alert("hello");
}
export default class PersonList extends Component {
  state = {
    movies: [],
    page: 1
  };

  pagechange() {
    this.state.page = 2;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page}`
      )
      .then((res) => {
        this.setState({ movies: res.data.results });
        console.log(this.state.movies);
      });
  }
  render() {
    return (
      <>
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              onClick={() => this.pagechange()}
            >
              2
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs>
        </div>
      </>
    );
  }
}
