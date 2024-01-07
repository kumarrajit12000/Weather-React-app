 import { useState } from "react";
import Infobox from "./infoBox";
 import Searchbox from "./searchBox";

 export default function WeatherWidget() {
    const [weather, setWeather] = useState(
        {
            city :"",
            temp : 0,
            temp_max : 0,
            temp_min : 0,
            feels_like : 0,
            humidity :  0,
            weather : 0,
        }
    );
        let updateInfo = (result) => {
            setWeather({
                city : result.city,
                 temp : result.temp,
                 temp_max : result.temp_max,
                 temp_min : result.temp_min,
                 feels_like : result.feels_like,
                 humidity :  result.humidity,
                 weather : result.weather,
            });
        }
    return(<div>
            <Searchbox updateInfo={updateInfo}/>
            
            <Infobox info={weather}/>
    </div>)
 }