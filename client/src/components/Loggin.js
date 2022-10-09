/* Toggles between login and signup pages*/
import Login from "./Login";
import Signup from "./Signup";
import tsquare from "../mediafiles/tsquare.mp4";
import { useContext } from "react";
import { Cont } from "../Cont";
import "./stylingfolder/Login.css";
function Loggin({ onLogin }) {
  const { showLogin } = useContext(Cont);
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={tsquare} type="video/mp4" />
        </video>

        {showLogin ? (
          <div className="overlay">
            <Login onLogin={onLogin} />
          </div>
        ) : (
          <>
            <div className="overlay10">
              <Signup onLogin={onLogin} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Loggin;
