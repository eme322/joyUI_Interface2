//checkbox.tsx
import React from 'react';
import { Checkbox, FormControlLabel, Link, Typography, ThemeProvider, createTheme } from '@mui/material';

// Define a theme to ensure all custom properties are included
const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.04)' // You can adjust this as needed
          }
        }
      }
    }
  }
});

function CheckboxAgrement() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default CheckboxAgrement;


/*import React from 'react';
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

export default CheckboxAgrement; */

      
