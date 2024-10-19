import { Box, Heading, Grid, Switch, FormControl, FormLabel } from '@chakra-ui/react'; 
import { useState } from 'react';
import AccountOverview from './components/AccountOverview';
import RecentTransactions from './components/RecentTransactions';
import QuickLinks from './components/QuickLinks';
import NewsFeed from './components/NewFeed';
import CurrencyWidget from './components/CurrencyWidget';
import ForexTradingWidget from './components/ForexTradingWidget';
import FixedTermDepositsWidget from './components/FixedTermDepositsWidget';

function Dashboard() {
  // State to track the selected client type
  const [clientType, setClientType] = useState('simple'); // Default to 'simple'

  // Handler for switch toggle
  const handleToggle = () => {
    setClientType(clientType === 'simple' ? 'investor' : 'simple');
  };

  return (
    <Box p={8} bg="brand.background" minH="100vh">
      {/* Heading */}
      <Box bg="#F7FAFC" p={6} borderRadius="md" boxShadow="lg" mb ={5}>
        <Heading textAlign="center" mb={4} color="brand.primary" fontWeight="bold" size="2xl">
          Corporate Customer Dashboard
        </Heading>
      </Box>

      {/* Switch to toggle client type */}
      <FormControl display="flex" alignItems="center" justifyContent="center" mb={5}>
        <FormLabel htmlFor="client-type-toggle" mb="0">
          Default
        </FormLabel>
        <Switch
          id="client-type-toggle"
          colorScheme="blue"
          isChecked={clientType === 'investor'}
          onChange={handleToggle}
          size="lg"
          ml={2}
        />
        <FormLabel htmlFor="client-type-toggle" mb="0" ml={2}>
          Investor
        </FormLabel>
      </FormControl>

      {/* Content Grid */}
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)']}
        gap={0}  // Set gap to 0 to remove spacing between widgets
        maxW="1500px"
        mx="auto"
      >
        {/* Show AccountOverview without left margin */}
        <Box gridColumn="span 1">
          <AccountOverview />
        </Box>

        {/* Container for other widgets */}
        <Box ml="10px" gridColumn="span 2">
          <Grid templateColumns="repeat(2, 1fr)" gap={0}>
            <CurrencyWidget />
            <FixedTermDepositsWidget />
          </Grid>
        </Box>

        {/* NewsFeed positioned statically on the right */}
        <Box gridColumn="span 1">
          <NewsFeed />
        </Box>

        {clientType === 'investor' && (
          <>
            <Box gridColumn="span 2">
              <RecentTransactions />
            </Box>
            <Box gridColumn="span 2">
              <ForexTradingWidget />
            </Box>
          </>
        )}
      </Grid>
    </Box>
  );
}

export default Dashboard;