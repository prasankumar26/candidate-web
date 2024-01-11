import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { CssTextField } from './CssTextfield';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchTextBox from './SearchTextBox';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Search = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CssTextField
                onClick={handleClickOpen}
                id="outlined-number"
                placeholder="Search by Keywords, skills, job role, etc"
                variant="outlined"
                className='mt-2'
                style={{ width: '35%' }}
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

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    <Stack direction="row" alignItems="center">
                        <SearchIcon style={{ color: '#756DE9' }} className='me-2' />  <span style={{ fontSize: '12px' }}>Search</span>
                    </Stack>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>

                    <SearchTextBox />

                    <Box sx={{ flexGrow: 1 }} className="mt-3">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <CssTextField
                                    onClick={handleClickOpen}
                                    id="outlined-number"
                                    placeholder="Search by Keywords, skills, job role, etc"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '99px',
                                            backgroundColor: '#f4f4fc6b',
                                        }
                                        // endAdornment: (
                                        //     <InputAdornment position="end">
                                        //         <SearchIcon />
                                        //     </InputAdornment>
                                        // ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
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
                            </Grid>
                        </Grid>
                    </Box>

                    <Box className="mt-3">
                        <p style={{ color: '#222222' }}>Preference</p>

                        <p style={{ color: '#000000', fontSize: '14px', fontWeight: 600 }} className='mb-2 mt-3'>Work Experience</p>
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

                        <p style={{ color: '#000000', fontSize: '14px', fontWeight: 600 }} className='mb-2 mt-3'>Salary</p>
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

                        <p style={{ color: '#000000', fontSize: '14px', fontWeight: 600 }} className='mb-2 mt-3'>Industry</p>
                        <CssTextField
                            id="outlined-number"
                            type='number'
                            placeholder="Industry"
                            variant="outlined"
                            className='w-100'
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                }
                            }}
                        />


                        <p style={{ color: '#000000', fontSize: '14px', fontWeight: 600 }} className='mb-2 mt-3'>Functional Area</p>
                        <CssTextField
                            id="outlined-number"
                            type='number'
                            placeholder="Functional Area"
                            variant="outlined"
                            className='w-100'
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                }
                            }}
                        />

                        <p style={{ color: '#000000', fontSize: '14px', fontWeight: 600 }} className='mb-2 mt-3'>Job Type</p>
                        <CssTextField
                            id="outlined-number"
                            type='number'
                            placeholder="Functional Area"
                            variant="outlined"
                            className='w-100'
                            InputProps={{
                                style: {
                                    borderRadius: '99px',
                                    backgroundColor: '#f4f4fc6b',
                                }
                            }}
                        />

                        <p style={{ color: '#222222' }} className='mt-3 mb-2'>Saved Searches</p>

                        <Box sx={{ boxShadow: '0px 2px 10px 0px #6F6F6F1A', backgroundColor: '#FFFFFF' }} className="p-4">
                            <Stack direction="row" justifyContent="space-between">
                                <Box>
                                    <b>Business Management </b>
                                    <p style={{ fontSize: '12px' }}>Mumbai</p>
                                </Box>
                                <Box>
                                    <p style={{ color: '#222222' }}>Saved Searches</p>
                                    <Stack direction="row" alignItems="center"> <p style={{ color: '#756DE9' }}>Search Now</p> <KeyboardArrowRightIcon style={{ color: '#756DE9' }} /> </Stack>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ boxShadow: '0px 2px 10px 0px #6F6F6F1A', backgroundColor: '#FFFFFF' }} className="p-4">
                            <Stack direction="row" justifyContent="space-between">
                                <Box>
                                    <b>Account Planner</b>
                                    <p style={{ fontSize: '12px' }}>Mumbai</p>
                                </Box>
                                <Box>
                                    <p style={{ color: '#222222' }}>Saved Searches</p>
                                    <Stack direction="row" alignItems="center"> <p style={{ color: '#756DE9' }}>Search Now</p> <KeyboardArrowRightIcon style={{ color: '#756DE9' }} /> </Stack>
                                </Box>
                            </Stack>
                        </Box>


                    </Box>




                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatem reiciendis fugiat cumque officiis molestias at harum. Aperiam, doloremque libero.</p> */}
                    <Box className="mt-3 text-center">
                        <Button variant="contained" className='py-3' sx={{ width: '100%', backgroundColor: '#756DE9', borderRadius: '99px' }}>Search</Button>
                    </Box>


                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog >

        </>
    )
}

export default Search