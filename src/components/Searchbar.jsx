import { React, useState } from "react";
import TextField from "@mui/material/TextField";
// import List from "./Components/List"


function Searchbar() {
  return (
    <div className="main">
      <h3>Versions Search</h3>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search DB Version" 
        />
      </div>
     
    </div>
  );
}

export default Searchbar;
