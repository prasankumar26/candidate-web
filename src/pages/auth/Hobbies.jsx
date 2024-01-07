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
import TopHeading from '../../components/TopHeading';
import ProgressBar from '../../components/ProgressBar';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ButtonBlue from '../../components/ButtonBlue';
import MobileNav from '../../components/MobileNav';

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
    value: PropTypes.number.isRequired,
};


const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
            boxShadow: `inset 0 0 11px 2px rgba(75, 68, 212, 0.08)`,
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

    return (
        <section className='position-relative' style={{ height: '100vh' }}>
            <div maxWidth="xl">
            <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                <Grid container>
                    <Grid item xs={12} md={4} className='mob-none' style={{ backgroundColor: '#FF8960', height: '100vh', position: 'relative' }}>
                        <img src="/images/ellipse-two.png" alt="" className="img-fluid mob-none" style={{ position: 'absolute', bottom: '-30%', width: '70%' }} />
                        <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                        <img src="/images/vector-two.png" alt="" className="img-fluid mob-none" style={{ position: 'absolute', bottom: '35%', left: '45%', width: 'fit-content' }} />

                        <div className="mt-4">
                            <TopHeading textstart />
                            <h2 className='text-white ms-3 mt-5 pt-5 position-relative px-5' style={{ zIndex: '999' }}>Do you have any skills or hobbies?</h2>
                        </div>
                    </Grid>
                    <MobileNav />
                    <Grid item xs={12} md={8} className='pt-lg-5 px-lg-s-des' >
                      <ProgressBar para1="Do you have any skills or hobbies?" />
                      <Stack direction="row" className='mt-5'> <NavigateBeforeIcon /> Back </Stack>
                        <Box className="mt-3">
                            <CssTextField
                                id="outlined-number"
                                placeholder="Search by Keywords"
                                variant="outlined"
                                className='mt-2'
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
                            <p className='mb-3 text-muted'>Suggestions</p>
                            <Stack direction="row" alignItems="center" sx={{ border: '1px dashed #756DE9', color: '#756DE9', width: 'fit-content', cursor: 'pointer' }} className='p-3 roundedone'>
                                <AddIcon /> Add A Hobby/Interest</Stack>
                        </Box>

                        <Box className="mt-4">
                            {
                                categoriesList.map((item, index) => {
                                    return (
                                        <Button
                                            key={index}
                                            className='roundedone mb-3 me-2 hobbies-pad cat-btn-mob'
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
                                                <img src={item.image} alt="" className="img-fluid me-2 hobbies-img" /> {item.name} </Stack>
                                        </Button>
                                    )
                                })
                            }
                        </Box>
                        
                        <ButtonBlue  title="Continue" link="/dob" />

                    </Grid>
                </Grid>
            </div>
            </div>
        </section>
    )
}

export default Hobbies