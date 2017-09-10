import React from 'react'
import Book from './Book'

function BookShelf() {
	return (
		<div className="bookshelf-books">
			<ol className="books-grid">
				<Book />
			</ol>
		</div>
	)
}

export default BookShelf

