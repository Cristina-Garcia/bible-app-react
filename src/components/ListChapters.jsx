import '../styles/ListChapters.css'
function ListChapters({
  chapters,
  backToBooksList,
  closeChaptersList,
  getPassageId,
}) {
  return (
    <div className="chapters-container">
      <div className="header-title-container">
        <div className="back-arrow" onClick={() => backToBooksList()}>
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <h5>Capítulos </h5>
        <div className="close-icon" onClick={() => closeChaptersList()}>
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
      <div className="list-chapters">
        <ul>
          {chapters.map((chapter) => {
            return (
              <li key={chapter.id} onClick={() => getPassageId(chapter.id)}>
                {chapter.number}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ListChapters
