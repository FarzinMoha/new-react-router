import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router'
import './App.css'

function App() {
  return (
    <>
    <ReactNotifications />
    <RouterProvider router={Router} />
    </>
  )
}

export default App
