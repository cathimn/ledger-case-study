import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid p={4}>
          <Flex justifyContent="space-between">
            <Text alignSelf="center" fontSize="lg">
              Case Study
            </Text>
            <ColorModeSwitcher />
          </Flex>
          <Portfolio />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
