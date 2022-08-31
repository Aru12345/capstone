import { useParams } from "react-router-dom";
function ReviewCard({review,user,handleDelete}){

    const{id,img,r,user:reviewuser}=review
    function handleDeleteClick() {
        fetch(`/reviews/${review.id}`, {
          method: "DELETE",
        })
          handleDelete(review.id)
      }
    return(
        <>
        <img src={img}/>
        <p></p>
        <p>{r}</p>
        <h6>By {review.user.name}</h6>
                
        {user.id===reviewuser.id&&<button  onClick={handleDeleteClick}  >Delete</button>}
        </>
    )
}
export default ReviewCard;