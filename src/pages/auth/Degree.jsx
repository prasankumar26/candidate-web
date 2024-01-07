import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { colourOptions } from '../../data';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import TopHeading from '../../components/TopHeading';
import ProgressBar from '../../components/ProgressBar';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NormalHeading from '../../components/NormalHeading';
import SearchTextBox from '../../components/SearchTextBox';
import ButtonBlue from '../../components/ButtonBlue';
import MobileNav from '../../components/MobileNav';

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


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterColors(inputValue));
        }, 1000);
    });


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


const Degree = () => {
    const navigate = useNavigate()
    const [progress, setProgress] = useState(10);

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
                        <Grid className='mob-none' item xs={12} md={4} style={{ backgroundColor: '#FF8960', height: '100vh', position: 'relative' }}>
                            <img src="/images/ellipse-three.png" alt="" className="img-fluid mob-none" style={{ position: 'absolute', bottom: '-50%', width: '70%' }} />
                            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                            <img src="/images/vector-two.png" alt="" className="img-fluid mob-none" style={{ position: 'absolute', bottom: '30%', left: '45%', width: 'fit-content' }} />

                            <div className="mt-4 mx-5">
                                <TopHeading textstart />
                                <h2 className='text-white ms-3 mt-5 pt-5 position-relative' style={{ zIndex: '999' }}>
                                    What is your latest education qualification?
                                </h2>
                                <h2 className='text-white ms-3 mt-5 position-relative' style={{ zIndex: '999' }}>Show it off!</h2>
                            </div>
                        </Grid>

                        <MobileNav />
                        
                        <Grid item xs={12} md={8} className='pt-lg-5 px-lg-s-des'>
                            <ProgressBar />
                            <Stack direction="row" className='mt-5'> <NavigateBeforeIcon /> Back </Stack>

                            <Box className="mt-3">
                            <NormalHeading title="What is your latest education qualification?" />

                                <Button variant='contained' sx={{ textTransform: 'capitalize', width: 'fit-content', cursor: 'pointer', backgroundColor: '#756DE9' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                    Bachelor Degree </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                    Masters Degree </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                    Diploma Holder </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                    Other </Button>
                            </Box>
 
                            <Box className="mt-4">
                            <NormalHeading title="Course Name" />
                                <SearchTextBox />
                            </Box>

                            <Box className="mt-3">
                                <Checkbox {...label} /> <span>I'm yet to graduate</span>
                            </Box>

                            <Box className="mt-4">
                            <NormalHeading title="Which college/university did you get your degree from?" />
                            <SearchTextBox />
                                {/* <AsyncSelect
                                    isMulti
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={promiseOptions}
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                                            borderRadius: '99px',
                                            padding: '6px 0px'
                                        }),
                                    }}
                                /> */}
                            </Box>

                            <Box className="mt-3">
                                <Stack direction="row" justifyContent="space-between">
                                <NormalHeading title="Course Specialization" />
                                    <p className='mb-3 text-muted' style={{fontStyle: 'italic', fontSize: '14px'}}>Optional</p>
                                </Stack>
                                <CssTextField
                                    id="outlined-number"
                                    placeholder="NA"
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
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                    <NormalHeading title="Year You Graduated" />
                                        <CssTextField
                                            id="outlined-number"
                                            placeholder="2020"
                                            variant="outlined"
                                            className='w-100'
                                            type="number"
                                            InputProps={{
                                                style: {
                                                    borderRadius: '99px',
                                                    backgroundColor: '#f4f4fc6b',
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                    <NormalHeading title="Percentage/Grade" />
                                        <CssTextField
                                            id="outlined-number"
                                            placeholder="72%"
                                            variant="outlined"
                                            className='w-100'
                                            type="number"
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
                            <NormalHeading title="Which board have you completed schooling from?" />
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='degree-font px-3 py-2 me-2 roundedone mb-2'>
                                Secondary School Certificate (SSC) </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='degree-font px-3 py-2 me-2 roundedone mb-2'>
                                    Indian Certificate of Secondary Education (ICSE) </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='degree-font px-3 py-2 me-2 roundedone mb-2'>
                                    Central Board of Secondary Education (CBSE) </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='degree-font px-3 py-2 me-2 roundedone mb-2'>
                                    IC School </Button>
                            </Box>

                            <Box className="mt-4">
                                <Stack direction="row" justifyContent="space-between">
                                <NormalHeading title="Where have you received your schooling?" />
                                    <p className='mb-3 text-muted' style={{fontStyle: 'italic', fontSize: '14px'}}>Optional</p>
                                </Stack>
                                <SearchTextBox />
                            </Box>

                            <ButtonBlue title="Next up skill-set" link="/skillset" />
                            
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    )
}

export default Degree