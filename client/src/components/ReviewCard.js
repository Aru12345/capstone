import { useParams } from "react-router-dom";
function ReviewCard({review,user}){

    const{id,img,r}=review
    return(
        <>
        <img src={img}/>
        <p></p>
        <p>{r}</p>
        <h6>By {review.user.name}</h6>
        
        </>
    )
}
export default ReviewCard;