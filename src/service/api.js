import axios from 'axios'

const URL = 'https://api.scripture.api.bible/v1/bibles/b32b9d1b64b4ef29-01'

const apikey = import.meta.env.VITE_API_KEY

const options = {
  method: 'GET',
  headers: {
    'api-key': apikey,
  },
  responseType: 'json',
}

//get books

async function getBooks() {
  const response = await axios.get(`${URL}/books`, options)
  const data = response.data.data
  return data
}
// get Chapters
const getChapters = async (bibleBookID) => {
  const response = await axios.get(
    `${URL}/books/${bibleBookID}/chapters`,
    options
  )
  return response.data.data
}
//getPassages
const getPassages = async (passageId) => {
  const response = await axios.get(`${URL}/passages/${passageId}`, options)
  return response.data.data
}
// get verses
const getVerses = async (chapterId) => {
  const response = await axios.get(
    `${URL}/chapters/${chapterId}/verses`,
    options
  )
  return response.data
}

// get a search
const searching = async (query) => {
  const response = await axios.get(
    `${URL}/search?query=${query}&offset=1&sort=relevance`,
    options
  )
  const result = response.data.data.verses
  return result
}

const query = 'amor'
export const getsRequests = {
  getBooks,
  getChapters,
  getPassages,
  getVerses,
  searching,
}

getsRequests.searching(query)
