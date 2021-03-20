import React, { createContext, useState } from 'react'
import uuid from 'uuid/dist/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Le Caméléon', id: 1 },
        { title: 'Une Vie de Boy', id: 2 },
        { title: 'Vol de nuit', id: 3 }
    ])

    const addBook = (title) => {
        setBooks([...books, { title, id: uuid() }])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
