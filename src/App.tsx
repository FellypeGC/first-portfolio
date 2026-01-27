import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/*Renders the matched child route component (e.g., Home, Projects, NotFound) */}
    </>
  )
}

export default App
