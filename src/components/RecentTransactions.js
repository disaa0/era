import { Box, Heading, List, ListItem, Text, Divider, Flex } from '@chakra-ui/react';

function RecentTransactions() {
  const transactions = [
    { id: 1, date: '10/17', description: 'Deposit', amount: '$1,200.00' },
    { id: 2, date: '10/16', description: 'Purchase - ABC Store', amount: '$150.00' },
    { id: 3, date: '10/15', description: 'ATM Withdrawal', amount: '$500.00' }
  ];

  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="lg" border="1px solid" borderColor="brand.border">
      <Heading size="lg" mb={4} color="brand.primary">Recent Transactions</Heading>
      <Divider mb={4} />
      <List spacing={4}>
        {transactions.map((transaction) => (
          <ListItem key={transaction.id}>
            <Flex justify="space-between" align="center">
              <Text fontWeight="bold" color="brand.text">{transaction.date}</Text>
              <Text color="brand.secondary">{transaction.description}</Text>
              <Text fontWeight="bold" color="brand.text">{transaction.amount}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default RecentTransactions;

