import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import LoginPage from './pages/loginPage'
import { loginAction } from './actions/loginAction'
import HomePage from './pages/homePage'
import AboutUs from './pages/about'

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/login",
		element: <LoginPage />,
		action: loginAction,
	},
	{
		path: "/about",
		element: <AboutUs />,
	},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
