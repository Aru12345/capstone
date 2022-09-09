import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import "./stylingfolder/Filter.css";


function Filter( {handleFilter} ){

 
    return(
        <>
       <div>

<select
 onChange={handleFilter} 
 name="wgtmsr" id="wgtmsr"

>
  <option>All</option>
  <option value="alc">Fine Dinning</option>
  <option value="coffeeshop">Cafe</option>
  <option value="bar">Pub</option>
  
</select>
</div> 
        {/* <div>

      <select
       onChange={handleFilter} 
     
      >
        <option>All</option>
        <option value="alc">Fine Dinning</option>
        <option value="coffeeshop">Cafe</option>
        <option value="bar">Pub</option>
        
      </select>
    </div> */}
        </>
    )
}
export default Filter;