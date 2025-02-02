import './App.css';

import { Route, Routes } from 'react-router-dom';

import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
