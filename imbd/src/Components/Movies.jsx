import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import axios from "axios";
import PageNation from "./PageNation";

function Movies({ HandleWatchList, HandleRemoveWatchList , watchList}) {
  const [movie, setMovie] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo([pageNo - 1]);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://api.themoviedb.org/3/movie/popular?api_key=9ac2012c9ea9c1702f362bccd9403b73&language=en-US&page=${pageNo}`
  //     )
  //     .then((response) => {
  //       setMovie(response.data.results);
  //     });
  // }, [pageNo]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://api.themoviedb.org/3/movie/popular?api_key=9ac2012c9ea9c1702f362bccd9403b73&language=en-US&page=${pageNo}`
        );
        setMovie(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
  
    fetchMovies();
  }, [pageNo]);
  

  return (
    <div className="p-5">
      <div className="text-center text-2xl m-5 font-bold ">TRENDING MOVIES</div>
      <div className="flex flex-row flex-wrap  justify-around  gap-5">
        {movie.map((movieObj) => {
          return (
            <MovieCards
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              HandleWatchList={HandleWatchList}
              HandleRemoveWatchList={HandleRemoveWatchList}
              movieObj={movieObj}
              watchList={watchList}
            />
          );
        })}
      </div>
      <PageNation
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;

// http://api.themoviedb.org/3/movie/popular?api_key=9ac2012c9ea9c1702f362bccd9403b73&language=en-US&page=1
