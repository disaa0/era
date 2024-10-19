import React, { useState, useEffect } from 'react';
import { Box, Text, Heading, Button, HStack, VStack, Input, useToast } from '@chakra-ui/react';

// Mock data for exchange rates (you can replace with real API data later)
const mockRates = {
  EURUSD: 1.0850,
  USDJPY: 109.45,
};

const ForexTradingWidget = () => {
  // State to hold the current rate
  const [rates, setRates] = useState(mockRates);
  const [currencyPair, setCurrencyPair] = useState('EURUSD');
  const [tradeAmount, setTradeAmount] = useState('');
  const toast = useToast();

  // Function to handle trading (mock buy/sell)
  const handleTrade = (type) => {
    toast({
      title: `${type} order placed`,
      description: `${type} ${tradeAmount} ${currencyPair} at rate ${rates[currencyPair]}`,
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
    setTradeAmount(''); // Reset input after trade
  };

  // This effect simulates live updates for exchange rates
  useEffect(() => {
    const interval = setInterval(() => {
      // Ensure the rates are treated as numbers by using parseFloat()
      setRates((prevRates) => ({
        ...prevRates,
        EURUSD: (parseFloat(prevRates.EURUSD) + (Math.random() - 0.5) * 0.001).toFixed(4),
        USDJPY: (parseFloat(prevRates.USDJPY) + (Math.random() - 0.5) * 0.1).toFixed(2),
      }));
    }, 3000); // Update every 3 seconds
  
    return () => clearInterval(interval);
  }, []);


  return (
    <Box
      border="1px solid #CBD5E0"
      borderRadius="md"
      p={4}
      w="300px"
      bg="gray.50"
      boxShadow="lg"
    >
      <Heading size="md" mb={4} color="blue.600" textAlign="center">
        Forex Trading Widget
      </Heading>

      {/* Currency Rates Display */}
      <VStack spacing={4} mb={6}>
        {Object.keys(rates).map((pair) => (
          <Box key={pair} p={2} w="100%" textAlign="center" bg="blue.100" borderRadius="md">
            <Text fontSize="lg" color="blue.800">
              {pair}: {rates[pair]}
            </Text>
          </Box>
        ))}
      </VStack>

      {/* Currency Pair Selection */}
      <HStack mb={4}>
        <Button
          colorScheme={currencyPair === 'EURUSD' ? 'blue' : 'gray'}
          onClick={() => setCurrencyPair('EURUSD')}
        >
          EUR/USD
        </Button>
        <Button
          colorScheme={currencyPair === 'USDJPY' ? 'blue' : 'gray'}
          onClick={() => setCurrencyPair('USDJPY')}
        >
          USD/JPY
        </Button>
      </HStack>

      {/* Trade Input */}
      <Input
        placeholder="Amount"
        value={tradeAmount}
        onChange={(e) => setTradeAmount(e.target.value)}
        mb={4}
      />

      {/* Buy/Sell Buttons */}
      <HStack justifyContent="center" spacing={4}>
        <Button colorScheme="green" onClick={() => handleTrade('Buy')}>
          Buy
        </Button>
        <Button colorScheme="red" onClick={() => handleTrade('Sell')}>
          Sell
        </Button>
      </HStack>
    </Box>
  );
};

export default ForexTradingWidget;