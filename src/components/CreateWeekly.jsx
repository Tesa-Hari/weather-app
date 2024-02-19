import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import Location from "./Location";
  

 


function CreateWeekly() {

    const [locations, setLocations] = useState(null);
    const baseUrl = "https://weatherapi.adaptable.app"
    const locationValue = "default";

    const handleSubmit = (e) => {
        e.preventDefault();
      }  

      useEffect(() => {
        axios.get(`${baseUrl}/locations`)
            .then(response => {
                setLocations(response.data)
            })
            .catch(e => {
                console.log(e);
            })
    })

    return (<>

        <div>
            <h1>Create Weekly</h1>

       
        <Card color="transparent" shadow={false}>
      <Typography color="gray" className="mt-5 font-normal">
       Add Forecast 
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2  pl-30 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Add Weekly Forecast
            </Typography>
            {/* location */}
            {locations === null && <p>Loading</p>}
            {locations && 

            <select defaultValue={locationValue} id="location" 
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value="default">Location</option>
                    {locations.map((location) => {
                        return <option key={location.id} value={location.id}>{location.city}</option>
                    })}

                </select>
                }

          <Input
        //   date
            size="lg"
            placeholder="Date: dd/mm/yyyy"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
           
            }}
            type="date"
          />

        
          {/* Temperature */}
          <Input
            size="lg"
            placeholder="0"min={-100} max={100}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* humidity */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            {/* Humidity */}
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="0"min={0} max={100}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* Rain */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            {/* Humidity */}
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="0"min={0} max={100}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* Sun */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            {/* Sun */}
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="0"min={0} max={100}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* Snow */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            {/* Snow */}
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="0"min={0} max={100}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
  
        <Button className="mt-6" fullWidth>
          Create
        </Button>
  
      </form>
    </Card>
            
        </div>
    </>
    )
}

export default CreateWeekly;