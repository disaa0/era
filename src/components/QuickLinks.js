import { Box, Heading, List, ListItem, Link, Divider } from '@chakra-ui/react';

function QuickLinks() {
  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="lg" border="1px solid" borderColor="brand.border">
      <Heading size="lg" mb={4} color="brand.primary">Quick Links</Heading>
      <Divider mb={4} />
      <List spacing={3}>
        <ListItem>
          <Link href="#transfer" color="brand.secondary" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            Transfer Funds
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#statements" color="brand.secondary" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            View Statements
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#support" color="brand.secondary" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            Contact Support
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default QuickLinks;

