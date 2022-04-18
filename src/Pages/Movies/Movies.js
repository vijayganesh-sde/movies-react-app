import axios from "axios";
import { Component, React } from "react";
import {img_200} from "/Users/srvijayganesh/Documents/movies-react-app/src/config.js";
import '/Users/srvijayganesh/Documents/movies-react-app/src/Pages/Movies/Movies.css';
import Card from"/Users/srvijayganesh/Documents/movies-react-app/src/components/Card/Card"
export default class PersonList extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e0f5e5e0e8f0c8afdebf528691360696&language=en-US&page=2`
      )
      .then((res) => {
        this.setState({ movies:res.data.results});
        console.log(this.state.movies);
        console.log(this.state.movies[0].backdrop_path);
      });
  }

  render() {
    return (
      <>
        <div className="movpage">
         {this.state.movies.map((item)=>{
           return <><div className="media"><Card imgsrc={`${img_200}/${item.poster_path}`} name={item.original_title} /></div><br /></>;
         }  
         )}
         </div>
      </>
    );
  }
}
