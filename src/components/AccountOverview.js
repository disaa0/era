import { Box, Heading, Text, Divider, Avatar, Flex } from '@chakra-ui/react';
import QuickLinks from './QuickLinks'; // Импортируем QuickLinks

function AccountOverview() {
  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="lg" border="1px solid" borderColor="brand.border" minH="500px" width={['100%', '100%', '300px']}>
      {/* Client Profile Section */}
      <Flex alignItems="center" mb={6}>
        <Avatar size="xl" name="John Doe" src="https://bit.ly/dan-abramov" mr={6} />
        <Box>
          <Heading size="lg" color="brand.primary">John Doe</Heading>
          <Text color="gray.500">Corporate Customer</Text>
          <Divider my={4} />
          <Heading size="md" color="brand.success">Current Balance</Heading>
          <Text fontSize="2xl" fontWeight="bold">$12,500.00</Text>
        </Box>
      </Flex>

      <Divider mb={4} />

      {/* Account Details */}
      <Box mb={6}>
        <Text fontWeight="bold" color="brand.text">Account Number:</Text>
        <Text mb={2}>1234567890</Text>
        <Text fontWeight="bold" color="brand.text">Last Transaction:</Text>
        <Text>$500 withdrawal on 10/15</Text>
      </Box>

      <Divider mb={6} />

      {/* Task Manager Section */}
      <Box minH="400px" p={4} bg="gray.50" borderRadius="md" border="1px solid" borderColor="gray.200">
        <Heading size="md" mb={4} color="brand.primary">Task Manager</Heading>
        <Text color="gray.500">You have no pending tasks at the moment.</Text>
      </Box>

      <Divider my={6} />

      {/* Quick Links Section */}
      <QuickLinks /> {/* Добавляем компонент QuickLinks */}
    </Box>
  );
}

export default AccountOverview;