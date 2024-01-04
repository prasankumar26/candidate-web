import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiPaper-root': {
        backgroundColor: '#FF8960',
        width: '100%',
        borderRadius: '4%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%', // Adjust for smaller screens
          },
    }
}));

const VideoNine = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <section style={{ backgroundColor: '#ffffff', height: '100vh', overflowX: 'hidden' }}>
                <Stack direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <div className="position-relative">
                        <img src="/images/video/video-1.png" alt="" className="img-fluid mt-5" style={{ width: '300px' }} />
                        <div className="position-absolute video-pause-button">
                            <img src="/images/video/pause.png" alt="" className="img-fluid mt-5" style={{ width: '30px' }} />
                        </div>
                    </div>
                </Stack>
                <Stack direction="column" justifyContent="center" alignItems="center" alignContent="center">
                    <Button
                        sx={{
                            backgroundColor: '#756DE9',
                            borderRadius: '99px',
                            fontSize: '16px',
                            textTransform: 'capitalize',
                            width: 'fit-content',
                            padding: '15px, 0px, 15px, 0px',
                            '&:hover': {
                                backgroundColor: '#756DE9',
                            },
                        }}
                        variant="contained" className='w-100 px-5 mt-3' size='small'> Ready To Record</Button>

                    <Button
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius: '99px',
                            fontSize: '16px',
                            textTransform: 'capitalize',
                            width: 'fit-content',
                            padding: '15px, 0px, 15px, 0px',
                            color: '#000',
                            '&:hover': {
                                backgroundColor: '#ffffff',
                            },
                        }}
                        variant="contained" className='w-100 px-5 mt-1' size='small' onClick={handleClickOpen}> Another Trial </Button>

                    <Link className='my-3'>Come back it to later</Link>
                </Stack>
            </section>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: '#fff'
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <h2 className='text-white text-center' style={{ fontSize: '18px' }}>Video CV is mandatory! <br /> Your profile will be on hold till you <br /> add you Video CV</h2>
                    <Stack direction="column" justifyContent="center" alignItems="center">
                        <img src="/images/video/video-girl.png" alt="" className="img-fluid mt-5" style={{ width: '80px' }} />
                        <Button sx={{ textTransform: 'capitalize', fontSize: '16px', border: '1px dashed #fff', width: 'fit-content', cursor: 'pointer', backgroundColor: 'transparant', color: '#fff' }} 
                        className='px-3 py-2 me-2 mb-3 roundedone mt-2'>
                            Life changing experiences </Button>
                            <a href="#" onClick={handleClose} className='text-white' style={{ fontSize: '16px' }}>Come back to it later</a>
                    </Stack>
                </DialogContent>
            </BootstrapDialog>

        </>
    )
}

const VideoEight = () => {
    return (
        <>
            <section style={{ backgroundColor: '#191835', height: '100vh' }}>
                <Stack direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <div className="position-relative">
                        <img src="/images/video/video-1.png" alt="" className="img-fluid mt-5" style={{ width: '300px' }} />
                        <div className="position-absolute video-button">
                            <Button
                                onClick={() => window.location.href = '/video-one'}
                                sx={{
                                    backgroundColor: '#fff',
                                    color: '#756DE9',
                                    textTransform: 'lowercase',
                                    borderRadius: '99px',
                                    fontSize: '16px',
                                    width: 'fit-content',
                                    padding: '25px, 40px, 25px, 40px',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                    },
                                }}
                                variant="contained" className='w-100 px-5 mt-2 ' size='small'> Next <img src="/images/video/arrow-one.png" alt="" className="img-fluid ms-3" /> </Button>
                        </div>

                    </div>
                </Stack>
            </section>
        </>
    )
}

const VideoSeven = () => {
    return (
        <>
            <section style={{ backgroundColor: '#191835', height: '100vh' }}>
                <Stack direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <div className="position-relative">
                        <img src="/images/video/video-1.png" alt="" className="img-fluid mt-5" style={{ width: '300px' }} />
                        <div className="position-absolute video-button-seven">
                            <Button
                                onClick={() => window.location.href = '/video-one'}
                                sx={{
                                    backgroundColor: '#756DE9',
                                    color: '#fff',
                                    fontSize: '16px',
                                    width: 'fit-content',
                                    padding: '25px, 40px, 25px, 40px',
                                    '&:hover': {
                                        backgroundColor: '#756DE9',
                                    },
                                }}
                                variant="contained" className='w-100 px-5 mt-2' size='small'> TEST RECORDING </Button>
                        </div>
                        <div className="position-absolute video-button">
                            <Button
                                onClick={() => window.location.href = '/video-one'}
                                sx={{
                                    backgroundColor: '#fff',
                                    color: '#756DE9',
                                    textTransform: 'lowercase',
                                    borderRadius: '99px',
                                    fontSize: '16px',
                                    width: 'fit-content',
                                    padding: '25px, 40px, 25px, 40px',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                    },
                                }}
                                variant="contained" className='w-100 px-5 mt-2' size='small'> <span className="dot"></span> 00:08/01:00 min </Button>
                        </div>

                    </div>
                </Stack>
            </section>
        </>
    )
}

const VideoSix = () => {
    return (
        <>
            <section style={{ backgroundColor: '#191835', height: '100vh' }}>
                <Stack direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <div className="position-relative">
                        <img src="/images/video/video-1.png" alt="" className="img-fluid mt-5" style={{ width: '300px' }} />
                        <div className="text-box position-absolute">
                            <img src="/images/video/celebrate.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </Stack>
            </section>
        </>
    )
}


const VideoFive = () => {
    return (
        <>
            <Navbar />
            <section style={{ backgroundColor: '#191835', height: '100vh' }}>
                <Stack direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <div className="position-relative">
                        <img src="/images/video/video-1.png" alt="" className="img-fluid mt-5" style={{ width: '300px' }} />
                        <div className="text-box position-absolute">
                            <h1 style={{ fontSize: '4em' }}>05</h1>
                        </div>
                    </div>
                </Stack>
            </section>
        </>
    )
}

const VideoFour = () => {
    return (
        <>
            <Navbar />
            <section style={{ backgroundColor: '#191835', height: '100vh' }}>
                <Stack direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <div className="position-relative">
                        <img src="/images/video/video-1.png" alt="" className="img-fluid mt-5" style={{ width: '300px' }} />
                        <div className="text-box position-absolute">
                            <h1 style={{ fontSize: '4em' }}>04</h1>
                        </div>
                    </div>
                </Stack>
            </section>
        </>
    )
}

const VideoThree = () => {
    return (
        <>
            <Navbar />
            <section style={{ backgroundColor: '#191835', height: '100vh' }}>
                <Stack direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <div className="position-relative">
                        <img src="/images/video/video-1.png" alt="" className="img-fluid mt-5" style={{ width: '300px' }} />
                        <div className="text-box position-absolute">
                            <h1 style={{ fontSize: '4em' }}>03</h1>
                        </div>
                    </div>
                </Stack>
            </section>
        </>
    )
}

const VideoTwo = () => {
    return (
        <>
            <Navbar />
            <section style={{ backgroundColor: '#191835', height: '100vh' }}>
                <Stack direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <div className="position-relative">
                        <img src="/images/video/video-1.png" alt="" className="img-fluid mt-5" style={{ width: '300px' }} />
                        <div className="text-box position-absolute">
                            <h1 style={{ fontSize: '4em' }}>02</h1>
                        </div>
                    </div>
                </Stack>
            </section>
        </>
    )
}

const VideoOne = () => {

    useEffect(() => {

    }, [])

    return (
        <>
            <Navbar />
            <section style={{ backgroundColor: '#191835', height: '100vh' }}>
                <Stack direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <div className="position-relative">
                        <img src="/images/video/video-1.png" alt="" className="img-fluid mt-5" style={{ width: '300px' }} />
                        <div className="text-box position-absolute">
                            <h1 style={{ fontSize: '4em' }}>01</h1>
                        </div>
                    </div>
                </Stack>
            </section>
        </>
    )
}




const VideoSequence = () => {
    const [currentComponent, setCurrentComponent] = useState(9);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentComponent((prevComponent) => (prevComponent < 9 ? prevComponent + 1 : prevComponent));
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const renderCurrentComponent = () => {
        switch (currentComponent) {
            case 1:
                return <VideoOne />;
            case 2:
                return <VideoTwo />;
            case 3:
                return <VideoThree />;
            case 4:
                return <VideoFour />;
            case 5:
                return <VideoFive />;
            case 6:
                return <VideoSix />;
            case 7:
                return <VideoSeven />;
            case 8:
                return <VideoEight />;
            case 9:
                return <VideoNine />;
            default:
                return null;
        }
    };

    return <>{renderCurrentComponent()}</>;
};

export default VideoSequence;