import React from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CatalystProfile = () => {
    return (
        <>
            <Navbar />

            <section>
                <Box sx={{ backgroundColor: '#756DE9' }} className="py-4 px-4">
                   <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
                   <Stack direction="row" alignItems="center">
                        <div className="avatar-upload me-4">
                            <div className="avatar-edit">
                                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                <label htmlFor="imageUpload">
                                    <EditIcon style={{ fontSize: 20, color: '#827BEA' }} />
                                </label>
                            </div>
                            <div className="avatar-preview">
                                <div id="imagePreview" style={{ backgroundImage: 'url(/images/profile-cover.png)' }}>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className='text-white mb-1' style={{ fontSize: '28px' }}>Janki Sharma</h4>
                            <p style={{ color: '#F4F4F4', fontSize: '14px' }}>Aspiring Account Manager</p>
                        </div>
                    </Stack>

                    <Stack direction="row" className='mt-3 mb-1'>
                        <img src="/images/web.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                        <img src="/images/instagram.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                        <img src="/images/link.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                        <img src="/images/vertical-lines.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                    </Stack>
                   </Stack>
                </Box>
            </section>

        </>
    )
}

export default CatalystProfile