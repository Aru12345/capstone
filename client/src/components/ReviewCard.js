import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Cont } from "../Cont";
function ReviewCard({review,handleDelete}){
  const {user}=useContext(Cont);
    const{id,img,r,picture,user:reviewuser}=review
    function handleDeleteClick() {
        fetch(`/reviews/${review.id}`, {
          method: "DELETE",
        })
          handleDelete(review.id)
      }
    return(
        <>
        <img src={img}/>
      <img src={picture} />
        <p></p>
        <p>{r}</p>
        <h6>By {review.user.name}</h6>
                
        {user.id===reviewuser.id&&<button  onClick={handleDeleteClick}  >Delete</button>}
        </>
    )
}
export default ReviewCard;