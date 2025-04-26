import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './LandingPage.jsx'
import {FindJobs,TopCompany, JobTracker, MyCalendar, Document, Messages, Notification} from './index.js'

const route = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: '/FindJobs',
        element: <FindJobs />
      },
      {
        path: '/topCompany',
        element: <TopCompany />
      },
      {
        path: '/jobTracker',
        element: <JobTracker />
      },
      {
        path: '/calendar',
        element: <MyCalendar />
      },
      {
        path: '/document',
        element: <Document />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/notification',
        element: <Notification />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}>
    <LandingPage/>
    </RouterProvider>
  </StrictMode>,
)
