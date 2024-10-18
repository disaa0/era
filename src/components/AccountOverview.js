import { Box, Heading, Text, Divider } from '@chakra-ui/react';

function AccountOverview() {
  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="lg" border="1px solid" borderColor="brand.border">
      <Heading size="lg" mb={4} color="brand.primary">Account Overview</Heading>
      <Divider mb={4} />
      <Box mb={4}>
        <Heading size="md" color="brand.success">Current Balance</Heading>
        <Text fontSize="2xl" fontWeight="bold">$12,500.00</Text>
      </Box>
      <Box>
        <Text fontWeight="bold" color="brand.text">Account Number:</Text>
        <Text mb={2}>1234567890</Text>
        <Text fontWeight="bold" color="brand.text">Last Transaction:</Text>
        <Text>$500 withdrawal on 10/15</Text>
      </Box>
    </Box>
  );
}

export default AccountOverview;

