import { useState } from "react";
import { useParams } from "react-router-dom";



function AddReviewForm({user,handleAddReviews}){
    const params = useParams();
   const[img,setImg]=useState("");
   const[r,setR]=useState("");
   const[imgData,setimgData]=useState("");
      const newReview = {
        img,
        r,
        imgData,
        restaurant_id: params.id,
        user_id: user.id,
      };
      const configObj = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      };

      function handleReviewSubmit(event) {
        event.preventDefault();
        fetch(`/reviews`, configObj)
          .then((r) => r.json())
          .then((review)=>{
            handleAddReviews(review);
            setR('')
            setImg('')
            
          }
          );
      }
      
    return  (
        <>
        <h1>Add review form</h1>
        <form onSubmit={handleReviewSubmit}>
          <div>
          <label for=":main_image">Upload Image:</label>

      <input type="file"
       id="fr" name="fr"
       accept="image/*" onChange={(e) => setimgData(e.target.value)} />

          </div>

       <div>
        <label htmlFor="r"  >Review</label>
         <input type="text" name="r"   value={r}  onChange={(e) => setR(e.target.value)} placeholder="review" />
      </div>
       <input type="submit" />

        </form>
        </>
    )
}
export default AddReviewForm;