import { Box, Heading, Grid } from '@chakra-ui/react';
import AccountOverview from './components/AccountOverview';
import RecentTransactions from './components/RecentTransactions';
import QuickLinks from './components/QuickLinks';

function Dashboard() {
  return (
    <Box p={8} bg="brand.background" minH="100vh">
      <Heading textAlign="center" mb={8} color="brand.primary" fontWeight="bold" size="2xl">
        Corporate Customer Dashboard
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)']}
        gap={6}
        maxW="1200px"
        mx="auto"
      >
        <AccountOverview />
        <RecentTransactions />
        <QuickLinks />
      </Grid>
    </Box>
  );
}

export default Dashboard;

