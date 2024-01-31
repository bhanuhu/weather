import { Box, Divider, Stack, Typography } from "@mui/material";

const Second=()=>{
    return(
        <Box sx={{backgroundColor:'#202B3B' ,m:'2%',p:'2%',borderRadius:5,ml:'60%' , mt:'10%',width:'100%',height:'100%'}}>
        <Typography>Today's Forecast</Typography>
        <Stack align="center"  direction="row" sx={{height:100 }}>
        <Stack><Typography>6:00 AM</Typography><Typography>hello</Typography><Typography>hello</Typography></Stack>
        <Divider variant="middle" orientation="vertical" sx={{backgroundColor:"white",m:'1%'}}/>
        <Stack><Typography>9:00 AM</Typography><Typography></Typography></Stack>
        <Divider variant="middle" orientation="vertical" sx={{backgroundColor:"white",m:'1%'}}/>
        <Stack><Typography>12:00 PM</Typography><Typography></Typography></Stack>
        <Divider variant="middle" orientation="vertical" sx={{backgroundColor:"white",m:'1%'}}/>
        <Stack><Typography>3:00 PM</Typography><Typography></Typography></Stack>
        <Divider variant="middle" orientation="vertical" sx={{backgroundColor:"white",m:'1%'}}/>
        <Stack><Typography>6:00 PM</Typography><Typography></Typography></Stack>
        <Divider variant="middle" orientation="vertical" sx={{backgroundColor:"white",m:'1%'}}/>
        <Stack><Typography>9:00 PM</Typography><Typography></Typography></Stack>
        </Stack>


        </Box>
    )
}
export default Second;