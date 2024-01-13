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
    Popover
} from '@mui/material';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();
    console.log(pathname, "pathname");

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
                    <IconButton size="large" edge="start" color="inherit" aria-label="logo" style={{ fontSize: '18px' }}>
                        CATALYST
                    </IconButton>

                    <div className='nav-links'>
                        <Stack spacing={4} direction="row" justifyContent="between" alignItems="center">
                            <Link to="/browse-jobs" className={`text-muted nav-link py-2 ${pathname === '/browse-jobs' ? 'text-muted nav-link active' : 'text-muted nav-link'}`} style={{ fontSize: '16px' }}>Browse Jobs</Link>
                            <Link to="/catalyst-profile" className={`text-muted nav-link py-2 ${pathname === '/catalyst-profile' ? 'text-muted nav-link active' : 'text-muted nav-link'}`} style={{ fontSize: '16px' }}>Catalyst Profile</Link>
                            <Link to="/job-activities" className={`text-muted nav-link py-2 ${pathname === '/job-activities' ? 'text-muted nav-link active' : 'text-muted nav-link'}`} style={{ fontSize: '16px' }}>Job Activities</Link>
                        </Stack>
                    </div>

                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        PaperProps={{
                            style: {
                                width: '100%', // Set the width to 100% of the screen
                                maxWidth: 'none', // Remove maxWidth restriction
                                marginTop: '33px',
                                marginLeft: '10px'
                            },
                        }}
                    >
                        <List>
                            <Box sx={{ flexGrow: 1 }} className="mx-4">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4}>
                                        <p style={{ color: '#756DE9' }} className='mb-4 mt-4'>PROFILE</p>
                                        <Box sx={{ backgroundColor: '#F4F4FD' }} className="py-2 px-4">
                                            <Stack direction="row" justifyContent="space-between" alignItems="start" flexWrap="wrap">
                                                <Stack direction="row">
                                                    <img src="/images/nav/profile.png" alt="" style={{ width: '100px' }} />
                                                    <Box className="mt-2">
                                                        <h4>Janki Sharma</h4>
                                                        <Stack direction="row" alignItems="center">
                                                            <img src="/images/nav/phone.png" alt="" />
                                                            <p className='ms-2'>+91 - 8190 988 987</p>
                                                        </Stack>
                                                        <Stack direction="row" alignItems="center">
                                                            <img src="/images/nav/mail.png" alt="" />
                                                            <p className='ms-2'>pranav@gmail.com</p>

                                                        </Stack>
                                                    </Box>
                                                </Stack>
                                                <Stack direction="row" alignItems="center">
                                                    <EditIcon className='me-1' style={{ color: '#756DE9', fontSize: '18px' }} />
                                                    <p style={{ color: '#756DE9', fontSize: '16px', fontWeight: '600' }}>EDIT</p>
                                                </Stack>
                                            </Stack>
                                        </Box>

                                    <Stack direction="row" className='mb-4 mt-4'>
                                        <img className='me-3' src="/images/nav/share-profile.png" alt="" style={{ objectFit: 'contain' }} />
                                        <p style={{ color: '#263238', fontSize: '16px' }}>Share Profile</p>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <p style={{ color: '#756DE9' }} className='mb-4 mt-4'>QUICK ACTIONS</p>
                                    <Stack direction="row" className='mb-4'>
                                        <img className='me-3' src="/images/nav/job-activities.png" alt="" style={{ objectFit: 'contain' }} />
                                        <p style={{ color: '#263238', fontSize: '16px' }}>Job Activities</p>
                                    </Stack>
                                    <Stack direction="row" className='mb-4'>
                                        <img className='me-3' src="/images/nav/browse-job-opening.png" alt="" style={{ objectFit: 'contain' }} />
                                        <p style={{ color: '#263238', fontSize: '16px' }}>Browse Job Opening</p>
                                    </Stack>
                                    <Stack direction="row" className='mb-4'>
                                        <img className='me-3' src="/images/nav/my-catalyst-video-cv.png" alt="" style={{ objectFit: 'contain' }} />
                                        <p style={{ color: '#263238', fontSize: '16px' }}>My Catalyst Video CV</p>
                                    </Stack>
                                    <Stack direction="row" className='mb-4'>
                                        <img className='me-3' src="/images/nav/interview-prep.png" alt="" style={{ objectFit: 'contain' }} />
                                        <p style={{ color: '#263238', fontSize: '16px' }}>Interview Prep</p>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <p style={{ color: '#756DE9' }} className='mb-4 mt-4'>OTHER ACTIONS</p>
                                    <Stack direction="row" className='mb-4'>
                                        <img className='me-3' src="/images/nav/browsing-history.png" alt="" style={{ objectFit: 'contain' }} />
                                        <p style={{ color: '#263238', fontSize: '16px' }}>Browsing History</p>
                                    </Stack>
                                    <Stack direction="row" className='mb-4'>
                                        <img className='me-3' src="/images/nav/calender.png" alt="" style={{ objectFit: 'contain' }} />
                                        <p style={{ color: '#263238', fontSize: '16px' }}>Calendar</p>
                                    </Stack>
                                    <Stack direction="row" className='mb-4'>
                                        <img className='me-3' src="/images/nav/help.png" alt="" style={{ objectFit: 'contain' }} />
                                        <p style={{ color: '#263238', fontSize: '16px' }}>Help / How the App works</p>
                                    </Stack>
                                    <Stack direction="row" className='mb-4'>
                                        <img className='me-3' src="/images/nav/settings.png" alt="" style={{ objectFit: 'contain' }} />
                                        <p style={{ color: '#263238', fontSize: '16px' }}>Settings</p>
                                    </Stack>
                                    <Stack direction="row" className='mb-4'>
                                        <img className='me-3' src="/images/nav/logout.png" alt="" style={{ objectFit: 'contain' }} />
                                        <p style={{ color: '#263238', fontSize: '16px' }}>Logout</p>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* <ListItem button onClick={handleClose}>
                            <ListItemText primary="Blogs" />
                        </ListItem>
                        <ListItem button onClick={handleClose}>
                            <ListItemText primary="Podcast" />
                        </ListItem> */}
                    </List>
                </Popover>

                {/* <Menu
                        sx={{ width: '100%' }}
                        id="resources-menu"
                        anchorEl={anchorEl}
                        open={open}
                        MenuListProps={{
                            'aria-labelledby': 'resources-button',
                        }}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Blogs</MenuItem>
                        <MenuItem onClick={handleClose}>Podcast</MenuItem>
                    </Menu> */}

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

            {/* Mobile Menu */ }
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
        </AppBar >
    );
};

export default Navbar;
