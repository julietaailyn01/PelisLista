import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import SeriesList from "./components/SeriesList";
import TopSeries from "./components/TopSeries";
import TopMovies from "./components/TopMovies";
import SerieDetail from "./components/SerieDetail";
import SideLayout from "./components/SideLayout";

const App = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Router>
        <SideLayout>
          <Routes>
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/" element={<Home />} />
            <Route path="/series" element={<SeriesList />} />
            <Route path="/top/series" element={<TopSeries />} />
            <Route path="/top/movies" element={<TopMovies />} />
            <Route path="/serie/:id" element={<SerieDetail />} />
          </Routes>
        </SideLayout>
      </Router>
    </FluentProvider>
  );
};

export default App;
