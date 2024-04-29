// joyUI_Interface1/src /index.tsx
import Demo from './Demo';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import { globalStyles } from './components/styles';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        {globalStyles()}
        <Demo />
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
