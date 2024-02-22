import React, { useEffect } from "react";
import { useState } from "react";

function ChangeWeatherImage(props){
    
    const [image,setImage] = useState();
   
    const data = props.data;

    function changeImage(){
        if(data.rain>60){
            setImage('./src/assets/images/storm.png')
        
          }
          else if(data.rain>30 && data.rain<60)
          {
            setImage('./src/assets/images/cloudy-rain-sun.png');
          } 
          else if(data.sunny>30 && data.sunny<50)
          {
            setImage('./src/assets/images/cloudy-sun.png');
          } 
          else if(data.snow>30 )
          {
            setImage('./src/assets/images/snowing.png');
          } 
          else if(data.sunny>50)
          {
            setImage('./src/assets/images/sun.png');
          }  else {
            setImage('./src/assets/images/clearsky.png')
          }

    }


useEffect(()=>{
    changeImage();
},[]);


    return(
        <>
        <div>
        <img className="ml-6 w-36 h-28" src={image} /> 
        </div>

        </>
    )
}

export default ChangeWeatherImage;