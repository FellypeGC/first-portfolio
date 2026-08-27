/* eslint-disable react-refresh/only-export-components */
import './index.css'
import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import "./i18n.ts";

const Home = lazy(() => import('./pages/Home.tsx'))
const Projects = lazy(() => import('./pages/Projects.tsx'))
const Contact = lazy(() => import('./pages/Contact.tsx'))
const Skills = lazy(() => import('./pages/Skills.tsx'))
const NotFound = lazy(() => import('./pages/NotFound.tsx'))

function PageLoader() {
  return (
    <div className="flex-1 flex items-center justify-center py-24">
      <div className="flex flex-col items-center gap-3">
        <div className="w-6 h-6 rounded-full border-2 border-white/10 border-t-blue-600 animate-spin" aria-hidden />
        <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Loading…</span>
      </div>
    </div>
  )
}

const withSuspense = (el: React.ReactNode) => <Suspense fallback={<PageLoader />}>{el}</Suspense>

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: withSuspense(<Home />)
      },
      {
        path: '/projects',
        element: withSuspense(<Projects />)
      },
      {
        path: '/contact',
        element: withSuspense(<Contact />)
      },
      {
        path: '/skills',
        element: withSuspense(<Skills />)
      },
      {
        path: '*',
        element: withSuspense(<NotFound />)
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
