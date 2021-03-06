import React, {Component} from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class BookList extends Component {

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<BookShelf />				
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<BookShelf />	
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<BookShelf />	
						</div>
					</div>
				</div>
				<div className="open-search">
					<Link 
						to='/search' 
					/>
				</div>
			</div>
		)
	}
}

export default BookList