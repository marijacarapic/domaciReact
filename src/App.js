import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BookClub from './pages/BookClub';
import BookList from './pages/BookList';
import Favorites from './pages/Favorites';



function App() {
  return (
    <div className="App">

      <NavBar />

      <Routes>

        <Route path="/" element={<BookList />} />  {/*ovo je za main page*/}
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/bookclub" element={<BookClub />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
