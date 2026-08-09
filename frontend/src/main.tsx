import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import LoginPage from './pages/loginPage'
// import { loginAction } from './actions/loginAction'
import HomePage from './pages/homePage'
import AboutUs from './pages/about'
import Goals from './pages/goals'
import Admission from './pages/admissions'
import Pages from './pages/programs'
import Requirements from './pages/admissionRequirements'
import President from './pages/presidentWord'
import Students from './dashboards/student'

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/about",
		element: <AboutUs />,
	},
	{
		path: "/goals",
		element: <Goals />
	},
	{
		path: "/admissions",
		element: <Admission />,
	},
	{
		path: "/programs",
		element: <Pages />
	},
	{
		path: "/admission-requirements",
		element: <Requirements />
	},
	{
		path: "/president",
		element: <President />
	},
	{
		path: "/dashboard/student",
		element: <Students />
	},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
