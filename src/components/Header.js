import React from 'react'
import '../styles/Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
    return (
        <div className='header'>
           <IconButton>
            <PersonIcon fontSize="large" className="header-icon"/>
           </IconButton>

           <img className='header-logo' src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder"/>

            <IconButton>
                <ForumIcon className="header-icon"/>
            </IconButton>
        </div>
    )
}

export default Header
