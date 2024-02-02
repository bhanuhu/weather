import { Box, Stack, Typography } from "@mui/material";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Brightness5SharpIcon from '@mui/icons-material/Brightness5Sharp';
const Third=(props)=>{
    return(
        <Box sx={{backgroundColor:'#202B3B' ,p:'2%',borderRadius:5 , mt:'17%',width:'45%',height:'10%',position:'absolute'}}>
        <Typography>AIR CONDITIONS</Typography>
        <Stack>
        <Stack direction="row">
        <DeviceThermostatIcon/>
        <Typography>Feels Like : {props.feel}</Typography>
        <AirIcon sx={{ml:'30%'}}/>
        <Typography>Wind : {props.wind}</Typography>
        </Stack>
        <Stack direction="row">
        <WaterDropIcon/>
        <Typography>Humidity : {props.humidity}</Typography>
        <Brightness5SharpIcon sx={{ml:'20%'}}/>
        <Typography>Direction : {props.direction} deg</Typography>
        </Stack>
        </Stack>
        
        </Box>
    )
}
export default Third;