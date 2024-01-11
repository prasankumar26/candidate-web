import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Switch from '@mui/material/Switch';
import { alpha } from '@mui/system';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { CssTextField } from './CssTextfield';


const label = { inputProps: { 'aria-label': 'Size switch demo' } };

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const Filter = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const CustomSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: '#52C6AE', // Your custom color
            '&:hover': {
                backgroundColor: alpha('#52C6AE'),
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#52C6AE', // Your custom color
        },
    }));

    return (
        <>
            <Button variant='contained' sx={{
                textTransform: 'capitalize', width: 'fit-content', cursor: 'pointer', backgroundColor: '#ffffff', '&:hover': {
                    backgroundColor: '#ffffff',
                },
            }} className='text-dark px-3 py-1 me-2 mb-2 roundedone' onClick={handleClickOpen}>
                Filter <img src="/images/browse-jobs/filter.png" className='ms-4' style={{ width: '10px', objectFit: 'fit-content' }} alt="" /> </Button>


            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2, color: '#868686', fontSize: '14px', letterSpacing: '1.67px', fontWeight: '500' }} id="customized-dialog-title">
                    Filter By
                </DialogTitle>
                <p aria-label="close" onClick={handleClose} style={{ position: 'absolute', right: '8%', top: '5%', color: '#756DE9', cursor: 'pointer' }}>CLEAR ALL</p>
                <DialogContent dividers>
                    <Box className="mt-2">
                        <p style={{ color: '#221F60', fontSize: '14px', fontWeight: 600 }} className='mb-2'>Work Experience</p>
                        <CssTextField
                            id="outlined-number"
                            type='number'
                            placeholder="Duration"
                            variant="outlined"
                            className='w-100'
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                }
                            }}
                        />
                    </Box>

                    <Box className="mt-3">
                        <p style={{ color: '#221F60', fontSize: '14px', fontWeight: 600 }} className='mb-2'>Salary</p>
                        <CssTextField
                            id="outlined-number"
                            type='number'
                            placeholder="Range"
                            variant="outlined"
                            className='w-100'
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                }
                            }}
                        />
                    </Box>

                    <Box className="mt-3">
                        <p style={{ color: '#221F60', fontSize: '14px', fontWeight: 600 }} className='mb-2'>Industry</p>
                        <CssTextField
                            id="outlined-number"
                            placeholder="Select"
                            variant="outlined"
                            className='mt-0'
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Box className="mt-3">
                        <p style={{ color: '#221F60', fontSize: '14px', fontWeight: 600 }} className='mb-2'>Preferred Location</p>
                        <CssTextField
                            id="outlined-number"
                            placeholder="Select"
                            variant="outlined"
                            className='mt-0'
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Box className="mt-3">
                        <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                            Masters Degree </Button>
                        <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                            Diploma Holder </Button>
                        <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                            Other </Button>
                    </Box>

                    <CustomSwitch {...label} size="medium" /> <span style={{ color: '#1F2235', fontSize: '14px' }}></span> Remote Work

                    <Box className="mt-3">
                        <p style={{ color: '#221F60', fontSize: '14px', fontWeight: 600 }} className='mb-2'>Education</p>
                        <CssTextField
                            id="outlined-number"
                            placeholder="Select"
                            variant="outlined"
                            className='mt-0'
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Box className="mt-3">
                        <p style={{ color: '#221F60', fontSize: '14px', fontWeight: 600 }} className='mb-2'>Company Type</p>
                        <CssTextField
                            id="outlined-number"
                            placeholder="Select"
                            variant="outlined"
                            className='mt-0'
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Box className="mt-2">
                        <p style={{ color: '#221F60', fontSize: '14px', fontWeight: 600 }} className='mb-2'>Fitness</p>
                        <CssTextField
                            id="outlined-number"
                            type='number'
                            placeholder="Fitness"
                            variant="outlined"
                            className='w-100'
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                }
                            }}
                        />
                    </Box>

                    <Box className="mt-3">
                        <p style={{ color: '#221F60', fontSize: '14px', fontWeight: 600 }} className='mb-2'>Freshness</p>
                        <CssTextField
                            id="outlined-number"
                            type='number'
                            placeholder="Freshness"
                            variant="outlined"
                            className='w-100'
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                }
                            }}
                        />
                    </Box>


                    <Box className="mt-3 text-center">
                        <Button variant="contained" className='py-3' sx={{ width: '90%', backgroundColor: '#756DE9', borderRadius: '99px' }}>Done</Button>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>


        </>
    )
}

export default Filter