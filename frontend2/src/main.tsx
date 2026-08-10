import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/mainLayout'
import HomePage from './pages/homePage'
import StudentsLayout from './layouts/studentsLayout'
import './i18n/config'
import AboutPage from './pages/aboutPage'
import PresidentPage from './pages/presidentPage'
import RelationsPage from './pages/relationsPage'

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/aboutus", element: <AboutPage /> },
			{ path: "/president", element: <PresidentPage /> },
			{ path: "/applications", element: <></> },
			{ path: "/applications/details", element: <></> },
			{ path: "/applications/apply", element: <></> },
			{ path: "/news", element: <></> },
			{ path: "/contacts", element: <></> },
			{ path: "/faculties", element: <></> },
			{ path: "/library", element: <></> },
			{ path: "/relations", element: <RelationsPage /> },
		],
	},
	{
		path: "/login",
		element: <></>,
	},
	{
		path: "/dashboard/students",
		element: <StudentsLayout />,
		children: [],
	},
	{
		element: <></>,
		children: []
	},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
