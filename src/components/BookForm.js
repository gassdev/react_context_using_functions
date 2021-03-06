import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {

    const { dispatch } = useContext(BookContext)

    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_BOOK', book: {
                title
            }
        })
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input type="submit" value="add book" />
        </form>
    )
}

export default BookForm
