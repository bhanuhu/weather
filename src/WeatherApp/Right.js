import { Box, Card, CardBody, CardHeader, Heading, Text, StackDivider, Stack } from '@chakra-ui/react'
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@chakra-ui/react'
import SimpleDateTime from 'react-simple-timestamp-to-date';



const Middle = (props) => {
    
    const[celsius,setcelsius]=useState('C')
    const unit=props.unit;
    const [aunit,setaunit]=useState('metric')
  
    const cunit=()=>{
        if(unit==true){   
            setaunit('imperial')
            setcelsius('F')
        }
        else{
            setaunit('metric')
            setcelsius('C')

        }
    }
    const childData = props.childData;
    const [weatherData, setWeatherData] = useState(null);
    const getWeather = async () => {
        try {
            console.log("asd", childData)
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${childData}&appid=730a8e9a44eabe53edbe9477cd0bfb50&units=${aunit}`);
            console.log("assdd", response.data)
            setWeatherData(response.data);

        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
        }
    };
    useEffect(() => {
        getWeather();
        cunit();
    }, [childData,unit,celsius,aunit])




    return (<Box>
        {weatherData !== null ?
            <Box ml={{ md: "45%" }} mr={{ md: "-45%" }} mt={{ md: "5%" }}>


                <Box sx={{ mt: "5%" }}>
                    <Card sx={{ backgroundColor: '#202B3B', color: 'white', borderRadius: 10 }} w={{ md: "200%", base: "90%" }} m={{ base: "auto" }}>
                        <CardHeader  >
                            5 Day Forecast
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Stack direction="row">
                                    <Heading size='xs' textTransform='uppercase'>

                                        <SimpleDateTime showTime='0' dateFormat="DMY" timeSeparator=":">{weatherData.list[6].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[6].weather[0].icon}.png`} height="10%" width="15%" alt="Weather Icon" />

                                    <Text pt='2' fontSize='sm'>
                                        {weatherData.list[6].main.temp}&deg; {celsius}
                                    </Text>
                                </Stack>
                                <Stack direction="row">
                                    <Heading size='xs' textTransform='uppercase'>
                                        <SimpleDateTime showTime='0' dateFormat="DMY" timeSeparator=":">{weatherData.list[14].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[14].weather[0].icon}.png`} height="10%" width="15%" alt="Weather Icon" />

                                    <Text pt='2' fontSize='sm'>
                                        {weatherData.list[14].main.temp}&deg; {celsius}
                                    </Text>
                                </Stack>
                                <Stack direction="row">
                                    <Heading size='xs' textTransform='uppercase'>
                                        <SimpleDateTime showTime='0' dateFormat="DMY" timeSeparator=":">{weatherData.list[22].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[22].weather[0].icon}.png`} height="100%" width="15%" alt="Weather Icon" />

                                    <Text pt='2' fontSize='sm'>
                                        {weatherData.list[22].main.temp}&deg; {celsius}
                                    </Text>
                                </Stack>
                                <Stack direction="row">
                                    <Heading size='xs' textTransform='uppercase'>
                                        <SimpleDateTime showTime='0' dateFormat="DMY" timeSeparator=":">{weatherData.list[30].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[30].weather[0].icon}.png`} height="100%" width="15%" alt="Weather Icon" />

                                    <Text pt='2' fontSize='sm'>
                                        {weatherData.list[30].main.temp}&deg; {celsius}
                                    </Text>
                                </Stack>
                                <Stack direction="row">
                                    <Heading size='xs' textTransform='uppercase'>
                                        <SimpleDateTime showTime='0' dateFormat="DMY" timeSeparator=":">{weatherData.list[38].dt}</SimpleDateTime>
                                    </Heading>

                                    <img src={`https://openweathermap.org/img/wn/${weatherData.list[38].weather[0].icon}.png`} height="100%" width="15%" alt="Weather Icon" />

                                    <Text pt='2' fontSize='sm'>
                                        {weatherData.list[38].main.temp}&deg; {celsius}
                                    </Text>
                                </Stack>

                            </Stack>
                        </CardBody>
                    </Card>
                </Box>

            </Box> : <></>}
    </Box>

    )
}

export default Middle