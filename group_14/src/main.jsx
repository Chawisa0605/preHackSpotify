import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TrackDetail from './pages/TrackDetail.jsx'
import PlayList from './pages/PlayList.jsx'
import Artist from './pages/Artist.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayList />,
  },
  {
    path: "/playlist/:playlistId",
    element: <PlayList />,
  },
  {
    path: "/trackdetail/:trackId",
    element: <TrackDetail />,
  },
  {
    path: "/playlist",
    element: <PlayList />,
  },
  {
    path: "/trackdetail",
    element: <TrackDetail />,
  },
  {
    path: "/artist/:trackId",
    element: <Artist />,
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


