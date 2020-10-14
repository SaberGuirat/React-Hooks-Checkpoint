import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import MovieList from "./Components/Movie/MovieList";
import Filter from "./Components/Movie/Filter";
import AddMovie from "./Components/Movie/AddMovie";
import Footer from "./Components/Footer/Footer";

function App() {
  const [cardsInfo, setCardsInfo] = useState([
    {
      title: "Death of Me",
      rate: 1,
      imgSrc: "Assets/death.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.",
      posterUrl:
        "https://amer.egybest.co/movie/death-of-me-2020/?ref=home-new#download",
    },
    {
      title: "A Call to Spy",
      rate: 2,
      imgSrc: "Assets/spy.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.",
      posterUrl:
        "https://amer.egybest.co/movie/a-call-to-spy-2019/?ref=home-new#download",
    },
    {
      title: "Avengers",
      rate: 5,
      imgSrc: "Assets/avengers.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.",
      posterUrl: "https://amer.egybest.co/movie/avengers-endgame-2019#download",
    },
    {
      title: "Mulan",
      rate: 3,
      imgSrc: "Assets/mulan.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.",
      posterUrl:
        "https://amer.egybest.co/movie/mulan-2020/?ref=trends-p1#download",
    },
    {
      title: "I Am Number Four",
      rate: 4,
      imgSrc: "Assets/number4.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.",
      posterUrl:
        "https://amer.egybest.co/movie/i-am-number-four-2011/#download",
    },
    {
      title: "Avatar",
      rate: 5,
      imgSrc: "Assets/avatar.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.",
      posterUrl: "https://amer.egybest.co/movie/avatar-2009/#download",
    },
    {
      title: "King Arthur: Legend of the Sword",
      rate: 4,
      imgSrc: "Assets/kingarthur.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.",
      posterUrl:
        "https://amer.egybest.co/movie/king-arthur-legend-of-the-sword-2017/?ref=home-trends#download",
    },
    {
      title: "Alita: Battle Angel",
      rate: 5,
      imgSrc: "Assets/alita.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.",
      posterUrl:
        "https://amer.egybest.co/movie/alita-battle-angel-2019/#download",
    },
  ]);
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
    <div>
      <Navbar />
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
      <br />
      <Footer />
    </div>
  );
}

export default App;
