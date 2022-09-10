
import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";
import { useContext } from "react";
import { Cont } from "../Cont";
import "./stylingfolder/RestoInfo.css";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

function RestaurantInfo(){
  const {user,reviews,setReviews}=useContext(Cont);
  
const { id } = useParams();
  
useEffect(()=>{
  fetch("/reviews")
  .then(res=>res.json())
  .then(reviewData=>{
    setReviews(reviewData)
  })
},[])
let filteredReviews = reviews.filter(review => {
  if(review.restaurant?.id) {
    return review.restaurant.id === parseInt(id);
  }
  return null;
})
function handleDelete(reviewtodelete){
  const newReviews=reviews.filter(r=>r.id !== reviewtodelete)
   setReviews(newReviews)
   
 }
    return(
        <>
     
     <Box mt={2} mr={160} mb={1}>
      <ColorButton  className="backb" href="/restaurants" variant="contained">Back</ColorButton>
      </Box>
      <Grid container direction="row" justifyContent="center">
      <Grid item xs={6}>
      <ReservationForm user={user}  />
      </Grid>
      <Grid item xs={6}>
      <AddReviewForm  handleAddReviews={(review) => setReviews([...reviews, review])} />
      {filteredReviews.map((review) => {
        return (
          <ReviewCard key={review.id} id={review.id} review={review}  handleDelete={handleDelete}/> 
        )
      })}
      </Grid>
      </Grid>
        </>
    )
}
export default RestaurantInfo;