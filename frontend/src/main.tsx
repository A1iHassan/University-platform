import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import LoginPage from './pages/loginPage'
import { loginAction } from './actions/loginAction'

const router = createBrowserRouter([
	{
		path: "/",
		element: <>Hi</>,
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
