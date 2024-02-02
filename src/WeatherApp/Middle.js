import { Box, Card, CardBody, CardHeader, Heading, Text, StackDivider, Stack, Image } from '@chakra-ui/react'
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@chakra-ui/react'
import SimpleDateTime from 'react-simple-timestamp-to-date';



const Middle = (props) => {
    const childData = props.childData;
    const[celsius,setcelsius]=useState('C')
    const[windspeed,setwindspeed]=useState('meter/sec')
    const unit=props.unit;
    const [aunit,setaunit]=useState('metric')
    const cunit=()=>{
        if(unit==true){   
            setaunit('imperial')
            setcelsius('F')
            setwindspeed('miles/hour')
        }
        else{
            setaunit('metric')
            setcelsius('C')
            setwindspeed('meter/sec')

        }
    }
    const[err,seterr]=useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const getWeather = async () => {
        try {
            console.log("asd", childData)
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${childData}&appid=730a8e9a44eabe53edbe9477cd0bfb50&units=${aunit}`);
            setWeatherData(response.data);
            seterr(false);

        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
            seterr(true);
        }
    };
    useEffect(() => {
        getWeather();
        cunit();
    }, [childData,unit,aunit,celsius,windspeed])




    return (<Box mt={{ base: "7rem", md: 0 }}>{err?<div style={{color:'white'}}>Such City do not exist</div>:<Box>
        {weatherData !== null ?
            <Box sx={{ ml: "5%", mt: '5%' }}>

                <Stack direction="row">
                    <Box sx={{ mr: '45%', ml: "5%" }}>
                        <Heading color="white" as="h2">{weatherData.city.name} </Heading>
                        <Text color="white" sx={{ ml: '10%' }}>
                            {weatherData.list[0].weather[0].description}
                        </Text>
                        <Text color="white" mt="10px" fontSize="20px"> {weatherData.list[0].main.temp}&deg; {celsius}</Text>
                        <Text color="white">
                            {weatherData.list[0].main.temp_max}&deg; {celsius}/{weatherData.list[0].main.temp_min}&deg; {celsius}
                        </Text>
                    </Box>


                    <Image src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`} height={{ base: "50%", md: "55%" }} width={{ base: "50%", md: "45%" }} alt="Weather Icon" />

                </Stack>
                <Box sx={{ mt: "5%" }} w={{ base: "100%" }}>
                    <Card sx={{ backgroundColor: '#202B3B', color: 'white', borderRadius: 10 }} width={{ base: "97%", md: "35rem" }} >
                        <CardHeader  >
                            Today's Forecast
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} direction="row" spacing='4'>
                                <Box>
                                    <Heading size='xs' Fontsize={{base:" "}} textTransform='uppercase'>
                                        <SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{weatherData.list[0].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`} height={10} alt="Weather Icon" />

                                    <Text pt='2' Fontsize={{base:" "}}>
                                        {weatherData.list[0].main.temp}&deg; {celsius}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase' Fontsize={{base:" "}}>
                                        <SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{weatherData.list[1].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}.png`} height="100%" width="100%" alt="Weather Icon" />

                                    <Text pt='2' Fontsize={{base:" "}}>
                                        {weatherData.list[1].main.temp}&deg; {celsius}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size='xs' Fontsize={{base:" "}} textTransform='uppercase'>
                                        <SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{weatherData.list[2].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[2].weather[0].icon}.png`} height="100%" width="100%" alt="Weather Icon" />

                                    <Text pt='2'Fontsize={{base:" "}}>
                                        {weatherData.list[2].main.temp}&deg; {celsius}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size='xs' Fontsize={{base:" "}} textTransform='uppercase'>
                                        <SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{weatherData.list[3].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[3].weather[0].icon}.png`} height="100%" width="100%" alt="Weather Icon" />

                                    <Text pt='2' Fontsize={{base:" "}}>
                                        {weatherData.list[3].main.temp}&deg; {celsius}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size='xs' Fontsize={{base:" "}} textTransform='uppercase'>
                                        <SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{weatherData.list[4].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[4].weather[0].icon}.png`} height="100%" width="100%" alt="Weather Icon" />

                                    <Text pt='2' Fontsize={{base:" "}}>
                                        {weatherData.list[4].main.temp}&deg; {celsius}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size='xs' Fontsize={{base:" "}} textTransform='uppercase'>
                                        <SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{weatherData.list[5].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[5].weather[0].icon}.png`} height="100%" width="100%" alt="Weather Icon" />

                                    <Text pt='2' Fontsize={{base:" "}}>
                                        {weatherData.list[5].main.temp}&deg; {celsius}
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
                <Box w={{ base: "100%" }}>
                    <Card sx={{ backgroundColor: '#202B3B', color: 'white', mt: '2%', borderRadius: 10 }} w={{ base: "90%", md: "110%" }}>
                        <CardHeader>
                            Air Conditions
                        </CardHeader>
                        <CardBody>
                            <Stack spacing='4' align='left'>
                                <Stack direction="row">
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Feels Like
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {weatherData.list[0].main.feels_like}&deg; {celsius}
                                        </Text>
                                    </Box>
                                    <Box ml={{ base: "auto", md: "50%" }}>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Wind
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {weatherData.list[0].wind.speed} {windspeed}
                                        </Text>
                                    </Box>
                                </Stack><Stack direction="row">
                                    <Box >
                                        <Heading size='xs' textTransform='uppercase'>
                                            Humidity
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {weatherData.list[0].main.humidity}
                                        </Text>
                                    </Box>
                                    <Box ml={{ base: "auto", md: "50%" }}>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Direction
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {weatherData.list[0].wind.deg}&deg;
                                        </Text>
                                    </Box></Stack>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
            </Box> : <></>}</Box>}
    </Box>

    )
}

export default Middle