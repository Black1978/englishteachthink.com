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
import { AuthContext } from './context/authContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
    const { currentUser } = useContext(AuthContext)
    const { darkMode } = useContext(DarkModeContext)
    const queryClient = new QueryClient()
    const Layout = () => {
        return (
            <QueryClientProvider client={queryClient}>
                <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
                    <Navbar />
                    <div style={{ display: 'flex', height: '100%' }}>
                        <LeftBar />
                        <div style={{ flex: 6 }}>
                            <Outlet />
                        </div>
                        <RightBar />
                    </div>
                </div>
            </QueryClientProvider>
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
