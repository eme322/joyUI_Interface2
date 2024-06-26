// joyUI_Interface1/src/Demo.tsx
/*
import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Name from "./components/Name";
import Email from "./components/Email";
import Password from "./components/Password";
import AspectRatio from "@mui/joy/AspectRatio";
import LogInButton from "./components/LogInButton";
import Checkbox from "./components/Checkbox";
import { extendTheme } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import Link from "@mui/material/Link";


const theme = extendTheme({colorSchemes: {
  light: {
    shadowChannel: '12 12 12',
  },
  dark: {
    shadowChannel: '0 0 0',
  },
},
});

export default function SignInSheet() {

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
          width: '500px',
          height: 'auto',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          paddingBottom: '40px' 
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
          <FormControl>
            <div style={{ margin: "20px 0" }}>
              <Name />
            </div>
            <div style={{ margin: "20px 0" }}>
              <Email />
            </div>
            <div style={{ margin: "20px 0" }}>
              <Password />
              <div style={{ margin: "20px 0" }}>
              <Checkbox />
            </div>
            <div style={{ margin: "20px 0" }}>
              <LogInButton />
            </div>
            <Typography sx={{ margin: '20px 0' }}>
              Already have an account?{' '}
              <Link href="/sign in instead" underline="hover">
                Sign in instead
              </Link>
            </Typography>
            <Typography sx={{ margin: '20px 0' }}>
              or
            </Typography>
            <img id="LinkedIn_logo" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
              alt="LinkedIn logo"
              style={{
                cursor: 'pointer',
                margin: '20px 0',
                width: '30px',
                height: 'auto',
              }}
            />
          </FormControl>
        </div>
      </Card>
    </div>
  );
}*/


      
// joyUI_Interface2/src/Demo.tsx

/*
import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Name from "./components/Name";
import Email from "./components/Email";
import Password from "./components/Password";
import LogInButton from "./components/LogInButton";
import Checkbox from "./components/Checkbox"; 
import { extendTheme } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import Link from "@mui/material/Link";

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

export default function SignInSheet() {
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
          width: '500px',
          height: 'auto',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          paddingBottom: '40px' 
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
            }} 
            level="h4"
          >
            Collaboration starts here 🚀
          </Typography>
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
              <Checkbox />
            </div>
            <div style={{ margin: "20px 0" }}>
            <LogInButton/>
            </div>
            <Typography sx={{ margin: '20px 0' }}>
            Already have an account?{' '}
            <Link 
            href="/sign-in" 
            underline="hover"
             style={{ color: '#F21D6B' }}
              >
            Sign in instead
            </Link>
            </Typography>
            
            <Typography sx={{ margin: '20px 0' }}>
              or
            </Typography>
            <img id="LinkedIn_logo" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
              alt="LinkedIn logo"
              style={{
                cursor: 'pointer',
                textAlign: 'center',
                margin: '20px 0',
                width: '30px',
                height: 'auto',
              }}
            />
          </FormControl>
        </div>
      </Card>
    </div>
  );
}
*/

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import Link from '@mui/material/Link';
import Name from './components/Name';
import Email from './components/Email';
import Password from './components/Password';
import LogInButton from './components/LogInButton';
import CheckboxAgrement from './components/Checkbox';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          borderRadius: 8, // Optional: if you need rounded corners
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#556cd6', // Example primary color
    },
    action: {
      hoverOpacity: 0.08, // Setting a default hoverOpacity
    }
  },
});

export default function SignInSheet() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleSubmit = () => {
    setError(!email.trim());
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{
          margin: -8,
          padding: '20px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "white",
        }}>
        <Card variant="solid" sx={{
            width: '500px',
            height: 'auto',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            paddingBottom: '40px'
          }}>
          <div style={{ width: "100%", textAlign: "center" }}>
            <img id="logo" src="https://www.boardx.us/content/images/2023/11/BoardX-Logo.png" alt="BoardX Logo" />
            <Typography level="h4" sx={{
                color: "black", 
                textAlign: 'center',
                width: '100%',
                fontSize: '24px',
                fontWeight: 'bold',
              }}>
              Collaboration starts here 🚀
            </Typography>
            <FormControl sx={{ width: '100%' }}>
              <Name />
              <Email />
              <Password />
              <CheckboxAgrement />
              <LogInButton onSubmit={handleSubmit} />
              <Typography sx={{ margin: '20px 0' }}>
                Already have an account?{' '}
                <Link href="/sign-in" underline="hover" sx={{ color: '#F21D6B' }}>
                  Sign in instead
                </Link>
              </Typography>
              <Typography sx={{ margin: '20px 0' }}>or</Typography>
              <img id="LinkedIn_logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
                alt="LinkedIn logo"
                style={{
                  cursor: 'pointer',
                  margin: '20px 0',
                  width: '30px',
                  height: 'auto',
                }} />
            </FormControl>
          </div>
        </Card>
      </div>
    </ThemeProvider>
  );
}

