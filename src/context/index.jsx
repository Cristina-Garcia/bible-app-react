import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getsRequests } from '../service/api.js'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [chapters, setChapters] = useState([])
  const [passages, setPassages] = useState()
  const [bibleBookId, setBibleBookId] = useState(null)
  const [bookSelected, setBookSelected] = useState(false)
  const [openChapters, setOpenChapters] = useState(false)
  const [openList, setOpenList] = useState(false)
  const [loading, setLoading] = useState(true)

  const [size, setSize] = useState('16px')
  const [font, setFont] = useState('system-ui')

  const [resultSearch, setResultSearch] = useState()
  const navigateTo = useNavigate()

  const getSize = (size) => {
    setSize(size)
  }
  const getFontFamily = (font) => {
    setFont(font)
  }
  const getBibleBookId = async (id) => {
    setBibleBookId(id)
    setBookSelected(true)
    if (bookSelected === true) {
      setOpenList(false)
      setOpenChapters(true)
    }
  }

  const getPassageId = async (id) => {
    const passageId = id
    if (passageId) {
      try {
        const passagesList = await getsRequests.getPassages(passageId)
        setPassages(passagesList)
        navigateTo(`passages/${passageId}`)
        setOpenChapters(false)
      } catch (error) {
        console.log('Error', error)
      }
    }
  }

  const getSearch = async (query) => {
    if (query !== null) {
      try {
        const resultados = await getsRequests.searching(query)
        setResultSearch(resultados)
        navigateTo(`search?query=${query}`)
      } catch (error) {
        console.log('Error', error)
      }
    }
  }

  useEffect(() => {
    if (bibleBookId) {
      try {
        getsRequests.getChapters(bibleBookId).then((chaptersList) => {
          setChapters(chaptersList)
        })
      } catch (error) {
        console.log('Error', error)
      }
    }
  }, [bibleBookId])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const booksList = await getsRequests.getBooks()
        setBooks(booksList)
      } catch (error) {
        console.log('Error', error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <DataContext.Provider
      value={{
        loading,
        books,
        chapters,
        passages,
        getBibleBookId,
        bookSelected,
        setBookSelected,
        openChapters,
        setOpenChapters,
        getPassageId,
        openList,
        setOpenList,
        size,
        getSize,
        font,
        getFontFamily,
        getSearch,
        resultSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
