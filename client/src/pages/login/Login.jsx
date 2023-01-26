import './login.scss'
import Icon from '../../components/icons/Icon'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'

const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    const [err, setErr] = useState(null)
    const handleInput = (e) => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value }))
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
          await  login(inputs)
          navigate('/')
        } catch (error) {
            setErr(error.response.data)
        }
       
    }
    return (
        <div className='login'>
            <div className='card'>
                <div className='left'>
                    <div className='imgTitle'>
                        <Icon />
                    </div>
                    <p>
                        Социальная сеть для изучения английского языка: простое объяснение
                        устройства английского языка, множество упражнений, нетрадиционный подход.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
                <div className='right'>
                    <h2>Login</h2>
                    <form>
                        <input type='text' placeholder='Username' name='username' onChange={handleInput}/>
                        <input type='password' placeholder='Password' name='password' onChange={handleInput}/>
                        {err && err}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
