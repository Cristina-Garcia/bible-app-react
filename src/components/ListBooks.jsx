import '../styles/listBooks.css'
function ListBooks({ books, getBibleBookId, closeBooksList }) {
  return (
    <div className="books-chapters">
      <div className="title">
        <h5>BOOKS</h5>
        <div className="close-icon" onClick={() => closeBooksList()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="list-books">
        <ul>
          {books.map((book) => {
            return (
              <li key={book.id} onClick={() => getBibleBookId(book.id)}>
                {book.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ListBooks
