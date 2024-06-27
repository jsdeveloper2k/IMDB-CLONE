import React from "react";

function PageNation({pageNo, handlePrev , handleNext}) {
  return (
    <div className="bg-gray-400  flex justify-center p-4 mt-6 ">
        <div onClick={handlePrev} className="px-8 hover:cursor-pointer"> <i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className="px-8  hover:cursor-pointer"> <i class="fa-solid fa-arrow-right"></i></div>
    </div>
  );
}

export default PageNation;
