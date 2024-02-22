import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


function CreateWeekly() {

  const [locations, setLocations] = useState(null);
  const [date, setDate] = useState(null);
  const [locationId, setLocationId] = useState(null);
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [rain, setRain] = useState();
  const [sun, setSun] = useState();
  const [snow, setSnow] = useState();
  const navigate = useNavigate();

  const baseUrl = "https://weatherapi.adaptable.app"
  const locationValue = "default";


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = parseInt(locationId);
    console.log(locationId);

    const forecastObj = {
      "locationId": id,
      "date": date,
      "currenttemp": parseInt(temperature),
      "humidity": parseInt(humidity),
      "rain": parseInt(rain),
      "sunny": parseInt(sun),
      "snow": parseInt(snow)
    }
    axios.post(`${baseUrl}/weekly`, forecastObj)
      .then((res) => {
        console.log("It's posted")
        console.log(res.data);

      })
      .catch((e) => {
        console.log("Error, ", e);
      })
    setDate();
    setLocationId();
    setTemperature();
    setHumidity();
    setRain();
    setSnow();
    setSun();

    //
    navigate("/");

  }

  useEffect(() => {
    axios.get(`${baseUrl}/locations`)
      .then(response => {
        setLocations(response.data)
      })
      .catch(e => {
        console.log(e);
      })
  }, [])
  return (<div className="h-100 mb-20">
  <NavLink to="/" className="text-2xl text-violet-600 block mb-4 hover:text-purple">Home</NavLink>
    <h1 className="text-center text-2xl text-blue-400">Add Forecast</h1>
    <div className="flex h-100 justify-center ">
      <form onSubmit={handleSubmit} className="mt-8 mb-2  pl-30 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-1 flex flex-col gap-6 ">
          {locations === null && <p>Loading</p>}
          {locations &&
            <select required className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"  onChange={(e) => { setLocationId(e.target.value) }} id="location">
              <option disabled  selected value="">Location</option>
              {locations.map((location) => {
                return <option  key={location.id} value={location.id}>{location.city}</option>
              })}
            </select>
          }
          <label  className="text-purple-700 text-lg">Date
          <input className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" required onChange={(e) => { setDate(e.target.value) }}
            size="lg"
            placeholder="Date: dd/mm/yyyy"
            type="date"
          /></label>
          <label  className="text-purple-700 text-lg" >Temperature
          <input type="number" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" required onChange={(e) => { setTemperature(e.target.value) }}
            size="lg"
            placeholder="0" min={-100} max={100}
          /></label>
          <label  className="text-purple-700 text-lg">Humidity
          <input className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" required onChange={(e) => { setHumidity(e.target.value) }}
            type="number"
            size="lg"
            placeholder="0" min={0} max={100}
          /></label>
          <label  className="text-purple-700 text-lg">Rain
          <input className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" required onChange={(e) => { setRain(e.target.value) }}
            type="number"
            size="lg"
            placeholder="0" min={0} max={100}
          /></label>
          <label  className="text-purple-700 text-lg">Sun
          <input className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" required onChange={(e) => { setSun(e.target.value) }}
            type="number"
            size="lg"
            placeholder="0" min={0} max={100}
          /></label>
          <label  className="text-purple-700 text-lg">Snow
          <input className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" required onChange={(e) => { setSnow(e.target.value) }}
            type="number"
            size="lg"
            placeholder="0" min={0} max={100}
          /></label>
        </div>
        <div className="flex justify-center mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>
      </form>

    </div>
  </div>
  )
}

export default CreateWeekly;