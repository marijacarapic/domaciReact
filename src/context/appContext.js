import {createContext, useContext} from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context === undefined) {
        throw new Error('Appcontext');

    }
    return context;
};

const AppContextProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);
     
    const addToFavourites = (book) => {
       const oldFavorites = [...favorites];

       const newFavorites = oldFavorites.concat(book);

       setFavorites(newFavorites);
    };

    const removeFromFavourites = (id) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((book) => book.id !== id);

        setFavorites(newFavorites);
    };

     return (

        <AppContext.Provider 
        value = {{favorites, addToFavourites, removeFromFavourites}}
        >
            {children}
        </AppContext.Provider>
    
     );

};

export default AppContextProvider;