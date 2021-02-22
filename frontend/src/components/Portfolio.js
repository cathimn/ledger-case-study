import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Divider, Grid, GridItem, Heading, List, ListItem } from '@chakra-ui/react';
import SelectFilter from './SelectFilter';
import Chart from './Chart';

function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [filters, setFilters] = useState({});
  const [policies, setPolicies] = useState({ count: null, results: [] });
  const [data, setData] = useState({});
  const [pages, setPages] = useState({ next: null, previous: null});

  useEffect(() => {
    getData("");
  }, [])

  useEffect(() => {
    const filterString = Object.keys(filters).map(key => `&${key}=${filters[key]}`).join("");
    getData(filterString);
  }, [filters])

  async function getData(filterString) {
    const response = await fetch('http://localhost:8000/api/policies/?format=json' + filterString);
    const res = await response.json();

    const {count, results, next, previous} = res;
    setPolicies({ count, results: results });
    setPages({ next, previous });

    const totalPremiums = results.map(result => result.insurance_premium).reduce((sum, a) => sum + a);
    const totalLosses = results.map(result => result.insurance_losses).reduce((sum, a) => sum + a);
    setData({
      labels: ["Losses", "Remaining Premiums"],
      datasets: [
        {
          label: "FJDK",
          backgroundColor: ['red', 'gray'],
          data: [
            totalLosses,
            totalPremiums - totalLosses]
          },
        ]
    })

    setLoaded(true);
  }

  const updateFilter = (id, value) => {
    setFilters({ ...filters, [id]: value });
  }

  const changePage = async (newPage) => {
    const response = await fetch(newPage)
    const res = await response.json();

    const {count, results, next, previous} = res;
    setPolicies({ count, results: results });
    setPages({ next, previous });
    
    const totalPremiums = results.map(result => result.insurance_premium).reduce((sum, a) => sum + a);
      const totalLosses = results.map(result => result.insurance_losses).reduce((sum, a) => sum + a);
      setData({
        labels: ["Losses", "Remaining Premiums"],
        datasets: [
          {
            label: "FJDK",
            backgroundColor: ['red', 'gray'],
            data: [
              totalLosses,
              totalPremiums - totalLosses]
            },
          ]
      })
  }

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Heading>
        Sample Portfolio
      </Heading>
      <Grid
        pt={3}
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem p={5}>
          Count: {policies.count}
          <Chart data={data} />
        </GridItem>
        <GridItem p={5}>
          <SelectFilter policies={policies} filers={filters} updateFilter={updateFilter} />
          <Box overflow="auto" height="400px" mt={4} pr={4}>
            {policies.results.map(policy =>
              <List p={3} mb={2} borderWidth="1px" borderRadius="md" fontSize="sm">
                <ListItem>
                  Memeber Since: {policy.month + "/" + policy.year}
                </ListItem>
                <ListItem>
                  Premium: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(policy.insurance_premium)}
                </ListItem>
                <ListItem>
                  Claims: {policy.insurance_claims}
                </ListItem>
                <ListItem>
                  Losses: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(policy.insurance_losses)}
                </ListItem>
              </List>
          )}
          </Box>
          <Center p={2}>
            {pages.previous
              ? <Button size="sm" onClick={e => changePage(pages.previous)}>Previous</Button>
              : <Button size="sm" disabled>Previous</Button>}
            <Divider orientation="vertical" m={2}></Divider>
            {pages.next
              ? <Button size="sm" onClick={e => changePage(pages.next)}>Next</Button>
              : <Button size="sm" disabled>Next</Button>}
          </Center>
        </GridItem>
      </Grid>
    </>
  )
}

export default Portfolio;
