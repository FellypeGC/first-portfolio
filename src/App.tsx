import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0B10]">
      <Header />
      <ScrollToTop />
      <main className="flex-1 flex flex-col">
        <Outlet /> {/*Renders the matched child route component (e.g., Home, Projects, NotFound) */}
      </main>
      <Footer />
    </div>
  )
}

export default App
