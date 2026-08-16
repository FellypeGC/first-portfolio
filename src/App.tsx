import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/*Renders the matched child route component (e.g., Home, Projects, NotFound) */}
      <Footer />
    </>
  )
}

export default App
