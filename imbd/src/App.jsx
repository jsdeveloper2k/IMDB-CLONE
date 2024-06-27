import React, { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";

function App() {
  let [watchList, setWatchList] = useState([]);

  let HandleWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  let HandleRemoveWatchList = (movieObj) => {
    let filterWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchList(filterWatchList);
  };
  useEffect(() => {
    let moviesLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  HandleWatchList={HandleWatchList}
                  HandleRemoveWatchList={HandleRemoveWatchList}
                  watchList={watchList}
                />
              </>
            }
          />
          <Route
            path="/WatchList"
            element={
              <WatchList watchList={watchList} setWatchList={setWatchList} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//    <BrowserRouter>  =>  ENABLES ROUTING IN THE APPLICATION'S BROWSER
//    <Routes>    => USED TO WRAP THE COMPONENTS , WHICH WANT TO BE NAVIGATE
//    <Route>     =>  WHICH WILL SPECIFY THE PATH AND ELEMENT
//       CONTAINS PATH => WHICH WILL MUST HAVE  PATH , WHICH WAS DECLARE IN THE NAVBAR COMPONENTS
//       CONTAINS ELEMENT   => WHICH WAS USED TO SPECIFY THE COMPONENTS , THAT IS WANT TO BE NAVIGATE IN THE BROWSER
