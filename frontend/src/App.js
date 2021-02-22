import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  theme,
  Flex,
  Button,
  Stack,
  Avatar,
  Input,
  Divider,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Portfolio from './components/Portfolio';
import { FaSearch } from 'react-icons/fa';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid p={4}>
          <Flex justifyContent="space-between">
            <Text alignSelf="center" fontSize="lg">
              Case Study
            </Text>
            <Stack direction="row">
              <InputGroup>
                <Input mr={5} size="md" placeholder="Search..." disabled />
              </InputGroup>
              <Button variant="ghost" disabled mr={5}>My Account</Button>
              <ColorModeSwitcher />
            </Stack>
          </Flex>
          <Portfolio />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
