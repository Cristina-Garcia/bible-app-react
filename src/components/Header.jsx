import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ConfigUser from './ConfigUser'
import ListBooks from './ListBooks'
import { DataContext } from '../context'
import ListChapters from './ListChapters'
import logo from '../img/jesus-by-freepik.png'
import '../styles/header.css'

function Header() {
  const {
    books,
    chapters,
    getBibleBookId,
    getPassageId,
    openChapters,
    setOpenChapters,
    openList,
    setOpenList,
    getSearch,
  } = useContext(DataContext)
  const [openConfig, setOpenConfig] = useState(false)

  const [query, setQuery] = useState()

  const handleToggle = () => {
    setOpenList(false)
    setOpenChapters(false)
    setOpenConfig((current) => !current)
  }

  const closeBooksList = () => {
    setOpenList(false)
  }
  const handleToggleList = () => {
    setOpenConfig(false)
    setOpenChapters(false)
    setOpenList((current) => !current)
  }

  const closeChaptersList = () => {
    setOpenChapters(false)
  }
  const backToBooksList = () => {
    setOpenChapters(false)
    setOpenList(true)
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const search = (e) => {
    e.preventDefault()
    getSearch(query)
  }

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo-navbar">
            <div>
              <Link to="/">
                <img src={logo} alt="logo imagen de jesus by freepik" />
              </Link>
            </div>
          </div>
          <form action="">
            <input type="search" onChange={handleChange} />
            <button type="submit" className="search-button" onClick={search}>
              Search
            </button>
          </form>
        </nav>
        <div className="reader-header">
          <div className="chapter-container">
            <input value="Bible Books" readOnly />
            <div className="chevron-down" onClick={handleToggleList}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </div>
          <div className="font-container" onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" />
            </svg>
          </div>
          {openList === true ? (
            <ListBooks
              books={books}
              getBibleBookId={getBibleBookId}
              closeBooksList={closeBooksList}
            />
          ) : (
            ''
          )}
          {openChapters && (
            <ListChapters
              chapters={chapters}
              backToBooksList={backToBooksList}
              closeChaptersList={closeChaptersList}
              getPassageId={getPassageId}
            />
          )}
          {openConfig === true ? <ConfigUser /> : ''}
        </div>
      </header>
    </>
  )
}

export default Header
