import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function AddReviewForm({user,handleAddReviews}){
    const params = useParams();
    const [reviewData, setreviewData] = useState({
        img:"",
        r:""
      });

      function handleReviewChange(event) {
        setreviewData({
          ...reviewData,
          [event.target.name]: event.target.value,
        });
      }
      function handleReviewSubmit(event) {
        event.preventDefault();
    
        const newReview = {
          ...reviewData,
          restaurant_id: params.id,
          user_id: user.id,
        };
        
        fetch(`/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        })
          .then((r) => r.json())
          .then(
            setreviewData({
              img: "",
              r: ""
            
            })
          );
        
      }
    return  (
        <>
        <h1>Add review form</h1>
        <form onSubmit={handleReviewSubmit}>
       
        <label htmlFor="img"  >Image</label>
         <input type="text" name="img"   value={reviewData.img}  onChange={handleReviewChange} placeholder="name" />
       
        <label htmlFor="r"  >Review</label>
         <input type="text" name="r"   value={reviewData.r}  onChange={handleReviewChange} placeholder="date" />
     
       <input type="submit" />

        </form>
        </>
    )
}
export default AddReviewForm;