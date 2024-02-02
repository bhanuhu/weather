import { Box, Stack ,Button, Typography} from "@mui/material"
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import Navbar from './Navbar';
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Forecast from "./Forecast";
import { useContext, useEffect, useState } from "react";
import Notecontext from "../Context/Notecontext";
import axios from 'axios';
const Weather=()=>{
    const [childData, setChildData] = useState('shimla');
    const handleChildData = (dataFromChild) => {
        console.log("data from child: ", dataFromChild);
        setChildData(dataFromChild);
        
      };
  const [weatherData, setWeatherData] = useState(null);
  const getWeather = async () => {
    try {
        console.log("asd",childData)
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${childData}&appid=730a8e9a44eabe53edbe9477cd0bfb50`);
      console.log("assdd",response.data)
      setWeatherData(response.data);
     
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };
  useEffect(()=>{
    getWeather();
  },[childData])



    const a=useContext(Notecontext);
    return(<Box>
        { weatherData!==null ?
         <Box sx={{backgroundColor:'#0B131E',color:'white' , position:'absolute',height:'100%',width:'100%'}}>
        <Stack direction="row">
        <Box sx={{backgroundColor:'#202B3B' ,m:'2%',p:'2%',borderRadius:5,height:'80%',width:'7%'}}>
            <Stack >
                <CloudIcon sx={{ml:'30%' , fontSize:'200%'}} />
                <Button sx={{mt:'30%' , color:'white'}}>
                    <Stack direction="row">
                    <ThunderstormIcon sx={{mr:'5%'}}/>
                    <Typography>Weather</Typography>
                    </Stack>
                </Button>
                <Button sx={{mt:'30%', color:'white'}}>
                    <Stack direction="row">
                    <LocationOnIcon sx={{mr:'5%'}}/>
                    <Typography>Cities</Typography>
                    </Stack>

                </Button>
                <Button sx={{mt:'30%', color:'white'}}>
                    <Stack direction="row">
                    <SettingsIcon sx={{mr:'5%'}}/>
                    <Typography>Settings</Typography>
                    </Stack>

                </Button>

            </Stack>
        </Box>
        <Box sx={{width:'26%'}}>
            <Stack>
                <Navbar sendDataToParent={handleChildData}  />
                <Box>
                    <First name={weatherData.city.name} temp={weatherData.list[0].main.temp} description={weatherData.list[0].weather[0].description} icon={weatherData.list[0].weather[0].icon} max={weatherData.list[0].main.temp_max} min={weatherData.list[0].main.temp_min}/>
                </Box>
                <Box>
                    <Second icon1={weatherData.list[0].weather[0].icon} temp1={weatherData.list[0].main.temp}
                    time1={weatherData.list[0].dt} icon2={weatherData.list[1].weather[0].icon} temp2={weatherData.list[1].main.temp}
                    time2={weatherData.list[1].dt} icon3={weatherData.list[2].weather[0].icon} temp3={weatherData.list[2].main.temp}
                    time3={weatherData.list[2].dt} icon4={weatherData.list[3].weather[0].icon} temp4={weatherData.list[3].main.temp}
                    time4={weatherData.list[3].dt} icon5={weatherData.list[4].weather[0].icon} temp5={weatherData.list[4].main.temp}
                    time5={weatherData.list[4].dt} icon6={weatherData.list[5].weather[0].icon} temp6={weatherData.list[5].main.temp}
                    time6={weatherData.list[5].dt}
                     />
                </Box>
                <Box>
                    <Third feel={weatherData.list[0].main.feels_like}
                    humidity={weatherData.list[0].main.humidity}
                    wind={weatherData.list[0].wind.speed}
                    direction={weatherData.list[0].wind.deg}

                    />
                </Box>       
            </Stack>
        </Box>
        <Box sx={{width:'25%'}}>
            <Forecast/>
        </Box>        
        </Stack>
        
        </Box>:<></>}
        </Box>
        
        )
}
export default Weather;