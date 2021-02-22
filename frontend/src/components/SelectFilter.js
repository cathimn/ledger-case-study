import { Flex, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

function SelectFilter({ policies, filters, updateFilter }) {
  const [driverAge, setDriverAge] = useState({ min: null, max: null});

  useEffect(() => {
    setDriverAge({
      max: Math.max(...policies.results.map(result => result.driver_age)),
      min: Math.min(...policies.results.map(result => result.driver_age))
    });

  }, [policies])

  return (
    <>
      <Heading size="sm" pb={2}>Driver Information:</Heading>
      <VStack p={2}>
        <Select
          value={filters?.driver_gender}
          variant="flushed"
          size="xs"
          placeholder="--- Gender ---"
          id="driver_gender"
          onChange={e => updateFilter(e.target.id, e.target.value)}>
          <option value="">---</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </VStack>
      <VStack p={2}>
        <Select
          value={filters?.driver_employment}
          variant="flushed"
          size="xs"
          placeholder="--- Employment ---"
          id="driver_employment"
          onChange={e => updateFilter(e.target.id, e.target.value)}>
          <option value="">---</option>
          <option value="employed">Employed</option>
          <option value="homemaker">Homemaker</option>
          <option value="other_emp">Other</option>
          <option value="retired">Retired</option>
          <option value="student">Student</option>
          <option value="unemployed">Unemployed</option>
        </Select>
      </VStack>
      <VStack p={2}>
        <Select
          value={filters?.driver_marital}
          variant="flushed"
          size="xs"
          placeholder="--- Marital Status ---"
          id="driver_marital"
          onChange={e => updateFilter(e.target.id, e.target.value)}>
          <option value="">---</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </Select>
      </VStack>
      <VStack p={2}>
        <Select
          value={filters?.driver_location}
          variant="flushed"
          size="xs"
          placeholder="--- Location ---"
          id="driver_location"
          onChange={e => updateFilter(e.target.id, e.target.value)}>
          <option value="">---</option>
          <option value="rural">Rural</option>
          <option value="suburban">Suburban</option>
          <option value="urban">Urban</option>
        </Select>
      </VStack>
      <Heading size="sm">Vehicle Information:</Heading>
      <VStack p={2}>
        <Select
          value={filters?.vehicle_model}
          variant="flushed"
          size="xs"
          placeholder="--- Model ---"
          id="vehicle_model"
          onChange={e => updateFilter(e.target.id, e.target.value)}>
          <option value="">---</option>
          <option value="coupe_cabriolet">Coupe</option>
          <option value="hatchback">Hatchback</option>
          <option value="other_model">Other</option>
          <option value="pickup">Pickup</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="van">Van</option>
        </Select>
      </VStack>
    </>
  )
}

export default SelectFilter;
