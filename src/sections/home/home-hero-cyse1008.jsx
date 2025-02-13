import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export function HomeHeroCYSE1008() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <Container 
      maxWidth="md" 
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', py: 5 }}
    >
      {/* Store Title Box */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #ff8a00, #e52e71)', 
          color: 'white', 
          padding: '15px 40px', 
          borderRadius: '12px', 
          fontSize: '26px', 
          fontWeight: 'bold', 
          textTransform: 'uppercase',
          boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)', 
          letterSpacing: '2px',
          mb: 3,
          width: 'fit-content' 
        }}
      >
        Jaskaran Store
      </Box>
      <promoMessage />

      {/* Animated Shop Now Button */}
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => setClickCount(clickCount + 1)}
          sx={{ 
            padding: '12px 30px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            borderRadius: '8px', 
            textTransform: 'uppercase',
            boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)', 
            transition: 'all 0.3s ease-in-out'
          }}
        >
          Shop Now ({clickCount})
        </Button>
    </Container>
  );
}
