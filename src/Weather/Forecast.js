import { Box, Divider, Stack, Typography } from "@mui/material";


const Forecast=()=>{
    return(
        <Box sx={{backgroundColor:'#202B3B' ,m:'2%',p:'2%',borderRadius:5,ml:'110%' , mt:'10%',width:'100%',height:'100%'}}>
        <Typography sx={{m:'4%',ml:'6%'}}>Forecast</Typography>
        <Stack >
        <Typography>Monday</Typography>
        <Divider variant="middle" sx={{backgroundColor:"white",m:'1%'}}/>
        <Typography>Tuesday</Typography>
        <Divider variant="middle" sx={{backgroundColor:"white",m:'1%'}}/>
        <Typography>Wednesday</Typography>
        <Divider variant="middle" sx={{backgroundColor:"white",m:'1%'}}/>
        <Typography>Thursday</Typography>
        <Divider variant="middle" sx={{backgroundColor:"white",m:'1%'}}/>
        <Typography>Friday</Typography>
       
        </Stack>

        </Box>
    )
}
export default Forecast;