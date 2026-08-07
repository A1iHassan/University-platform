import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import LoginPage from './pages/loginPage'
import { loginAction } from './actions/loginAction'
import HomePage from './pages/homePage'

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
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
