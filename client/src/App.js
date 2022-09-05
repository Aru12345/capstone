
import './App.css';

import { useEffect,useContext } from 'react';
import About from './components/About'
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import Loggin from './components/Loggin';
import RestaurantInfo from './components/RestaurantInfo';
import MyReservations from './components/MyReservations';
import { Route,Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import { Cont } from './Cont';
import "./App.css";

function App() {
  

  const {user,setUser}=useContext(Cont)
  useEffect(() => {
    document.title = "Nyc";
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me", { credentials: "same-origin" }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);
  

  
  if (!user) return <Loggin error={'please login'} onLogin={setUser} />;
  return (
    
    <div className="App">
   <Navbar />
   <Routes>
    <Route exact path="/blogs" element={<Blogs />} />
    
    <Route exact path="/myreservations" element={<MyReservations />} />

    <Route exact path="/restaurants/:id" element= {<RestaurantInfo  />}  />

    <Route exact path="/restaurants" element={<Restaurants />} />

     <Route exact path="/about" element={<About  />} />

   </Routes>
   
   
    </div>

  );
}

export default App;
  // function handleUpdateReservation(updatedReservation) {
  //   const updatedReservations = reservations.map((reservation) =>{
  //   return reservation.id === updatedReservation.id ? updatedReservation : reservation;
  //    } );
  //   setReservations(updatedReservations);
  // }

// /*
//    {/* { <Route exact path="/myreservations/:id/update" element={<EditReservationForm reservations={reservations} setReservations={setReservations} onUpdateReservation={handleUpdateReservation} />}/> } */}
//     {/* <Route exact path="/myreservations/:id/update"  element={<EditForm />}/> */}
//   <Routes>
      
//       <Route exact path="/home" element={<Home user={user} />} />
//       <Route exact path="/signup" element={<Signup />} />
//       <Route exact path="/login" element={<Login />} />
    

//       </Routes>
//         <Navbar  user={user} setUser={setUser} />  
//          useEffect(() => {
//     // auto-login
//     fetch("/me", { credentials: "same-origin" }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);
 
  
// */

/*Latest 
import About from './components/About';
import TimesSquare from './components/TimesSquare';
import Restaurants from './components/Restaurants';
  /* <Routes>
    <Route exact path="/about" element={<About  />} />
    <Route exact path="/restaurants" element={<Restaurants />} />
   
    <Route exact path="/"  element={<TimesSquare />} />
    </Routes>

*/