import * as React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

// Define a type for your props
type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

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
