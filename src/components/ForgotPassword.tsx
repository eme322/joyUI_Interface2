import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';

export default function TermsAgreement() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="agreeToTerms"
            color="primary"
          />
        }
        label={
          <React.Fragment>
            I agree to the{' '}
            <Link href="/terms" underline="hover">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy" underline="hover">
              Privacy Policy
            </Link>
          </React.Fragment>
        }
      />
    </div>
  );
}






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
