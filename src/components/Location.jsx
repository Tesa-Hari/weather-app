import react from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

function Location(props) {
    const [locations, setLocations] = useState(null);
    const baseUrl = "https://weather-api-683l.onrender.com"
    const locationValue = "default";


    function getLocation() {
        axios.get(`${baseUrl}/locations`)
            .then(response => {
                setLocations(response.data)
            })
            .catch(e => {
                console.log(e);
            })
    }
    useEffect(() => {
        getLocation();

    }, [])

    return (
        <div className="p-1 w-24.5 min-w-xs smmax:mt-2">
            {locations === null && <p>Loading</p>}
            {locations && <div>

                <select defaultValue={locationValue} id="location" onChange={(e) => props.callBackLocation(e.target.value)}
                    className="w-full appearance-none bg-purple-500 text-center text-white text-lg rounded-lg hover:bg-purple-700 hover:shadow-lg block w-full p-2.5">
                    <option disabled value="default">Location</option>
                    {locations.map((location) => {
                        return <option className="block border-2 border-white px-4 py-2 hover:text-gray-500" key={location.id} value={location.id}>{location.city}</option>
                    })}

                </select>

            </div>}
        </div>
    )

}

export default Location;