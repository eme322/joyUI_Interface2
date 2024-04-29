import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function CheckboxAgreement() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <React.Fragment>
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
      
    
      /* <Typography variant="body2">
        <Link href="/forgot-password" underline="hover">
          Forgot Password?
        </Link>
      </Typography>
    </React.Fragment>
  );
} */






/*
import * as React from 'react';
import { ForgotPasswordLink } from './styles';

export default function BasicButtons() {
  return (
    <ForgotPasswordLink href="/forgot-password">
      Forgot Password
    </ForgotPasswordLink>
  );
}
*/
