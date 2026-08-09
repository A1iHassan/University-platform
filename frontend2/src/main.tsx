import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/mainLayout'

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "/", element: <></> },
			{ path: "/aboutus", element: <></> },
			{ path: "/president", element: <></> },
			{ path: "/applications", element: <></> },
			{ path: "/applications/details", element: <></> },
			{ path: "/applications/apply", element: <></> },
			{ path: "/news", element: <></> },
			{ path: "/contacts", element: <></> },
			{ path: "/faculties", element: <></> },
			{ path: "/a", element: <></> },
			{ path: "/b", element: <></> },
		],
	},
	{
		path: "/login",
		element: <></>,
	},
	{
		element: <></>,
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
