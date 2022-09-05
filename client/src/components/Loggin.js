import Login from './Login';
import Signup from './Signup'
import { useState } from "react"; 
import tsquare from '../mediafiles/tsquare.mp4'
import { useContext } from 'react';
import { Cont } from '../Cont';
import "./stylingfolder/Login.css"
function Loggin({onLogin}){
    // const [showLogin, setShowLogin] = useState(true);
    const {showLogin,setShowLogin}=useContext(Cont)
    return(
        <> 
        <div className='video-container'>
        <video autoPlay muted loop >
          <source  src={tsquare} type="video/mp4"/> 
            
           </video>
           
        {showLogin ? (
           
            
             <div className='overlay' >
           
           {/* <video autoPlay muted loop className='video-container' >
          <source  src={tsquare} type="video/mp4"/> 
            
           </video> */}
          
       
            <Login onLogin={onLogin} />
            
            
            
            
          </div>
            
           
        ) : (
          <>
             <div className='overlay'   >
             {/* <video autoPlay muted loop className='video-container' >
          <source  src={tsquare} type="video/mp4"/> 
            
      </video> */}
     
            <Signup onLogin={onLogin} />
           
            
             
           
            </div>
          </>
        )}
        </div>
        </>
    )
}
export default Loggin;