import React, { useEffect } from "react";
import { useState } from "react";
import sun from '../assets/images/sun.png';
import snow from '../assets/images/snowing.png'
import cloudyrainsun from '../assets/images/cloudy-rain-sun.png'
import cloudysun from '../assets/images/cloudy-sun.png'
import clearsky from '../assets/images/clearsky.png'

function ChangeWeatherImage(props) {

    const [image, setImage] = useState();

    const data = props.data;

    function changeImage() {
        if (data.rain > 60) {
            setImage(sun)

        }
        else if (data.rain > 30 && data.rain < 60) {
            setImage(cloudyrainsun);
        }
        else if (data.sunny > 30 && data.sunny < 50) {
            setImage(cloudysun);
        }
        else if (data.snow > 30) {
            setImage(snow);
        }
        else if (data.sunny > 50) {
            setImage(sun);
        } else {
            setImage(clearsky)
        }

    }


    useEffect(() => {
        changeImage();
    }, []);


    return (
        <>
            <div>
                <img className="ml-6 w-36 h-28" src={image} />
            </div>

        </>
    )
}

export default ChangeWeatherImage;