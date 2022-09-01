
import './App.css';

import { useEffect,useState } from 'react';
import About from './components/About'
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import Loggin from './components/Loggin';
import RestaurantInfo from './components/RestaurantInfo';
import MyReservations from './components/MyReservations';
import { Route,Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import {Cont} from './components/Cont'

function App() {
  const [user, setUser] = useState(null);
  const[reservations,setReservations]=useState([]);
  const[reviews,setReviews]=useState([]);
  const[current,setCurrent]=useState({});
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
  function handleAddReviews(newReview) {
    setReviews([...reviews, newReview]);
  }

  
  if (!user) return <Loggin error={'please login'} onLogin={setUser} />;
  return (
    <Cont.Provider value={ {current,setCurrent}}>
    <div className="App">
   <Navbar user={user} setUser={setUser} />
   <Routes>
    <Route exact path="/blogs" element={<Blogs />} />
    
    <Route exact path="/myreservations" element={<MyReservations user={user}  reservations={reservations} setReservations={setReservations}/>} />

    <Route exact path="/restaurants/:id" element= {<RestaurantInfo handleAddReviews={handleAddReviews} user={user} reviews={reviews} setReviews={setReviews}/>}  />

    <Route exact path="/restaurants" element={<Restaurants />} />

     <Route exact path="/about" element={<About user={user} />} />

   </Routes>
   
   
    </div>
    </Cont.Provider>
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