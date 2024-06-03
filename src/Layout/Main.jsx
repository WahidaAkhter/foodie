import { Outlet } from 'react-router'
import { Footer } from '../shared/Footer'
import Navbar from '../shared/Navbar'


export const Main = () => {
  return (
      <div>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  )
}

