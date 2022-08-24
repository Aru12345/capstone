import Login from './Login';
import Signup from './Signup'
import { useState } from "react"; 
import tsquare from '../mediafiles/tsquare.mp4'

function Loggin({onLogin}){
    const [showLogin, setShowLogin] = useState(true);
    return(
        <> 
        {showLogin ? (
            <div class="video-container">
            <video autoPlay muted loop id="myVideo">
                <source  src={tsquare} type="video/mp4"/> 
            
             </video>
             
            <Login onLogin={onLogin} />
            
            <p   className="logintoggle" >
              Don't have an account? 
              <button className="btn btn-primary signupbtn"  onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </div>
        ) : (
          <>
             <div class="video-container">
    <video autoPlay muted loop id="myVideo">
        <source  src={tsquare} type="video/mp4"/> 
    
     </video>
     
            <Signup onLogin={onLogin} />
           
            <p className="logintoggle">
              Already have an account? &nbsp;
              <button  className="btn btn-primary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
            </div>
          </>
        )}
        </>
    )
}
export default Loggin;