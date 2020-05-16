import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <AppBar position="relative">
            <Toolbar style={{ backgroundColor: "#5ca383" }}>
                <IconButton color="inherit">
                    <MenuIcon /> 
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Inventory Managment
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/inventory">Inventory</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
