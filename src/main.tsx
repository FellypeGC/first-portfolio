import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import "./i18n.ts";
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
import Skills from './pages/Skills.tsx'
import NotFound from './pages/NotFound.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
