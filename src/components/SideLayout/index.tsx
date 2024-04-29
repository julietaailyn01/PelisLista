import React, { useState } from "react";
import "../Styles/SideLayout.scss";
import { IconButton } from "@fluentui/react/lib/Button";
import { Button } from "@fluentui/react-components";
import { Icon } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSearchSeriesQuery } from "../../redux/services/series";
import { RootState, searchMovies, searchSeries, setTheme } from "../../redux/store";
import { Series } from "../../types/seriesTypes";
import { useLocation } from "react-router-dom";
import { useSearchMoviesQuery } from "../../redux/services/movies";
import { Movies } from "../../types/moviesTypes";
import logo from "../../assets/logo-p.png";

const SearchButton = () => {
  return (
    <IconButton
      iconProps={{ iconName: "Search" }}
      title="Search"
      ariaLabel="Search"
      className="icon-button"
      type="submit"
    />
  );
};
type IconThemeProps = {
  theme: string;
};

const IconTheme = ({theme}: IconThemeProps) => {
  if (theme === "light") {
    return <Icon iconName="Sunny" />;
  }
  return <Icon iconName="ClearNight" />;
  
};


const SideLayout = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: movies } = useSearchMoviesQuery(searchValue, {
    skip: searchValue.length < 1,
  });
  const {
    data: series,
  } = useSearchSeriesQuery(searchValue, { skip: searchValue.length < 1 });
  const [themes, setThemes] = useState<string>("light");
  const [themesSide, setThemesSide] = useState<string>("lightSide");

  const [error, setError] = useState(false);

  const handleSearchMovies = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue.length < 2) {
      setError(true);
    } else {
      setError(false);
      event.preventDefault();
      dispatch(searchMovies(movies?.results as Movies[]));
    }
  };

  const light = useSelector((state: RootState) => state.themes.light);

  const handleChangeTheme = (light: boolean) => {
    dispatch(setTheme(light));
    setThemes(light ? "light" : "dark");
    setThemesSide(light ? "lightSide" : "darkSide");
  }


  const handleSearchSeries = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue.length < 2) {
      setError(true);
    } else {
      setError(false);
      event.preventDefault();
      dispatch(searchSeries(series?.results as Series[]));
    }
  };

  const location = useLocation();

  const handleTopClick = () => {
    navigate(`/top/movies`);
  };

  const handleHomeClick = () => {
    navigate(`/`);
  };



  return (
    <div className={`app-container ${themes} `}>
      <div className={`side-layout ${themesSide} `} >
        <div className="logo">
          <IconButton iconProps={{ iconName: "Home" }} title="Home" ariaLabel="Home" className="iconHome" onClick={handleHomeClick}/>
          <img src={logo} alt="logo" className="logo-p" />
        </div>
        <form
          onSubmit={
            location.pathname.includes("series")
              ? handleSearchSeries
              : handleSearchMovies
          }
          className="search"
        >
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar..."
            style={error ? {border: '1px solid red'} : {}}
          />
          <SearchButton />
        </form>
        {error && <div style={{color: 'red'}}>Por favor, ingresa al menos 2 caracteres para buscar.</div>}
        <div className='buttons'>
          <Button onClick={handleHomeClick}>
          <Icon iconName="Home" />
            Inicio
          </Button>
          <Button onClick={handleTopClick}>
          <Icon iconName="Trophy" />
            Mejor Clasificadas
          </Button>
          <Button onClick={() => handleChangeTheme(!light)}>
            <IconTheme theme={themes} />
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SideLayout;
