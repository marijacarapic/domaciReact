import React from "react";
import '../App';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="navbar"> 
    <div>
      <h1 >Readers' Room</h1>
    </div>
    <div> 
     <Link to = '/favorites'>
     <h3><i >Your Favourites </i> </h3>
     </Link> 
       </div>
    <div>
      <Link to = 'bookclub'>
       <h3><i>Book Club </i></h3>
       </Link>
       </div>
    </div>
  );
};

export default NavBar;