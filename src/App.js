import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/Navigation/Nav";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Movies from "../src/Pages/Movies/Movies";
import TvSeries from "../src/Pages/TvSeries/TvSeries";
import Search from "../src/Pages/Search/Search";
import { Container } from "@material-ui/core";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Movies />} exact />
            <Route path="/TvSeries" element={<TvSeries />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}
export default App;
