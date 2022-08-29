
import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";
function RestaurantInfo({user,handleAddReviews}){
const[reviews,setReviews]=useState([]);

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
    
    return(
        <>
        <h1>Resto Info</h1>
     

      <a href="/restaurants"><button>Back</button></a>
      <ReservationForm user={user} />
      <AddReviewForm user={user} handleAddReviews={handleAddReviews} />
      {filteredReviews.map((review) => {
        return (
          <ReviewCard key={review.id} id={review.id} review={review}  user={user} /> 
        )
      })}
        </>
    )
}
export default RestaurantInfo;