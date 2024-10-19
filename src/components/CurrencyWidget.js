import { Box, Heading, Text, Divider, Flex, Icon } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiEuro, BiDollar } from 'react-icons/bi';

function CurrencyWidget() {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); 
      const data = await response.json();
      setExchangeRate(data.rates.EUR); 
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <Box 
      bg="white" 
      p={6} 
      borderRadius="lg" 
      boxShadow="md" 
      border="1px solid" 
      borderColor="brand.border"
      width="300px"   
      height="400px"   
      display="flex" 
      flexDirection="column" 
      justifyContent="space-between"
    >
      <Flex align="center" mb={4}>
        <Icon as={BiDollar} w={8} h={8} color="brand.primary" />
        <Heading size="lg" ml={3} color="brand.primary">Currency Exchange</Heading>
      </Flex>
      <Divider mb={4} />
      <Flex flexDirection="column" align="center" justify="center" flexGrow={1}>
        <Text fontSize="4xl" fontWeight="bold" color="brand.secondary" mb={2}>
          {exchangeRate.toFixed(2)}
        </Text>
        <Text fontSize="lg" color="gray.500">
          1 USD = <Icon as={BiEuro} w={6} h={6} color="brand.secondary" /> EUR
        </Text>
      </Flex>
      <Divider />
      <Text fontSize="sm" textAlign="center" color="gray.500" mt={2}>
        Exchange rates may vary
      </Text>
    </Box>
  );
}

export default CurrencyWidget;