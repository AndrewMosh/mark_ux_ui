import './App.css'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
		<Sidebar />
		<Outlet />
    </>
  )
}

export default App
