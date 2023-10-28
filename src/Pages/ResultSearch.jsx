import { useContext } from 'react'
import { DataContext } from '../context'
import styled, { StyleSheetManager } from 'styled-components'
import '../styles/search.css'

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.3rem;
  font-size: ${(props) => (props.size ? props.size : '16px')};
  font-family: ${(props) => (props.font ? props.font : 'system-ui')};
`
function ResultSearch() {
  const { resultSearch, size, font } = useContext(DataContext)
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'font'}>
      <Container size={size} font={font}>
        {resultSearch.length >= 1 ? (
          resultSearch.map((result) => {
            return (
              <div key={result.id} className="result">
                <h3>{result.reference}</h3>
                <p>{result.text}</p>
              </div>
            )
          })
        ) : (
          <h2>Lo sentimos, no hubo coincidencias con su búsqueda.</h2>
        )}
      </Container>
    </StyleSheetManager>
  )
}

export default ResultSearch
