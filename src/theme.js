import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#002E3C',     // Dark blue
    secondary: '#103D4B',   // Lighter blue
    accent: '#FFD700',      // Accent teal color
    success: '#48BB78',     // Green for success (e.g., balance)
    background: '#F7FAFC',  // Light gray for background
    text: '#2D3748',        // Dark gray for text
    border: '#E2E8F0',      // Light border color
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Arial, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.background',
        color: 'brand.text',
      },
    },
  },
});

export default theme;

