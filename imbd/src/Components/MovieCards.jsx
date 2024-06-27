import React from "react";

function MovieCards({
  poster_path,
  movieObj,
  name,
  HandleWatchList,
  HandleRemoveWatchList,
  watchList,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => HandleRemoveWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          ❌
        </div>
      ) : (
        <div
          onClick={() => HandleWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          😍
        </div>
      )}

      <div className=" text-white text-xl w-full p-2 text-center bg-gray-900/90">
        {name}
      </div>
    </div>
  );
}

export default MovieCards;

// FOR HOVER EFFECT WITH TWALIND CSS
//    PROPERTY :
//            hover:cursor-pointer  hover:scale-110  duration-300   (the value 300 and 110 is must be in milliseconds)
//            scale for smooth hover effect (i.e: transition)
