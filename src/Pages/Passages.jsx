import { useContext, useState } from 'react'
import { DataContext } from '../context'
import styled, { StyleSheetManager } from 'styled-components'
import '../styles/passages.css'
import { useParams } from 'react-router-dom'

const Container = styled.div`
  font-size: ${(props) => (props.size ? props.size : '16px')};
  font-family: ${(props) => (props.font ? props.font : 'system-ui')};
`
function Passages() {
  const { passages, size, font, getPassageId } = useContext(DataContext)
  const [chapter, setChapter] = useState('')
  const content = passages.content
  const { passagesId } = useParams()
  const nextChapter = (chapterId) => {
    const book = chapterId.slice(0, 4)
    const chap = chapterId.substring(4)
    const next = Number(chap) + 1
    const id = book.concat(next)
    setChapter(id)
    if (chapter !== '') {
      getPassageId(chapter)
      setChapter('')
    }
  }

  const previousChapter = (chapterId) => {
    const book = chapterId.slice(0, 4)
    const chap = chapterId.substring(4)
    const next = Number(chap) - 1
    if (next <= 0) {
      return
    }
    const id = book.concat(next)
    setChapter(id)
    if (chapter) {
      getPassageId(chapter)
      setChapter('')
    }
  }

  return (
    <div className="passage">
      <div className="controllers">
        <div
          className="control chevron-left"
          onClick={() => previousChapter(passagesId)}
        >
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div>
          <h5>{passages.reference}</h5>
        </div>
        <div
          className=" control chevron-right"
          onClick={() => nextChapter(passagesId)}
        >
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'font'}>
        <Container
          dangerouslySetInnerHTML={{
            __html: content,
          }}
          className="passage-container"
          size={size}
          font={font}
        ></Container>
      </StyleSheetManager>
    </div>
  )
}

export default Passages
