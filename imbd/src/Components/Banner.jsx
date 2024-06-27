import React from "react";

function Banner() {
  return (
    <div
      className="h-[25vh] md:h-[75vh]  bg-cover bg-center  flex items-end"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/23/26/c5/2326c5a4ded3fcdf3c80ad237ab46b3f.jpg)`,
      }}
    >
      <div className="text-white text-2xl text-center w-full bg-gray-900/100 p-1">
        Avengers EndGame
      </div>
    </div>
  );
}

export default Banner;

// INLINE STYLING  IN REACT SHOULD BE DECLARATION OF OBJECTS (I.E:KEY VALUE PAIR)
// FOR HOVER EFFECT WITH TWALIND CSS
//    PROPERTY :
//            hover:cursor-pointer  hover:scale-110  duration-300   (the value 300 and 110 is must be in milliseconds)
//            scale for smooth hover effect (i.e: transition)
