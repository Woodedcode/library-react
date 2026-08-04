import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Book from './ui/Book.jsx'
import {data} from '../dada'

const Featured = () => {
    function getFiveStarBooks() {
        books.filter(book => book.rating === 5)
    }
  return (
    <section id="featured">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className="purple">books.</span>
                </h2> 
                <div className="books">
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured;
