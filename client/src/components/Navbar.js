


function Navbar({ setUser,user}){
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
   

       return( <>
       <h1>Navbar</h1>
       <nav className="nav navbarstyle">
  <a   href="/about"> About</a>
  <a href="/restaurants">  Restaurants</a>
  
  <button type="button" className="btn btn-primary logoutbtn"onClick={handleLogoutClick}>Logout</button>


</nav>
        
  
          
         
        
          
         
        </>
    )
}
export default Navbar;

/* if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
; 

<a className="nav-link nlink" href="/about">  About</a>
  <a className="nav-link nlink" href="/restaurants">Restaurants</a>
  <button type="button" className="btn btn-primary logoutbtn"onClick={handleLogoutClick}>Logout</button>
*/