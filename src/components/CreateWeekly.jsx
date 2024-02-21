import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useNavigate } from "react-router-dom";
  

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

       const forecastObj ={
        "locationId": id,
        "date": parseInt(date),
        "currenttemp": parseInt(temperature),
        "humidity":parseInt(humidity),
        "rain": parseInt(rain),
        "sunny": parseInt(sun),
        "snow": parseInt(snow)
       } 
            axios.post(`${baseUrl}/weekly`, forecastObj)
            .then((res)=>{
                console.log("It's posted")
                    console.log(res.data);
                    
            })
            .catch((e)=>{
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
    },[])
    return (<>

        <div>
            <h1>Create Weekly</h1>

{/*        
        <Card color="transparent" shadow={false}>
       Add Forecast 
    
      <form onSubmit={handleSubmit} className="mt-8 mb-2  pl-30 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-1 flex flex-col gap-6">
          
            Add Weekly Forecast
           
            
            {locations === null && <p>Loading</p>}
            {locations && 

            <select defaultValue={locationValue}  onChange={(e) => { setLocationId(e.target.value)}} id="location"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value="default">Location</option>
                    
                    {locations.map((location) => {
                        return <option key={location.id} value={location.id}>{location.city}</option>
                    })}

                </select>
                }

          <Input required onChange={(e) => { setDate(e.target.value)}}
            size="lg"
            placeholder="Date: dd/mm/yyyy"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
           
            type="date"
          />

        
         
          <Input required onChange={(e) => { setTemperature(e.target.value)}}
            size="lg"
            placeholder="0"min={-100} max={100}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            
          />
          
          <Input required onChange={(e) => { setHumidity(e.target.value)}}
            type="number"
            size="lg"
            placeholder="0"min={0} max={100}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          />
          
          <Input required onChange={(e) => { setRain(e.target.value)}}
            type="number"
            size="lg"
            placeholder="0"min={0} max={100}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
           
          />

          <Input required onChange={(e) => { setSun(e.target.value)}}
            type="number"
            size="lg"
            placeholder="0"min={0} max={100}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            
          />
         
          <Input required onChange={(e) => { setSnow(e.target.value)}}
            type="number"
            size="lg"
            placeholder="0"min={0} max={100}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
           
          />
        
        </div>
  
        <button type="submit" className="mt-6">
          Create
        </button>
      </form>
     
  
    </Card> */}
            
        </div>
    </>
    )
}

export default CreateWeekly;