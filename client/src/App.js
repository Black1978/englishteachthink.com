import './App.css'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Navbar from './components/navbar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import RightBar from './components/rightBar/RightBar'
import './style.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext.js'

function App() {
    const currentUser = true
    const {darkMode} = useContext(DarkModeContext)
    console.log(darkMode)
    const Layout = () => {
        return (
            <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
                <Navbar />
                <div style={{ display: 'flex', height: '100%' }}>
                    <LeftBar />
                    <div style={{flex: 6}}>
                        <Outlet />
                    </div>
                    <RightBar />
                </div>
            </div>
        )
    }
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to='/login' />
        }
        return children
    }
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/profile/:id',
                    element: <Profile />,
                },
            ],
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
    ])
    return (
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
