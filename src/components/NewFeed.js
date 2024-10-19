import { Box, Heading, Text, Divider, Flex, Link } from '@chakra-ui/react';

function NewsFeed() {
  const news = [
    { id: 1, title: 'Tech Innovation of the Year', description: 'A breakthrough in AI technology promises to revolutionize industries...', date: '10/18', link: '#' },
    { id: 2, title: 'Global Markets Update', description: 'Stock markets experience volatility as global events unfold...', date: '10/17', link: '#' },
    { id: 3, title: 'New Startup Raises $10M', description: 'A new tech startup secures funding to expand its operations...', date: '10/16', link: '#' }
  ];

  return (
    <Box 
      bg="white" 
      p={6} 
      borderRadius="lg" 
      boxShadow="lg" 
      border="1px solid" 
      borderColor="gray.200" 
      width="300px"               
      height="auto"             // Allow height to adjust based on content
      overflowY="auto"          // Enable scrolling if content exceeds height
    >
      <Heading size="lg" mb={4} color="brand.primary">Latest News</Heading>
      <Divider mb={4} />
      {news.map((item) => (
        <Box key={item.id} mb={6}>
          <Flex justify="space-between" align="center">
            <Heading size="md" color="brand.primary">{item.title}</Heading>
            <Text fontSize="sm" color="gray.500">{item.date}</Text>
          </Flex>
          <Text color="gray.700" mt={2}>{item.description}</Text>
          <Link href={item.link} color="brand.secondary" fontWeight="bold" mt={2} _hover={{ textDecoration: 'underline' }}>
            Read more
          </Link>
          <Divider mt={4} />
        </Box>
      ))}
    </Box>
  );
}

export default NewsFeed;