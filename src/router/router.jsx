import Home from '../Pages/Home'
import Welcome from '../Pages/Welcome'
import Passages from '../Pages/Passages'
import ErrorPage from '../Pages/ErrorPage'
import ResultSearch from '../Pages/ResultSearch'

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    exact: true,
    label: 'Home',
    children: [
      {
        path: '/',
        element: <Welcome />,
        exact: true,
        label: 'Welcome',
      },
      {
        path: 'passages/:passagesId',
        element: <Passages />,
        errorElement: <ErrorPage />,
        exact: true,
        label: 'Passages',
      },
      {
        path: 'search',
        element: <ResultSearch />,
        exact: true,
        errorElement: <ErrorPage />,
        label: 'Result of Search',
      },
    ],
  },
]

export default routes
