import { Box, Button, Stack, Typography } from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
const Front=()=>{
    return(<Box sx={{backgroundColor:'#0B131E',color:'white' , position:'absolute',height:'100%',width:'100%'}}>
    <Stack direction="row">
        <Box sx={{backgroundColor:'#202B3B' ,m:'2%',p:'2%',mr:'50%',borderRadius:5,position:'absolute',height:'80%',width:'40%',zIndex:1}}>
        
        
        <CloudIcon sx={{fontSize:'2110%' , ml:'19%',mt:'7%'}}/>

        </Box>
        
        <Box sx={{m:'2%',zIndex:1,ml:'70%',alignContent:'center',mt:'10%'}}>
        <CloudIcon sx={{fontSize:'1110%' , ml:'-10%'}}/>
        <Typography variant="h3" sx={{ml:'-29%'}}>WeatherWhiz</Typography>
        <Typography variant="h6">Weather App</Typography>

            <Button variant="contained" sx={{mt:'10%',borderRadius:5}}>Get Started</Button>
        
        </Box>
        </Stack>
       
        </Box>)
}
export default Front;