import React from "react";
// import newyork from '../assets/images/NewYork.jpg'
// import newdelhi from '../assets/images/NewDelhi.jpg'
// import tokio from '../assets/images/Tokio.jpg'
// import prishtina from '../assets/images/Kosova.jpg'
// import tirana from '../assets/images/Tirana.jpg'
import newyork from '../assets/images/NewYork.jpg'
import newdelhi from '../assets/images/NewDelhi.jpg'
import tokio from '../assets/images/Tokio.jpg'
import prishtina from '../assets/images/Kosova.jpg'
import tirana from '../assets/images/Tirana.jpg'
import munich from '../assets/images/Munich.jpg'




function CityWeather(){

    const cityArray = ['New York','Tokio','New Delhi','Tirana','Prishtina','Munich'];
    const cityTemp = ['12','16','30','15','10','8'];
    const cityimages = [newyork,tokio,newdelhi,tirana,prishtina,munich];
    return(
        <>


<section className="bg-gray-50 mb-5">
<h2 className="text-center p-5 text-2xl font-bold text-purple-400 sm:text-xl">Explore Top Destinations Recommended by Our Weather Forecast</h2>
  <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
      {cityArray.map((city, index) => (
        <div key={index} className="-mx-6 lg:mx-0">
          <div className="keen-slider__slide">
            <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
              <div>
                <div className="flex gap-0.5 text-green-500">
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-purple-400 sm:text-xl">{city}</p>
                  <img src={cityimages[index]} alt={city} className="w-full mt-4 h-auto" />
                  <p className="mt-4 leading-relaxed text-violet-300">
                    {cityTemp[index]}°
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
           

        </>
    )
}
export default CityWeather;