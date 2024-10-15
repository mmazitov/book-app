import '../App.css';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BOOK_DETAILS_URL } from '../API';

const BookDetails = () => {
  const { id } = useParams(); 

  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
    .then(response => {
      setBook(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [id])
  return (
    <div className='book-details'>      
      <div className='book-image'>
        <h2>{book.title}</h2>
        <img src={book.image_url} alt="#" className='book-img'/>
      </div>
      <div className='book-info'>
        <h2>Description:</h2>
        <p>{book?.description}</p>
        <h2>Authors:</h2>
        <p>{book?.authors}</p>
        <h2>Genres:</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  )
}

export default BookDetails
