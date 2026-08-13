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
import LoginPage from './pages/applicationForm'
import AdminDashboard from './layouts/adminLayout'
import AdminsLoginPage from './pages/adminForm'
import CurriculumsPage from './components/teacherDashboar/curriculumsPage'
import NewCurriculum from './components/teacherDashboar/newCurriculum'
import AdminStudents from './components/teacherDashboar/adminStudents'
import AdminsResultsEntery from './components/teacherDashboar/adminsResultsEntery'
import AdminsResults from './components/teacherDashboar/adminsResults'
import DeanStudentPage from './pages/deanStudentPage'
import ScienceSecretariatPage from './pages/scienceSecretariatPage'
import Admission from './pages/admissionsPage'
import AdminApplications from './components/teacherDashboar/applications'
import CrewPage from './pages/crewPage'

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/aboutus", element: <AboutPage /> },
			{ path: "/president", element: <PresidentPage /> },
			{ path: "/applications/student-apply", element: <LoginPage /> },
			{ path: "/applications/admins-apply", element: <AdminsLoginPage /> },
			{ path: "/news", element: <></> },
			{ path: "/crew", element: <CrewPage /> },
			{ path: "/deanship/students", element: <DeanStudentPage /> },
			{ path: "/secretariat/science", element: <ScienceSecretariatPage /> },
			{ path: "/new-admissions", element: <Admission /> },
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
		path: "/dashboard/student",
		element: <StudentsLayout />,
		children: [],
	},
	{
		path: "/dashboard/admins",
		element: <AdminDashboard />,
		children: [
			{ path: "/dashboard/admins/curriculums", element: <CurriculumsPage /> },
			{ path: "/dashboard/admins/curriculums-edit", element: <NewCurriculum /> },
			{ path: "/dashboard/admins/students", element: <AdminStudents /> },
			{ path: "/dashboard/admins/results", element:  <AdminsResults /> },
			{ path: "/dashboard/admins/results-entery", element: <AdminsResultsEntery /> },
			{ path: "/dashboard/admins/new-students", element: <AdminApplications /> },
			  
		]
	},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
