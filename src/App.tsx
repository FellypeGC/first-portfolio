import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/*Renders the matched child route component (e.g., Home, Projects, NotFound) */}
    </>
  )
}

export default App
