import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';

const TabsList = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Stack direction="row" justifyContent="center" className='mt-5'>
                <Card sx={{ width: 475 }}>
                    <CardContent className='m-0 p-0'>
                        <div style={{ backgroundColor: '#6352CC' }} className='p-4 position-relative'>
                            <div className="position-absolute" style={{ top: '2%', right: '2%' }}>
                                <BookmarksIcon style={{ color: '#fff' }} />
                            </div>
                            <Stack direction="row">
                                <Avatar alt="Cindy Baker" src="/images/profile-avatar.png" sx={{ width: 56, height: 56 }} />
                                <div className="ms-2">
                                    <h3 style={{ fontSize: '18.91px' }} className='text-white'>Janki Sharma</h3>
                                    <p style={{ fontSize: '11.34px' }} className='text-white'>Aspiring Account Manager</p>
                                </div>
                            </Stack>

                            <Stack direction="row" className='mt-3 mb-1'>
                                <Button variant="contained" style={{ backgroundColor: '#CBFBF1', borderRadius: '99px', color: '#52C6AE', fontWeight: '600' }}>Good Fit</Button>
                                <img src="/images/web.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                                <img src="/images/instagram.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                                <img src="/images/link.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                            </Stack>
                        </div>

                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ backgroundColor: '#6352CC' }} >
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="VIDEO CV" value="1" sx={{ color: value === '1' ? '#000' : '#fff', backgroundColor: value === '1' ? 'white' : 'transparent', marginLeft: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                        <Tab label="PERSONALITY" value="2" sx={{ color: value === '2' ? '#000' : '#fff', backgroundColor: value === '2' ? 'white' : 'transparent', marginLeft: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                        <Tab label="ACADAMIC" value="3" sx={{ color: value === '3' ? '#000' : '#fff', backgroundColor: value === '3' ? 'white' : 'transparent', marginLeft: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                        <Tab label="SPECIALIZATIONS" value="4" sx={{ color: value === '4' ? '#000' : '#fff', backgroundColor: value === '4' ? 'white' : 'transparent', marginLeft: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                        <Tab label="PREFERENCES" value="5" sx={{ color: value === '5' ? '#000' : '#fff', backgroundColor: value === '5' ? 'white' : 'transparent', marginLeft: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Stack direction="row" justifyContent="center">
                                        <div className="position-relative">
                                            <img src="/images/profile-one.png" style={{ width: '300px' }} alt="" className="img-fluid" />
                                            <div className="position-absolute" style={{bottom: '5%', transform: 'translateX(-50%)', left: '50%' }}>
                                                <Button variant="contained" sx={{
                                                    textTransform: 'capitalize', borderRadius: '99px',
                                                    backgroundColor: '#fff', color: '#756DE9', '&:hover': {
                                                        backgroundColor: '#756DE9',
                                                        color: '#fff',
                                                    },
                                                }}>View Profile</Button>
                                            </div>
                                        </div>
                                    </Stack>
                                </TabPanel>
                                <TabPanel value="2">PERSONALITY</TabPanel>
                                <TabPanel value="3">ACADAMIC</TabPanel>
                                <TabPanel value="4">SPECIALIZATION</TabPanel>
                                <TabPanel value="5">PREFERENCES</TabPanel>
                            </TabContext>
                        </Box>

                    </CardContent>
                </Card>
            </Stack>
        </>
    )
}

export default TabsList