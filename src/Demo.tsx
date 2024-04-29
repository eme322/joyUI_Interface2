// joyUI_Interface1/src/Demo.tsx
import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Name from "./components/Name";
import Email from "./components/Email"; 
import Password from "./components/Password";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { extendTheme } from "@mui/joy";

const theme = extendTheme({
  colorSchemes: {
    light: {
      shadowChannel: '12 12 12',
    },
    dark: {
      shadowChannel: '0 0 0',
    },
  },
});

export default function CreateAccount() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div
      style={{
        margin: -8,
        padding: '20px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <Card
        variant="solid"
        sx={{
          width: 450,
          height: 'auto',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          paddingBottom: '40px',
        }}
      >
          <div style={{ width: "100%", textAlign: "center" }}>
          <img id="logo" src="https://www.boardx.us/content/images/2023/11/BoardX-Logo.png" alt="BoardX Logo" />
          <Typography
          sx={{
              color: "black",
              textAlign: 'center',
              width: '100%',
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
            variant="h4"
          >
            Collaboration starts here 🚀



          </Typography>
          {
          <FormControl>
            <div style={{ margin: "20px 0" }}>
              <Name />
            </div>
            <div style={{ margin: "20px 0" }}>
              <Email />
            </div>
            <div style={{ margin: "20px 0" }}>
              <Password />
            </div>
            <div style={{ margin: "20px 0" }}>
              <Create Account />
            </div>
          </FormControl>
          }
        </div>
      </Card>
    </div>
  );
}


            
         /* </Typography>
          <Name />
          <Email />
          <Password />
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to Terms of Service and Privacy Policy"
            sx={{ alignSelf: 'start', marginTop: '10px' }}
          />
          <Button
            variant="contained"
            sx={{ width: '100%', marginTop: '20px' }}
          >
            Create Account
          </Button>
          <Typography sx={{ marginTop: '20px' }}>
            Already have an account?{' '}
            <Link href="/sign-in" underline="hover">
              Sign in instead
            </Link>
          </Typography>
          <Typography sx={{ margin: '20px 0' }} variant="body2">
            or
          </Typography>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
            alt="LinkedIn logo"
            style={{ cursor: 'pointer' }}
          />
        </div>
      </Card>
    </div>
  );
} */
