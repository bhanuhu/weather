import { Box, Stack, SvgIcon, Typography ,Icon} from "@mui/material"
import React, { useState } from 'react';
import axios from 'axios';
const First=(props)=>{
    const abc=`https://openweathermap.org/img/wn/${props.icon}.png`
   

    return(
        <Box sx={{ mt:'10%'}}> 
        <Stack direction="row">
            <Stack>
                <Typography variant='h2'>{props.name}</Typography>
                <Typography variant='h6'>{props.description}</Typography>
                <Typography variant='h4' sx={{mt:'15%'}}>{props.temp} degree </Typography>
                <Typography variant='h6' sx={{mt:'5%'}}>{props.min} / {props.max} </Typography>

            </Stack>
            <Stack direction="row">
                <Box sx={{position:'relative',alignContent:'center'}}>
                    <Typography variant='h2' sx={{fontSize:150}}>
                        <Icon sx={{height:'350%',width:'250%'}} >
                            <img src={abc} height="100%" width="100%" alt="Weather Icon" />
                        </Icon>
                    </Typography>

                </Box>
                
            </Stack>
        </Stack>
        





        </Box>
    )
        
    
}
export default First;