import {
    AppBar,
    Toolbar,
    IconButton,
    Stack,
    Menu,
    MenuItem,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const open = Boolean(anchorEl);

    const handleCLick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMobileMenuOpen = () => {
        setMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <AppBar position="sticky" sx={{ zIndex: '999' }}>
            <Toolbar>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }} className='nav-desktop'>
                    <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                        CATALYST
                    </IconButton>

                    <div className='nav-links'>
                        <Stack spacing={4} direction="row" justifyContent="between" alignItems="center">
                            <Link className='text-muted nav-link'>Browse Jobs</Link>
                            <Link className='text-muted nav-link active'>Catalyst Profile</Link>
                            <Link className='text-muted nav-link'>Job Activities</Link>
                        </Stack>
                    </div>

                    <Menu
                        sx={{ width: '100%' }}
                        id="resources-menu"
                        anchorEl={anchorEl}
                        open={open}
                        MenuListProps={{
                            'aria-labelledby': 'resources-button',
                        }}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Blog</MenuItem>
                        <MenuItem onClick={handleClose}>Podcast</MenuItem>
                    </Menu>

                    <Stack direction="row">
                        <Avatar sx={{ bgcolor: '#FFFFFF' }} className='me-2'>
                            <TextsmsIcon sx={{ color: '#756DE9' }} />
                        </Avatar>

                        <Avatar sx={{ bgcolor: '#FFFFFF' }} className='me-2'>
                            <NotificationAddIcon sx={{ color: '#756DE9' }} />
                        </Avatar>

                        <Avatar
                            sx={{ bgcolor: '#FFFFFF' }}
                            alt="Avatar"
                            src="/images/avatar.png"
                        />
                        <KeyboardArrowDownIcon
                            id="resources-button"
                            className="cursor-pointer"
                            onClick={handleCLick}
                            aria-controls={open ? 'resources-menu' : undefined}
                            aria-popup="true"
                            aria-expanded={open ? 'true' : undefined}
                        />

                        <Stack direction="row" alignItems="center">
                           <div>
                           <Avatar
                                sx={{ bgcolor: '#FFFFFF', marginLeft: '20px' }}
                                alt="Avatar"
                                src="/images/avatar.png"
                            />
                           </div>
                            
                           <div>
                           <p className='ms-2 mb-0 pb-0'>Need Help?</p>
                            <p className='ms-2 mt-0 pt-0'>...</p>
                           </div>
                        </Stack>

                    </Stack>

                </Stack>


                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }} className='nav-mobile'>
                    <IconButton className='nav-mobile-logo' size="large" edge="start" color="inherit" aria-label="logo">
                        CATALYST
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'block', md: 'none' } }}
                        onClick={handleMobileMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Stack>
            </Toolbar>

            {/* Mobile Menu */}
            <Drawer anchor="right" open={mobileMenuOpen} onClose={handleMobileMenuClose}>
                <Stack className="my-5 mx-4">
                    <IconButton size="large" edge="start" color="inherit" aria-label="logo" className='mb-2'>
                        CATALYST
                    </IconButton>
                    <Link to="/" className='nav-link-mobile mb-3'>
                        Browse Jobs
                    </Link>
                    <Link to="/" className='nav-link-mobile mb-3'>
                        Catalyst Profile
                    </Link>
                    <Link to="/" className='nav-link-mobile mb-3'>
                        Job Activities
                    </Link>
                    <Link to="/" className='nav-link-mobile mb-3'>
                        Blog
                    </Link>
                    <Link to="/" className='nav-link-mobile mb-3'>
                        Podcast
                    </Link>
                </Stack>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
