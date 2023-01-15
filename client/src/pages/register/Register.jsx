import './register.scss'
import Icon from '../../components/Icon'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className='register'>
            <div className='card'>
                <div className='left'>
                    <div className='imgTitle'>
                        <Icon />
                    </div>
                    <p>
                    Social network for learning English: a simple explanation of the structure of English, a lot of exercises, an unconventional approach.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
                <div className='right'>
                    <h2>Register</h2>
                    <form>
                        <input type='text' placeholder='Username' />
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <input type='name' placeholder='Name' />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
