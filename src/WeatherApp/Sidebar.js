import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import { Switch, FormLabel } from '@chakra-ui/react';

const Sidebar = ({ sendUnitToParent }) => {
    const [unit, setunit] = useState(true)
    const handle = (e) => {

        setunit(!unit)
        sendUnitToParent(unit);

    }

    return (
        <Box sx={{ mr: '2%', mb: "0%" }} p={{ base: 0, md: "2%" }} borderRadius={{ base: 0, md: 20 }} backgroundColor='#202B3B' w={{ base: "100%", md: "15%" }} h={{ base: "0px", md: "92vh" }}>
            <CloudIcon mt={{ base: 0, md: "5rem" }} sx={{ color: 'white', width: '80%', height: '20%', mr: '10%' }} align="center" />
            <Box >

                <Stack direction="row" sx={{ color: 'white', ml: '20%' }} >
                    <FormLabel htmlFor='C' >C</FormLabel>
                    <Switch id='isFocusable' onChange={handle} isFocusable />
                    <FormLabel htmlFor='F' >F</FormLabel>
                </Stack>



            </Box>

        </Box >
    )
}

export default Sidebar