import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { categoriesList } from '../../data';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';


function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '60%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`} <span style={{ fontSize: '13px' }}> <b>Up Next: Video CV</b> </span> </Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};


const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
            boxShadow: `0 0 10px #4b44d459`,
        },
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            border: 'none',
        },
    },
    '& input': {
        border: 'none',
        borderRadius: '99px',
    },
}));

const Hobbies = () => {
    const navigate = useNavigate()
    const [progress, setProgress] = useState(10);
    const [selectedValue, setSelectedValue] = useState('a');

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);



    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    return (
        <section className='position-relative' style={{ height: '100vh' }}>
            <Container maxWidth="xl">
            <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4} style={{ backgroundColor: '#FF8960', height: '100vh', position: 'relative' }}>
                        <img src="/images/ellipse-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '70%' }} />
                        <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                        <div className="mt-4">
                            <p className="text-start text-white ms-3" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>
                            <h2 className='text-white ms-3 mt-5 pt-5 position-relative' style={{ zIndex: '999' }}>Do you have any skills or hobbies?</h2>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8} className='pt-5 mt-5'>
                        <Box sx={{ width: '100%' }}>
                            <Stack direction="row" justifyContent="space-between" sx={{ flex: 1 }}>
                                <h4 style={{ textTransform: 'uppercase' }}>About You</h4>
                                <LinearProgressWithLabel sx={{ width: '100%' }} value={progress} />
                            </Stack>
                            <p className='mt-3'>1 step out of 2</p>
                            <p className='mt-5'> {`< Back`} </p>
                        </Box>

                        <Box className="mt-3">
                            <CssTextField
                                id="outlined-number"
                                placeholder="Search by Keywords"
                                variant="outlined"
                                className='mt-2'
                                style={{ width: '50%' }}
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
                            <p className='mb-3 text-muted'>Suggestions</p>
                            <Stack direction="row" alignItems="center" sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='p-3 roundedone'>
                                <AddIcon /> Add A Hobby/Interest</Stack>
                        </Box>

                        <Box className="mt-4">
                            {
                                categoriesList.map((item, index) => {
                                    return (
                                        <Button
                                            className='roundedone mb-3 me-2'
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                boxShadow: '0 0 10px #4b44d459',
                                                backgroundColor: 'white',
                                                color: '#000',
                                                '&:hover': {
                                                    backgroundColor: 'white',
                                                    color: 'black',
                                                },
                                            }}
                                        >
                                            <Stack direction="row" alignItems="center">
                                                <img src={item.image} alt="" className="img-fluid me-2" /> {item.name} </Stack>
                                        </Button>
                                    )
                                })
                            }
                        </Box>

                        <Button onClick={() => navigate('/dob')} sx={{
                            backgroundColor: '#756DE9', width: 'fit-content', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                                backgroundColor: '#756DE9',
                            },
                        }} className='w-100 text-white mt-2 mb-5 px-5' variant="text"> Continue </Button>

                    </Grid>
                </Grid>
            </div>
            </Container>
        </section>
    )
}

export default Hobbies