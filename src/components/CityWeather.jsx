import React from "react";
import newyork from '../assets/images/NewYork.jpg'
import newdelhi from '../assets/images/NewDelhi.jpg'
import tokio from '../assets/images/Tokio.jpg'
import prishtina from '../assets/images/Kosova.jpg'
import tirana from '../assets/images/Tirana.jpg'




function CityWeather(){

    const cityArray = ['New York','Tokio','New Delhi','Tirana','Prishtina'];
    const cityTemp = ['12','16','30','15','10'];
    const cityimages = [newyork,tokio,newdelhi,tirana,prishtina];
    return(
        <>
         <section className="overflow-x-auto w-screen m-5 p-2 text-lg flex flex-row justify-evenly sm:flex-nowrap py-1 ">
             
                {cityArray && cityArray.map((city,index) => {
                    return <div key={index} style={{backgroundImage: `url(${cityimages[index]})`}}  className="object-fill m-2 mr-8 pt-4 shrink-0 h-96 hover:text-white  text-gray-400 rounded-full w-60 bg-gradient-to-t hover:from-purple-600 hover:to-purple-600 " >
                       
                        <div className="flex flex-row justify-evenly m-2">
                            <span className="bg-purple-500 text-white p-2 rounded-2xl">{city}</span>
                        </div>
                        <p className="text-5xl text-purple-600 hover:text-white text-center m-2">{cityTemp[index]}°</p>
                       
                    

                      
                    </div>
                })}
            </section>

        </>
    )
}
export default CityWeather;