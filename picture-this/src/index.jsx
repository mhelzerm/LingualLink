import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import NavbarWrapper from './NavbarWrapper'

//import each page here
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Communication from './pages/Communication'
import Game from './pages/Game'
import HostGame from './pages/HostGame'
import HostSettings from './pages/HostSettings'
import HostLoading from './pages/HostLoading'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import LoginPage from './pages/LoginPage'
import SingupPage from './pages/SignupPage'
import ProfilePage from './pages/Profile'

//Assigns paths to their elements
const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper />,
        errorElement: <NotFoundPage />, //Comment out if a page is loading this when it should not. It overwrites useful debug information!
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/communication',
                element: <Communication />,
            },
            {
                path: '/game',
                element: <Game />,
            },
            {
                path: '/hostgame',
                element: <HostGame />,
            },
            {
                path: '/hostsettings',
                element: <HostSettings />,
            },
            {
                path: '/hostloading',
                element: <HostLoading />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/faq',
                element: <FAQ />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/signup',
                element: <SingupPage />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)



//Use: 'npm run dev' in the terminal to load in browser.
//Make sure terminal directory is set to 'picture-this' use: 'cd picture-this' to set directory.
//May not run properly if Live Server extension or other alternatives are used
//Using 'npm install' may be required, especially if running on new machine