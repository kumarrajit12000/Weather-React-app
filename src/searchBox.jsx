import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbox({updateInfo}) {
   let API_URL = "https://api.openweathermap.org/data/2.5/weather";
   let API_KEY = "5f6f5d5249fab277ae3cc561f91a20bf";

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    let getWeather = async () => {
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let resJson = await res.json();
            
            let result = {
                city : city,
                temp : resJson.main.temp,
                temp_max :  resJson.main.temp_max,
                temp_min :  resJson.main.temp_min,
                feels_like :  resJson.main.feels_like,
                humidity :  resJson.main.humidity,
                weather :  resJson.weather[0].main,
            }
            return result;
        } catch(err) {
        throw err;
        }
      
    }
    let getWeatherFirst = async () => {
        try{
            let res = await fetch(`${API_URL}?q=Delhi&appid=${API_KEY}&units=metric`);
            let resJson = await res.json();
            
            let result = {
                city : 'Delhi',
                temp : resJson.main.temp,
                temp_max :  resJson.main.temp_max,
                temp_min :  resJson.main.temp_min,
                feels_like :  resJson.main.feels_like,
                humidity :  resJson.main.humidity,
                weather :  resJson.weather[0].main,
            }
            return result;
        } catch(err) {
        throw err;
        }
      
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = async(evt) => {
        try {
            evt.preventDefault();
            setCity("");
            setError(false);
            let newInfo = await getWeather();
            updateInfo(newInfo);
        }catch(err) {
            setError(true);
        }
       
    }

    useEffect(()=> {
       let firstCall = async() => {
            try {
                let newInfo = await getWeatherFirst();
                updateInfo(newInfo);
            }catch(err) {
                console.log(err);
            }
        }
        firstCall();
    },[]);

    const flash = () => {
        toast.warn('🦄 No such palce in API!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    return(<div style={{marginBottom :"25px"}}>
                <h2>SEARCH FOR WEATHER_INFO</h2>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} required/><br></br><br></br>
            {error && flash && <p style={{margin : 'auto'}}>No Such place in API!</p>}
            <Button variant="contained" type='submit'>Search</Button>
            
            </form>
            <ToastContainer />
    </div>)
}