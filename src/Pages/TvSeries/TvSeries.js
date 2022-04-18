import axios from "axios";
import { Component, React } from "react";
import { img_200 } from "/src/config.js";
import "/src/Pages/TvSeries/TvSeries.css";
import Card from "/src/components/Card/Card";
export default class SeriesList extends Component {
  state = {
    Series: []
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=1`
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
                    date={item.first_air_date}
                    rate={item.vote_average}
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
