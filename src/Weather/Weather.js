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


const Weather=()=>{
    return(<Box sx={{backgroundColor:'#0B131E',color:'white' , position:'absolute',height:'100%',width:'100%'}}>
        <Stack direction="row">
        <Box sx={{backgroundColor:'#202B3B' ,m:'2%',p:'2%',borderRadius:5,position:'absolute',height:'80%',width:'7%'}}>
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
        <Box sx={{width:'30%'}}>
            <Stack>
                <Navbar />
                <Box>
                    <First/>
                </Box>
                <Box>
                    <Second/>
                </Box>
                <Box>
                    <Third/>
                </Box>       
            </Stack>
        </Box>
        <Box sx={{width:'25%'}}>
            <Forecast/>
        </Box>        
        </Stack>
        
        </Box>)
}
export default Weather;