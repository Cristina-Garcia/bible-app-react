import Home from '../Pages/Home'
import Welcome from '../Pages/Welcome'
import Passages from '../Pages/Passages'
import ErrorPage from '../Pages/ErrorPage'
import ResultSearch from '../Pages/ResultSearch'

const routes = [
  {
    path: '/',
    element: <Home />,
    exact: true,
    label: 'Home',
    errorElement: <ErrorPage />,
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
        exact: true,
        label: 'Passages',
      },
      {
        path: 'search',
        element: <ResultSearch />,
        exact: true,
        label: 'Result of Search',
      },
    ],
  },
]

export default routes
