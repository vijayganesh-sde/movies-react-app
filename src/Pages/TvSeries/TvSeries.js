import axios from "axios";
import { Component, React } from "react";
import { img_200 } from "/src/config.js";
import "/src/Pages/TvSeries/TvSeries.css";
import Series_disp from "/src/components/Series_display/Series_disp";
export default class PersonList extends Component {
  state = {
    Series: [],
    page: 1
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${
          this.state.page + 3
        }`
      )
      .then((res) => {
        this.setState({ Series: res.data.results });
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
        `https://api.themoviedb.org/3/tv/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${
          this.state.page + 3
        }`
      )
      .then((res) => {
        this.setState({ Series: res.data.results });
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
        `https://api.themoviedb.org/3/tv/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=${
          this.state.page + 3
        }`
      )
      .then((res) => {
        this.setState({ Series: res.data.results });
      });
  }

  render() {
    return (
      <>
        <div className="movpage">
          {this.state.Series.map((item) => {
            if (item.poster_path == null) {
              return (
                <>
                  <div className="media">
                    <Series_disp
                      imgsrc={`https://cdn.pixabay.com/photo/2013/07/12/17/22/clapper-board-152088_1280.png`}
                      name={item.name}
                      rate={item.vote_average}
                      id={item.id}
                    />
                  </div>
                  <br />
                </>
              );
            } else {
              return (
                <>
                  <div className="media">
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
            }
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
