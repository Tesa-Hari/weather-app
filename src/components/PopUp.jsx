import React from "react";

function Popup({ data, closePopup }) {
  return (
  
     <div className="smmax:w-[100vw] smmax:h-[100vh]  smmax:top-0 smmax:bottom-0 smmax:right-0 smmax:left-0 w-[30vw] h-[50vh] absolute border border-black text-black left-1/3 right-1/3 bottom-1/3 top-1/3 p-5 text-center m-auto rounded-lg bg-white">
     <div className="flex flex-col text-purple-700 text-xl">
      <label>Min Temp : <span> {data.mintemp} </span></label>
      <label>Max Temp : <span> {data.maxtemp} </span></label>
      <label>Humdidity : <span> {data.humidity} </span></label>
      <label>Rain : <span> {data.rain} </span></label>
      <label>Snow : <span> {data.snow} </span></label>
      <label>Sun : <span> {data.sunny} </span></label>
      <label>Wind Speed : <span> {data.windspeed} </span></label>
     </div>
     <button className="bg-gray-300 hover:bg-gray-400 mt-4 text-gray-800 font-bold py-2 px-4 rounded-l w-24" onClick={closePopup}>Close</button>

     </div>
 
  );
};

export default Popup;