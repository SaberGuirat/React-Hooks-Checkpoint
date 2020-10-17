import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import MovieList from "./Components/Movie/MovieList";
import Filter from "./Components/Movie/Filter";
import AddMovie from "./Components/Movie/AddMovie";
import Footer from "./Components/Footer/Footer";
import MovieTrailer from "./Components/Movie/MovieTrailer";
import { Route } from "react-router-dom";
import "./App.css";
import Data from "./Data";

function App() {
  const [cardsInfo, setCardsInfo] = useState(Data);

  //filter with title
  const [title, setTitle] = useState("");
  const searchMovie = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  //filter with rating
  const [clicked, setClicked] = useState(true);
  const [rate, setRate] = useState(0);
  const handleStarRating = (e) => {
    clicked ? setClicked(false) : setClicked(true);
    clicked || e.target.value !== rate ? setRate(e.target.value) : setRate(0);
  };

  return (
    <>
      <Navbar />
      <Route
        exact
        path="/"
        render={() => (
          <>
            <Filter
              title={title}
              handleSearch={searchMovie}
              rate={rate}
              handleStarRating={handleStarRating}
            />
            <MovieList
              cardsInfo={
                Number(rate) && title.length > 0
                  ? cardsInfo.filter(
                      (elm) =>
                        Number(elm.rate) >= Number(rate) &&
                        elm.title.match(new RegExp(`${title}`, "gi"))
                    )
                  : Number(rate)
                  ? cardsInfo.filter((elm) => Number(elm.rate) >= Number(rate))
                  : title.length > 0
                  ? cardsInfo.filter((elm) =>
                      elm.title.match(new RegExp(`${title}`, "gi"))
                    )
                  : cardsInfo
              }
            />
            <AddMovie cardsInfo={cardsInfo} setCardsInfo={setCardsInfo} />
          </>
        )}
      />
      <Route exact path="/:id" component={MovieTrailer} />
      <Route exact path="/" component={Footer}/>
    </>
  );
}

export default App;
