import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { Link } from 'react-router-dom'
import Icon from '../IconForNavbar'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'

const NavBar = () => {
    const {toggle} = useContext(DarkModeContext)
    return (
        <div className='navbar'>
            <div className='left'>
                <Link to='/' className='logoWrapper'>
                    <Icon />
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon onClick={toggle}/>
                <GridViewOutlinedIcon />
                <div className='search'>
                    <SearchOutlinedIcon />
                    <input type='text' placeholder='search' />
                </div>
            </div>
            <div className='right'>
              <PersonOutlinedIcon/>
              <EmailOutlinedIcon/>
              <NotificationsOutlinedIcon/>
              <div className="user">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <span>Joe Doe</span>
              </div>
            </div>
        </div>
    )
}

export default NavBar
