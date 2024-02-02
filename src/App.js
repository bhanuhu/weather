
import './App.css';
import { Box } from '@mui/material';
import Sidebar from './WeatherApp/Sidebar';
import { ChakraProvider } from '@chakra-ui/react';
import SearchBar from './WeatherApp/SearchBar';
import Middle from './WeatherApp/Middle';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import Right from './WeatherApp/Right';
function App() {
  const [childData, setChildData] = useState('shimla');
  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };
  const [unitData, setUnitData] = useState(false);
  const handleUnitdData = (unitFromChild) => {
    setUnitData(unitFromChild);
  };

  return (
    <ChakraProvider>
    <Box backgroundColor='#0B131E'>
      <SearchBar sendDataToParent={handleChildData} />


      <Flex flexDirection={{ base: "column", md: "row" }} overflow="hidden">
        <Sidebar sendUnitToParent={handleUnitdData} />
        <Box>
          <Middle childData={childData} unit={unitData}/>
        </Box>
        <Box>
          <Right childData={childData} unit={unitData} />
        </Box>

      </Flex>

    </Box>
  </ChakraProvider>

  );
}

export default App;
