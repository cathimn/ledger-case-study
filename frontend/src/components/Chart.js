import { Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function Chart({ data }) {
  return (
    <>
      <Doughnut data={data}  />
    </>
  )
}

export default Chart;
