import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className="error-page">
      <p>{error.statusText || error.message}</p>
      <span>{error.status}</span>
      {error.status === 500 ? (
        <div>
          <p>Sorry, Its not you. Its us.</p>
          <span>dede</span>
        </div>
      ) : error.status === 404 ? (
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
      ) : (
        ''
      )}
      <button>
        <Link to="/">Back to Home </Link>
      </button>
    </div>
  )
}
