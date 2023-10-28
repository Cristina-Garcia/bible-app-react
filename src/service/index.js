import axios from 'axios'
const URL = 'https://api.scripture.api.bible/v1/bibles/b32b9d1b64b4ef29-01'

const options = {
  method: 'GET',
  headers: {
    'api-key': '30b6c657a2ab6f5ce5719a479a938fc9',
  },
}

//get books

export const getBooks = () => {
  return axios.get(`${URL}/books`, options)
}
// get Chapters
export const getChapters = (bibleBookID) => {
  return axios.get(`${URL}/books/${bibleBookID}/chapters`, options)
}
//getPassages
export const getPassages = async (passageId) => {
  return axios.get(`${URL}/passages/${passageId}`, options)
}
// get verses
export const getVerses = async (chapterId) => {
  return axios.get(`${URL}/chapters/${chapterId}/verses`, options)
}
