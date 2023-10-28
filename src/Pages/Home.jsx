import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { DataProvider } from '../context'

import '../styles/hero.css'
function Home() {
  return (
    <DataProvider>
      <Header />
      <div className="hero">
        <Outlet />
      </div>
    </DataProvider>
  )
}

export default Home
