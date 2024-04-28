import * as React from "react";
import Input from "@mui/joy/Input";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

//import FormHelperText from '@mui/joy/FormHelperText';
//import { InfoOutlined } from "@mui/icons-material";


export default function NameInput() {
  return (
    <FormControl>
      <FormLabel htmlFor="email-input">Name</FormLabel>
      <Input
        id="name-input"
        type="name" 
        variant="outlined"
        color="neutral"
        sx={{ backgroundColor: "white"}} //, "--Input-focusedHighlight": "gray" }}
        placeholder="" 
      />
    </FormControl>
  );
}
