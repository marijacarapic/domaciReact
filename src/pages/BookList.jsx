import React,{useState, useEffect} from "react";
import '../App';
import {API_URL} from '../API';
import axios from 'axios';
import { useAppContext } from "../context/appContext";

const BookList = () => {

  const [books, setBooks] = useState([]);

  const {favorites, addToFavourites, removeFromFavourites} = useAppContext();

console.log("favourites", favorites);

const favoritesChecker = (id) => {
  const boolean = favorites.some((book) => book.id ===id);

  return boolean;
};

useEffect(() => {
  axios
   .get(API_URL)
   .then((res) => {
      console.log(res.data);
      setBooks(res.data);
  })
    .catch((err)=>console.log(err));
  }, []);

  return (
   <div className="book-list">
    {books.map((book)=> (
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
    ))}
    </div>

  );
};

export default BookList;