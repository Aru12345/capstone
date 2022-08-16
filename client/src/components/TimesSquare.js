import ts from '../mediafiles/ts.mp4'
import test from '../mediafiles/test.png'
import tsquare from '../mediafiles/tsquare.mp4'
import {Link} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
function TimesSquare(){
    return(
        <>
     <div id="ts">
        <video autoPlay muted loop id="myVideo">
        <source src={tsquare} type="video/mp4"/> 
        <Link className="explore" to="/home">EXPLORE DC</Link>
      </video>
  
    </div>
    <div id="image">
        <img src="pic.jpg" />
    </div>
    <img src={test}  width="500" height="600"></img>
        </>
    )
}
export default TimesSquare;