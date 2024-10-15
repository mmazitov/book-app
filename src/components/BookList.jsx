import '../App.css';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../API';
import { useAppContext } from './context/appContext';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const {favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();
  
  console.log(favorites)

  const favoriteChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  }
  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        console.log(response.data)
        setBooks(response.data);
      })
      .catch(error => {
        console.log(error)
      });
  }, []);
  
  return (
    <div className='book-list'>
      {books.map(book => (
        <div key={book.id} className='book'>
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img 
              src={book.image_url} 
              alt="#" 
              className='book-img' 
              onClick={() => navigate(`/books/${book.id}`)}/>
          </div>
          <div>
            {favoriteChecker(book.id) ? (
              <button 
              className='book-btn' 
              onClick={()=>removeFromFavorites(book.id)}>
              Remove from Favorites
            </button>
            ) : (
              <button 
                className='book-btn' 
                onClick={()=>addToFavorites(book)}>
                Add to Favorites
              </button>
            )}
            
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookList
