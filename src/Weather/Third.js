import { Box, Stack, Typography } from "@mui/material";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Brightness5SharpIcon from '@mui/icons-material/Brightness5Sharp';
const Third=()=>{
    return(
        <Box sx={{backgroundColor:'#202B3B' ,m:'2%',p:'2%',borderRadius:5,ml:'60%' , mt:'10%',width:'100%',height:'100%'}}>
        <Typography>AIR CONDITIONS</Typography>
        <Stack>
        <Stack direction="row">
        <DeviceThermostatIcon/>
        <Typography>Real Feel</Typography>
        <AirIcon sx={{ml:'30%'}}/>
        <Typography>Wind</Typography>
        </Stack>
        <Stack direction="row">
        <WaterDropIcon/>
        <Typography>Chance of Rain</Typography>
        <Brightness5SharpIcon sx={{ml:'20%'}}/>
        <Typography>UV Index</Typography>
        </Stack>
        </Stack>
        
        </Box>
    )
}
export default Third;