// joyUI_Interface1/src/Demo.tsx
/* 
import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Name from "./components/Name";
import Email from "./components/Email";
import Password from "./components/Password";
import AspectRatio from "@mui/joy/AspectRatio";
import Checkbox from "./components/Checkbox";
import CreateAccount from "./components/CreateAccount";
import { extendTheme } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";

const theme = extendTheme({colorSchemes: {
  light: {
    shadowChannel: '12 12 12',
  },
  dark: {
    shadowChannel: '0 0 0',
  },
},
});

export default function createAccount() {

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
        padding:'20px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <Card
        variant="solid"
        sx={(theme) => ({
          width: 450,
          height: 406,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Adjusted boxShadow value
          paddingBottom: '40px' // Add more padding to the bottom of the card
        })}
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
            }} 
            level="h4"
          >
            Collaboration starts here 🚀
          </Typography>    
      <Input placeholder="" fullWidth />
      <Input placeholder="" fullWidth style={{ marginTop: '10px' }} />
      <Input
        placeholder=""
        fullWidth
        endDecorator={
        }
        style={{ marginTop: '10px' }}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="I agree to Terms of Service and Privacy Policy"
        style={{ marginTop: '10px', alignSelf: 'start' }}
      />
      <Button fullWidth variant="contained" style={{ marginTop: '20px' }}>
        Create Account
      </Button>
      <Typography variant="body2" style={{ marginTop: '20px' }}>
        Already have an account?{' '}
        <Link href="/sign-in" underline="hover">
          Sign in instead
        </Link>
      </Typography>
      <Typography variant="body2" style={{ margin: '20px 0' }}>
        or
      </Typography>
          <div style={{ width: "100%", textAlign: "center" }}>
          <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="LinkedIn_logo" />
          />
        </div>
      </Card>
    </div>
  );
} */       


// joyUI_Interface1/src/Demo.tsx
import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import EmailInput from "./components/EmailInput"; // Assuming EmailInput is the correct component name
import PasswordInput from "./components/PasswordInput"; // Assuming PasswordInput is the correct component name
import Checkbox from "@mui/material/Checkbox"; // Import from MUI material
import FormControlLabel from "@mui/material/FormControlLabel"; // Import from MUI material
import Button from "@mui/material/Button"; // Import from MUI material
import Link from "@mui/material/Link"; // Import from MUI material
import IconButton from "@mui/material/IconButton"; // Import from MUI material
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
  // State hooks and function definitions
  // ...

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
          height: 'auto', // Changed to 'auto' to adapt based on content
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
          <img
            id="logo"
            src="https://www.boardx.us/content/images/2023/11/BoardX-Logo.png"
            alt="BoardX Logo"
            style={{ margin: '0 0 20px' }} // Add some margin to the logo
          />
          <Typography
            sx={{
              color: "black",
              textAlign: 'center',
              width: '100%',
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px', // Add space below the typography
            }}
            level="h4"
          >
            Collaboration starts here 🚀
          </Typography>

          {/* Assume NameInput, EmailInput, and PasswordInput are your input components */}
          <NameInput />
          <EmailInput />
          <PasswordInput />
          
          {/* Terms of Service and Privacy Policy checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to Terms of Service and Privacy Policy"
            sx={{ alignSelf: 'start', marginTop: '10px' }}
          />
          
          {/* Create account button */}
          <Button
            variant="contained"
            sx={{ width: '100%', marginTop: '20px' }}
          >
            Create Account
          </Button>
          
          {/* Sign in link */}
          <Typography
            sx={{ marginTop: '20px' }}
            variant="body2"
          >
            Already have an account?{' '}
            <Link href="/sign-in" underline="hover">
              Sign in instead
            </Link>
          </Typography>

          {/* LinkedIn logo and link */}
          <Typography
            sx={{ margin: '20px 0' }}
            variant="body2"
          >
            or
          </Typography>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
            alt="LinkedIn logo"
            style={{ cursor: 'pointer' }} // Make it look clickable
          />
        </div>
      </Card>
    </div>
  );
}

