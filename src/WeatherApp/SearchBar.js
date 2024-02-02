import { Box, Input, Button } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = ({ sendDataToParent }) => {
    const [search, setsearch] = React.useState("");
    const changehandler = (e) => {
        setsearch(e.target.value);
        // console.log("val: ", search);

    }
    const handlerFuntion = (e) => {
        // console.log("searhc: ", search);
        sendDataToParent(search);
        setsearch("")
    }




    return (
        <Box w={{ md: "60%", base: "80%" }} m="auto" display="flex" sx={{ pt: '1%' }} >

            <Input
                placeholder="Search"
                size="md"
                color="white"
                type="search"
                borderRadius="none"
                onChange={changehandler}
                value={search}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handlerFuntion();
                }}

            />



        </Box>
    )
}

export default SearchBar