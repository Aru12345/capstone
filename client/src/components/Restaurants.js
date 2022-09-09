import MyMap from "./MyMap";
import Rcard from "./Rcard";
import Filter from "./Filter";
import { useEffect, useState } from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
function Restaurants(){
    const[restaurants,setRestaurants]=useState([]);
    const [filterBy, setFilterBy] = useState("");
    useEffect(()=>{
        fetch('/restaurants')
        .then(res=>res.json())
        .then(rdata=>{
            setRestaurants(rdata)
        })
    },[])

    function handleFilter(e) {
        e.target.value === "All"
          ? setFilterBy("")
          : setFilterBy(e.target.value);
      }

      let displayRestaurants = restaurants;
  if (filterBy) {
    displayRestaurants = displayRestaurants.filter((r) => {
      return r.category == filterBy;
    });
  }

    return(
        <>
   <Grid container direction="row" justifyContent="center">
   <Grid item xs={6}>
<Box ml={2} mb={3}>
<MyMap />
</Box>
        
    </Grid>
        {/* </Grid>
        <Grid item xs={6}> */}
     <Grid item xs={6}>
     
     <Box m={2}>
        <Filter handleFilter={handleFilter} />
        </Box>
        <Box style={{maxHeight: '75vh', overflow: 'auto'}} marginRight={3} >
        {
            displayRestaurants.map((restaurant)=>(
                <Box marginBottom={2} >
                <Rcard key={restaurant.id} restaurant={restaurant}/>
                </Box>
            ))
        }
        </Box>
    </Grid>
   </Grid>

        </>
    )
}
export default Restaurants;