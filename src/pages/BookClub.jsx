import React from "react";
import booklover from "../assets/booklover1.jpg";
import '../App';

const BookClub = () => {

  const redditUrl = "https://www.reddit.com/r/books/";
  const trailer = "https://www.youtube.com/watch?v=eFYUX9l-m5I";
  return (
    <div className="book-club">
      <div className = "book-club-top"
      style = {{backgroundImage: `url(${booklover})`}}
      ></div>
      <div className="book-club-bottom">
        <h1>ABOUT US</h1>
        <p> <i>Welcome to the Book Club! </i>
        <br/>
           Step into our virtual library and discover
           a world where words come alive, stories
           captivate, and imaginations thrive.
           At Reader's Room, we believe that books
             have the power to transport us to
              different realms, connect us with
               diverse perspectives, and ignite
                meaningful conversations.
                <br/>
                <br/>
                Link to Reddit, where you can post and discuss about books:{" "}

          <a href={redditUrl} target="_blank" rel="noopener noreferrer">
            <span style={{ textDecoration: "none", color: "brown", cursor: "pointer" }}>Clik here!</span>
          
          </a>
                <p>
                  <br/>
                <b>Book Recommendation</b>: <i>A Man Called Ove</i>
                <br/>
                We're excited to recommend the
                 captivating novel, "A Man Called Ove,
                 " written by Fredrik Backman.
                  This heartwarming and poignant story
                   follows the life of Ove, a grumpy 
                   yet lovable curmudgeon who finds
                    unexpected connections with his
                     quirky neighbors. With its blend 
                     of humor, emotion, and
                      unforgettable characters,
                       "A Man Called Ove" is sure to
                        leave a lasting impression.
                        <br/>    
                        <br/>                
We hope you enjoy this book!
 Once you've finished reading it,
  we recommend checking out the movie adaptation
   with Tom Hanks as the lead actor. To give you
    a taste of what to expect, here's the trailer
     for the film with the same title: {" "}
     <a href={trailer} target="_blank" rel="noopener noreferrer">
            <span style={{ textDecoration: "none", color: "brown", cursor: "pointer" }}>Clik here!</span>
          
          </a>
                        </p>


                        <p>
                       
         
                        </p>

                </p>
      </div>
      </div>
  );
};

export default BookClub;