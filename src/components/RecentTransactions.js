import { Box, Heading, Text, Divider, Flex } from '@chakra-ui/react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; 
import 'chart.js/auto'; 

Chart.register(...registerables);

function InvestorOverview() {
  
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Portfolio Performance ($)',
        data: [12000, 12500, 13000, 13500, 14000, 14500, 15000, 16000, 15500, 16500],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
      }
    ]
  };

  const pieChartData = {
    labels: ['Stocks', 'Bonds', 'Real Estate', 'Commodities'],
    datasets: [
      {
        data: [50, 25, 15, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }
    ]
  };

  const barChartData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Investment Capitalization ($)',
        data: [150000, 200000, 250000],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384']
      }
    ]
  };

  return (
    <Box 
      bg="white" 
      p={6} 
      borderRadius="lg" 
      boxShadow="lg" 
      border="1px solid" 
      borderColor="brand.border"
      width={['100%', '100%', '650px']}  
    >
      <Heading size="lg" mb={4} color="brand.primary">Investor Overview</Heading>
      <Divider mb={4} />

     
      <Box mb={6}>
        <Heading size="md" color="brand.primary">Portfolio Performance</Heading>
        <Line data={lineChartData} />
      </Box>

      <Divider mb={4} />

      
      <Flex justify="space-between" mb={6}>
        <Box width="45%">
          <Heading size="md" color="brand.primary">Asset Allocation</Heading>
          <Pie data={pieChartData} />
        </Box>

       
        <Box width="45%">
          <Heading size="md" color="brand.primary">Investment Capitalization</Heading>
          <Bar data={barChartData} />
        </Box>
      </Flex>
    </Box>
  );
}

export default InvestorOverview;