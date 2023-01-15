import './login.scss'
import Icon from '../../components/Icon'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='login'>
            <div className='card'>
                <div className='left'>
                    <div className='imgTitle'>
                        <Icon />
                    </div>
                    <p>
                    Социальная сеть для изучения английского языка: простое объяснение устройства английского, множество упражнений, нетрадиционный подход.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
                <div className='right'>
                    <h2>Login</h2>
                    <form>
                        <input type='text' placeholder='Username' />
                        <input type='password' placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
