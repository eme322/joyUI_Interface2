import * as React from "react";
import Input from "@mui/joy/Input";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';



export default function Name() {
  return (
    <FormControl>
      <FormLabel htmlFor="email-input">Email</FormLabel>
      <Input
        id="email-input"
        type="email" 
        variant="outlined"
        color="neutral"
        sx={{ backgroundColor: "white"}} //, "--Input-focusedHighlight": "gray" }}
        placeholder="" 
      />
    </FormControl>
  );
}
