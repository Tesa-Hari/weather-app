import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


function UpdateWeekly() {

  const location = useLocation();
  const data = location.state;
  const [temperature, setTemperature] = useState(data.currenttemp);
  const [humidity, setHumidity] = useState(data.humidity);
  const [rain, setRain] = useState(data.rain);
  const [sun, setSun] = useState(data.sunny);
  const [snow, setSnow] = useState(data.snow);
  const navigate = useNavigate();

  console.log("Data is ", data);
  console.log("Temps is: ", temperature);

  const baseUrl = "https://weatherapi.adaptable.app"

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    const forecastObj = {
      "date": data.date,
      "locationId": data.locationId,
      "currenttemp": parseInt(temperature),
      "humidity": parseInt(humidity),
      "rain": parseInt(rain),
      "sunny": parseInt(sun),
      "snow": parseInt(snow)
    }
    axios.put(`${baseUrl}/weekly/${data.id}`, forecastObj)
      .then((res) => {
        console.log("It's put")
        console.log(res.data);

      })
      .catch((e) => {
        console.log("Error, ", e);
      })

    setTemperature();
    setHumidity();
    setRain();
    setSnow();
    setSun();

    //
    navigate("/", { state: data.locationId });

  }

  return (
    <>

      {/* form */}
      <h1 className="text-center text-2xl text-blue-400">Update Weekly</h1>
      <div  className="flex justify-center">
      
        <form onSubmit={handleSubmit} className="mt-8 mb-2  pl-30 w-80 max-w-screen-lg sm:w-96 ">
          <div className="mb-1 flex flex-col gap-6">
            <label className="text-purple-700 text-lg">Temperature</label>
            <input value={temperature} required onChange={(e) => { setTemperature(e.target.value) }}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
              size="lg"
              placeholder="0" min={-100} max={100}
            />
            <label  className="text-purple-700 text-lg">Humidity</label>
            <input value={humidity} required onChange={(e) => { setHumidity(e.target.value) }}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
              type="number"
              size="lg"
              placeholder="0" min={0} max={100}
            />
            <label  className="text-purple-700 text-lg" >Rain</label>
            <input value={rain} required onChange={(e) => { setRain(e.target.value) }}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
              type="number"
              size="lg"
              placeholder="0" min={0} max={100}
            />
            <label  className="text-purple-700 text-lg">Sun</label>
            <input value={sun} required onChange={(e) => { setSun(e.target.value) }}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
              type="number"
              size="lg"
              placeholder="0" min={0} max={100}
            />
            <label  className="text-purple-700 text-lg">Snow</label>
            <input value={snow} required onChange={(e) => { setSnow(e.target.value) }}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
              type="number"
              size="lg"
              placeholder="0" min={0} max={100}
            />
          </div>

          <div className="flex justify-center mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default UpdateWeekly;