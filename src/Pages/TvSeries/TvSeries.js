import axios from "axios";
import { Component, React, useState } from "react";
import { img_200 } from "/src/config.js";
import "/src/Pages/TvSeries/TvSeries.css";
import Card from "/src/components/Card/Card";
export default class PersonList extends Component {
  state = {
    Series: [],
    page: 1
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page}`
      )
      .then((res) => {
        this.setState({ Series: res.data.results });
        console.log(this.state.Series);
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
        `https://api.themoviedb.org/3/tv/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page}`
      )
      .then((res) => {
        this.setState({ Series: res.data.results });
        console.log(this.state.Series);
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
        `https://api.themoviedb.org/3/tv/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${this.state.page}`
      )
      .then((res) => {
        this.setState({ Series: res.data.results });
        console.log(this.state.Series);
      });
  }

  render() {
    return (
      <>
        <div className="movpage">
          {this.state.Series.map((item) => {
            return (
              <>
                <div className="media">
                  <Card
                    imgsrc={`${img_200}/${item.poster_path}`}
                    name={item.name}
                    rate={item.vote_average}
                  />
                </div>
                <br />
              </>
            );
          })}
        </div>
        <div className="pagination">
          <a class="prevpage">
            {" "}
            <input
              type="Submit"
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
              onClick={() => this.pageforward()}
            />
          </a>
        </div>
      </>
    );
  }
}
