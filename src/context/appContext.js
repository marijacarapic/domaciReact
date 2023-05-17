import {createContext, useContext} from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context == undefined) {
        throw new Error;

    }
    return context;
};

const AppContextProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);
     
    const addToFavourites = () => {

    };

    const removeFromFavourites = (id) => {
        
    };

     return (

        <AppContext.Provider value = {{favorites, addToFavourites, removeFromFavourites}}>
            {children}
        </AppContext.Provider>
    
     );

};

export default AppContextProvider;