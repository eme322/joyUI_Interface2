import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function CheckboxAgrement() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setIsChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          name="agreeToTerms"
          color="primary"
        />
      }
      label={
        <Typography>
          I agree to the{' '}
          <Link href="/terms" underline="hover">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" underline="hover">
            Privacy Policy
          </Link>.
        </Typography>
      }
    />
  );
}

export default CheckboxAgrement;

      
