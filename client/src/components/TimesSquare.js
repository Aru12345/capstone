
import tsquare from '../mediafiles/tsquare.mp4'
import "./TimesSquare.css";
import { Link } from 'react-router-dom';
function TimesSquare(){
    return(
        <>
     <div class="video-container">
    <video autoPlay muted loop id="myVideo">
        <source  src={tsquare} type="video/mp4"/> 
     
     </video>
     <Link className="tour" to="/home">Get Started 🍎</Link>
     </div>
   
  
     </>
    )
}
export default TimesSquare;