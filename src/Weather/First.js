import { Box, Stack, Typography } from "@mui/material"

const First=()=>{
    return(
        <Box sx={{ml:'60%' , mt:'10%'}}> 
        <Stack direction="row">
        <Stack>
        <Typography variant='h2'>Madrid</Typography>
        <Typography variant='h6'>Chance of Rain</Typography>
        <Typography variant='h4' sx={{mt:'15%'}}>30</Typography>
        </Stack>
        <Box sx={{position:'relative',alignContent:'center'}}>
        <Typography variant='h2' >Hello</Typography>
        </Box>
        </Stack>
        





        </Box>
    )
        
    
}
export default First;