import React from "react";
import '../App';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="navbar">
      <div >
        <Link to='/'>
          <h1 >Readers' Room</h1>
        </Link>
      </div>
      <div >
        <Link to='/favorites'>
          <h4><i >Your Favourites </i> </h4>
        </Link>
      </div>
      <div>
        <Link to='bookclub'>
          <h4><i>Book Club </i></h4>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;