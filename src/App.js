import Header from "../src/Pages/Header/Header";
import SimpleBottomNavigation from "../src/Pages/Navigation/Nav";
import "./App.css";
import MetaTags from "react-meta-tags";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Movies from "../src/Pages/Movies/Movies";
import TvSeries from "../src/Pages/TvSeries/TvSeries";
import Search from "../src/Pages/Search/Search";
import { Container } from "@material-ui/core";
function App() {
  return (
    <div class="index">
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route exact path="/" element={<Search />} />
              <Route path="/TvSeries" element={<TvSeries />} />
              <Route path="/Search" element={<Search />} />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </div>
  );
}
export default App;
