import React from "react";
import '../App';
import { useAppContext } from "../context/appContext";

const Favorites = () => {

  const {favorites, addToFavourites, removeFromFavourites} = useAppContext();

  console.log("favourites", favorites);

   const favoritesChecker = (id) => {
   const boolean = favorites.some((book) => book.id ===id);

     return boolean;
   };

  return (
 <div className="favorites">
       {favorites.length > 0 ? favorites.map((book)=> (
      <div key = {book.id} className = "book">
        <div>
          <h4><i>{book.title} </i></h4>
          </div>
        <div>
          <img src= {book.image_url} alt = "#"/> 
          </div>
        <div>
          {favoritesChecker(book.id) ? (
          <button onClick={()=> removeFromFavourites(book.id)} >
           Remove from Favorites 
          </button>
      ) : (
          <button onClick={()=> addToFavourites(book)} >
               Add to Favorites 
          </button>
      
        )}
          </div>

        </div>
    )) : <h4> You don't have any favorites book yet!</h4>}
    </div>
  );
};

export default Favorites;