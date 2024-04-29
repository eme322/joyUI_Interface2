import * as React from 'react';
import Button from '@mui/joy/Button';

export default function CreateAccount() {
  const handleClick = () => {
    console.log("Button clicked!");
    
  };

  return (
    <Button onClick={handleClick} sx={{ width: 450, backgroundColor: '#F21D6B', '&:hover': { backgroundColor: '#FF4081' } }}>Create Account</Button>
  );
}
