import './register.scss'
import Icon from '../../components/icons/Icon'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
    })

    const [err, setErr] = useState(null)

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8808/api/auth/register', inputs)
        } catch (error) {
            setErr(error.response.data)
        }
    }

    console.log(err)
    return (
        <div className='register'>
            <div className='card'>
                <div className='left'>
                    <div className='imgTitle'>
                        <Icon />
                    </div>
                    <p>
                        Social network for learning English: a simple explanation of the structure
                        of English, a lot of exercises, an unconventional approach.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
                <div className='right'>
                    <h2>Register</h2>
                    <form>
                        <input
                            type='text'
                            placeholder='Username'
                            onChange={handleChange}
                            name='username'
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            onChange={handleChange}
                            name='email'
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            onChange={handleChange}
                            name='password'
                        />
                        <input type='name' placeholder='Name' onChange={handleChange} name='name' />
                        {err && err}
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
