// joyUI_Interface1/src/components/styles.tsx
// styles.tsx
import * as React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

export const globalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
      #logo {      
  margin-top: 20px;
  width: 100px; 
  height: auto; 
}
    `}
  />
);
