import { Box, Divider, Stack, Typography,Icon } from "@mui/material";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
const Second=(props)=>{

    const icon1=`https://openweathermap.org/img/wn/${props.icon1}.png`
    const icon2=`https://openweathermap.org/img/wn/${props.icon2}.png`
    const icon3=`https://openweathermap.org/img/wn/${props.icon3}.png`
    const icon4=`https://openweathermap.org/img/wn/${props.icon4}.png`
    const icon5=`https://openweathermap.org/img/wn/${props.icon5}.png`
    const icon6=`https://openweathermap.org/img/wn/${props.icon6}.png`


    const timestamp1 = props.time1;
    const timestamp2 = props.time2;
    const timestamp3 = props.time3;
    const timestamp4 = props.time4;
    const timestamp5 = props.time5;
    const timestamp6 = props.time6;


    return(
        <Box sx={{backgroundColor:'#202B3B' ,p:'2%',borderRadius:5 , mt:'1%',width:'45%',height:'25%' , position:'absolute'}}>
        <Typography>Today's Forecast</Typography>
        <Stack align="center"  direction="row" sx={{height:100,mt:'3%' }}>
            <Stack>
                <Typography><SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{timestamp1}</SimpleDateTime></Typography>
                <Icon sx={{height:'80%',width:'80%'}} >
                    <img src={icon1} height="100%" width="100%" alt="Weather Icon" />
                </Icon>
                <Typography>{props.temp1}</Typography>
            </Stack>
            <Divider variant="middle" orientation="vertical" sx={{backgroundColor:"white",m:'1%'}}/>
            <Stack>
                <Typography><SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{timestamp2}</SimpleDateTime></Typography>
                <Icon sx={{height:'80%',width:'80%'}} >
                    <img src={icon2} height="100%" width="100%" alt="Weather Icon" />
                </Icon>
                <Typography>{props.temp2}</Typography>
            </Stack>
            <Divider variant="middle" orientation="vertical" sx={{backgroundColor:"white",m:'1%'}}/>
            <Stack>
                <Typography><SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{timestamp3}</SimpleDateTime></Typography>
                <Icon sx={{height:'80%',width:'80%'}} >
                    <img src={icon3} height="100%" width="100%" alt="Weather Icon" />
                </Icon>
                <Typography>{props.temp3}</Typography>
            </Stack>
            <Divider variant="middle" orientation="vertical" sx={{backgroundColor:"white",m:'1%'}}/>
            <Stack>
                <Typography><SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{timestamp4}</SimpleDateTime></Typography>
                <Icon sx={{height:'80%',width:'80%'}} >
                    <img src={icon4} height="100%" width="100%" alt="Weather Icon" />
                </Icon>
                <Typography>{props.temp4}</Typography>
            </Stack>
            <Divider variant="middle" orientation="vertical" sx={{backgroundColor:"white",m:'1%'}}/>
            <Stack>
                <Typography><SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{timestamp5}</SimpleDateTime></Typography>
                <Icon sx={{height:'80%',width:'80%'}} >
                    <img src={icon5} height="100%" width="100%" alt="Weather Icon" />
                </Icon>
                <Typography>{props.temp5}</Typography>
            </Stack>
            <Divider variant="middle" orientation="vertical" sx={{backgroundColor:"white",m:'1%'}}/>
            <Stack>
                <Typography><SimpleDateTime showDate='0' timeFormat="HM" timeSeparator=":">{timestamp6}</SimpleDateTime></Typography>
                <Icon sx={{height:'80%',width:'80%'}} >
                    <img src={icon6} height="100%" width="100%" alt="Weather Icon" />
                </Icon>
                <Typography>{props.temp6}</Typography>
            </Stack>
        </Stack>


        </Box>
    )
}
export default Second;