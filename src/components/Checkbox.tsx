import * as React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

export default function Checkbox({ label, checked, onChange }) {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          onChange={onChange}
          color="primary"
        />
      }
      label={label}
    />
  );
}
