import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar position="relative">
            <Toolbar style={{ backgroundColor: "#5ca383" }}>
                    <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                         <MenuIcon />
                     </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}><Link to="/home">Home</Link></MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/">Logout</Link></MenuItem>
                            </Menu>        
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Tiny House Coffee Inventory
                </Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link to="/home">Inventory</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/about">About</Link>
                        </li>
                        {/*Logout moved to MenuIcon */}
                        {/* <li className="nav-list-item">
                            <Link to="/">Logout</Link>
                        </li> */}
                    </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Nav

