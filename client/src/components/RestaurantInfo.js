
import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";
import { useContext } from "react";
import { Cont } from "../Cont";
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
        <h1>Resto Info</h1>
     

      <a href="/restaurants"><button>Back</button></a>
      <ReservationForm user={user}  />
      <AddReviewForm  handleAddReviews={(review) => setReviews([...reviews, review])} />
      {filteredReviews.map((review) => {
        return (
          <ReviewCard key={review.id} id={review.id} review={review}  handleDelete={handleDelete}/> 
        )
      })}
        </>
    )
}
export default RestaurantInfo;