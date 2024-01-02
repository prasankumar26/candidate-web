import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Navbar from '../../components/Navbar';
import Button from '@mui/material/Button';


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


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'English',
  'Hindi',
  'Telugu',
  'Tamil',
  'Kannada',
  'Marathi',
  'Punjabi',
];

const DateOfBirth = () => {
    const navigate = useNavigate()
    const [progress, setProgress] = useState(10);
    const [values, setValues] = useState({
        date: '',
        month: '',
        year: ''
    });


    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    const handleAgeChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
        <Navbar />
        <section className='position-relative' style={{ height: '100vh' }}>
            <div maxWidth="xl">
                <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4} style={{ backgroundColor: '#FF8960', height: '100vh', position: 'relative' }}>
                            <img src="/images/ellipse-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '70%' }} />
                            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                            <div className="mt-4">
                                <p className="text-start text-white ms-3" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>
                                <h2 className='text-white ms-3 mt-5 pt-5 position-relative' style={{ zIndex: '991' }}>Do you have any skills or hobbies?</h2>
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
                                <p className='mb-3 text-muted'> <b>Date Of Birth</b> </p>

                                <Stack direction="row">
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">Date</InputLabel>
                                        <Select
                                            className='me-4'
                                            sx={{ width: '100px', borderRadius: '99px' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.date}
                                            name="date"
                                            label="date"
                                            onChange={handleAgeChange}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">MM</InputLabel>
                                        <Select
                                            className='me-4'
                                            sx={{ width: '100px', borderRadius: '99px' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.month}
                                            name="month"
                                            label="month"
                                            onChange={handleAgeChange}
                                        >
                                            <MenuItem value="jan">Jan</MenuItem>
                                            <MenuItem value="feb">Feb</MenuItem>
                                            <MenuItem value="mar">Mar</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">YYYY</InputLabel>
                                        <Select
                                            className='me-4'
                                            sx={{ width: '100px', borderRadius: '99px' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.year}
                                            name="year"
                                            label="year"
                                            onChange={handleAgeChange}
                                        >
                                            <MenuItem value={2000}>2000</MenuItem>
                                            <MenuItem value={2001}>2001</MenuItem>
                                            <MenuItem value={2002}>2002</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Box>

                            <Box className="mt-4 mb-5">
                                <p className='mb-2 text-muted'> <b>Language Known</b> </p>
                                <FormControl sx={{ m: 1, width: '50%' }}>
                                    <InputLabel id="demo-multiple-checkbox-label">Search Language</InputLabel>
                                    <Select
                                        sx={{width: '100%', borderRadius: '99px'}}
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Tag" />}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                        
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={personName.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>

                            <Button onClick={() => navigate('/degree')} sx={{
                            backgroundColor: '#756DE9', width: 'fit-content', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                                backgroundColor: '#756DE9',
                            },
                        }} className='w-100 text-white mt-2 mb-5 px-5' variant="text"> Next </Button>

                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
        </>
    )
}

export default DateOfBirth