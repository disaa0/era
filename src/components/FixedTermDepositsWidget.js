import { Box, Text, Heading, Button, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';

function FixedTermDepositsWidget() {
  // State for deposit inputs
  const [depositAmount, setDepositAmount] = useState('');
  const [depositTerm, setDepositTerm] = useState('12'); // Default to 12 months
  const interestRate = 5.0; // Assume 5% interest rate

  const handleAmountChange = (e) => setDepositAmount(e.target.value);
  const handleTermChange = (e) => setDepositTerm(e.target.value);

  const handleSubmit = () => {
    // Add functionality to handle deposit submission
    alert(`Вклад на сумму $${depositAmount} на срок ${depositTerm} месяцев открыт!`);
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" width="300px" boxShadow="lg">
      <Heading size="md" mb={4} color="blue.600">
        Fixed-Term Deposits
      </Heading>
      <Stack spacing={4}>
        {/* Input for deposit amount */}
        <Box>
          <Text mb={1}>Deposit amount:</Text>
          <Input 
            placeholder="enter amount" 
            value={depositAmount} 
            onChange={handleAmountChange} 
            type="number"
          />
        </Box>

        {/* Input for deposit term */}
        <Box>
          <Text mb={1}>Deposit term (in months):</Text>
          <Input 
            placeholder="12" 
            value={depositTerm} 
            onChange={handleTermChange} 
            type="number"
            min={1} 
          />
        </Box>

        {/* Display interest rate */}
        <Text>Interest rate:{interestRate} % per annum</Text>

        {/* Button to open deposit */}
        <Button 
          colorScheme="blue" 
          onClick={handleSubmit} 
          isDisabled={!depositAmount}
        >
          Open contribution
        </Button>
      </Stack>
    </Box>
  );
}

export default FixedTermDepositsWidget;