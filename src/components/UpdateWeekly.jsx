import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
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

      <div>
        <h1>Update Weekly</h1>


        {/* <Card color="transparent" shadow={false}>
          <form onSubmit={handleSubmit} className="mt-8 mb-2  pl-30 w-80 max-w-screen-lg sm:w-96 ">
            <div className="mb-1 flex flex-col gap-6">
           
              <label >Temp</label>
              <Input value={temperature} required onChange={(e) => { setTemperature(e.target.value) }}
                size="lg"
                placeholder="0" min={-100} max={100}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
          
              <Input value={humidity} required onChange={(e) => { setHumidity(e.target.value) }}
                type="number"
                size="lg"
                placeholder="0" min={0} max={100}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <label >Rain</label>
              <Input value={rain} required onChange={(e) => { setRain(e.target.value) }}
                type="number"
                size="lg"
                placeholder="0" min={0} max={100}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            
              <label >Sun</label>
              <Input value={sun} required onChange={(e) => { setSun(e.target.value) }}
                type="number"
                size="lg"
                placeholder="0" min={0} max={100}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <label >Snow</label>
            
              <Input value={snow} required onChange={(e) => { setSnow(e.target.value) }}
                type="number"
                size="lg"
                placeholder="0" min={0} max={100}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <button type="submit" className="mt-6" fullWidth>
              Update
            </button>
          </form>
        </Card> */}
      </div>
    </>
  )
}
export default UpdateWeekly;