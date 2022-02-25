import React, { useState } from "react";
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Slide, useScrollTrigger, Box, IconButton, Menu, MenuItem, Link } from '@mui/material';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import MenuIcon from '@mui/icons-material/Menu';

import DarkModeSwitch from "./DarkModeSwitch";

// for hiding the header on scroll:
function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        target: undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
};

const NavBar = (props) => {

    // links on AppBar:
    const navLinks = [
        {
            text: 'About',
            url: '#about'
        },
        {
            text: 'Projects',
            url: '#projects'
        },
        {
            text: 'Snippets',
            url: '#snippets'
        },
        {
            text: 'Contact',
            url: '#contact'
        },
    ];

    // for responsive menu button:
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = event => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    // for dark mode switch button:
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
        props.changeMode(checked ? 'dark' : 'light');
    }

    
    return <>
        <HideOnScroll {...props}>
            <AppBar>
                <Toolbar>
                    <WorkTwoToneIcon color="secondary" sx={{ mr: 1, display: { xs: 'none', md: 'flex' } }} />
                    <Typography variant="h6" color="inherit" noWrap sx={{ display: { xs: 'none', md: 'flex' }, fontFamily: '"Kalam", cursive', paddingTop: '5px' }}>
                        <b>Portfolio</b>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navLinks.map((navLink) => (
                                <MenuItem key={navLink.text} onClick={handleCloseNavMenu} >
                                    <Link href={navLink.url} underline="none" color='primary.dark'>{navLink.text}</Link>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                    <DarkModeSwitch checked={checked} onChange={handleChange} sx={{ml: -1}}/>
                                <Typography variant="body2" color='primary.dark'>{`${checked ? 'dark' : 'light'} mode`}</Typography>
                                 
                            </MenuItem>
                        </Menu>
                    </Box>

                    <WorkTwoToneIcon color="secondary" sx={{ mr: 1, display: { xs: 'flex', md: 'none' } }} />
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontFamily: '"Kalam", cursive', paddingTop: '5px' }}>
                        <b>Portfolio</b>
                    </Typography>
                    <Box sx={{ flexGrow: 20 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {navLinks.map((navLink) => (
                            <Link href={navLink.url} key={navLink.text} underline="none">
                                <Typography
                                    color='secondary.light'
                                    onClick={handleCloseNavMenu}
                                    sx={{ m: 2, display: 'block' }}
                                >
                                    {navLink.text}
                                </Typography>
                            </Link>
                        ))}
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <DarkModeSwitch checked={checked} onChange={handleChange} />
                        <Typography variant="span" sx={{fontSize: '11px'}}>{`${checked ? 'dark' : 'light'} mode`}</Typography> 
                        </Box>                 
                    </Box>   
                </Toolbar>
            </AppBar>
        </HideOnScroll>

        <Toolbar />
    </>
}

export default NavBar;