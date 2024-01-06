import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Navbar from '../../components/Navbar';
import Button from '@mui/material/Button';
import TopHeading from '../../components/TopHeading';
import ProgressBar from '../../components/ProgressBar';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NormalHeading from '../../components/NormalHeading';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ButtonBlue from '../../components/ButtonBlue';


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

    const StyledFormControl = styled(FormControl)({
        position: 'relative',
        '& .MuiSelect-icon': {
            display: 'none',
        },
        m: 1,
        width: '75%',
        boxShadow: `inset 0 0 11px 2px #dfd9d9`,
        borderRadius: '99px',
        '&:focus-within': {
            boxShadow: 'inset 0 0 11px 2px #dfd9d9',
        },
        '& fieldset': {
            border: 'none',
        },
    });


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
                                <img src="/images/vector-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '35%', left: '45%', width: 'fit-content' }} />

                                <div className="mt-4">
                                    <TopHeading textstart />
                                    <h2 className='text-white ms-3 mt-5 pt-5 position-relative px-5' style={{ zIndex: '991' }}>
                                        Let's begin with your demographics.
                                    </h2>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={8} className='pt-5 mt-5 px-5'>
                                <ProgressBar />

                                <Stack direction="row" className='mt-5'> <NavigateBeforeIcon /> Back </Stack>

                                <Box className="mt-3">
                                    <NormalHeading title="Date Of Birth" />

                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                                        <FormControl>
                                            <InputLabel id="demo-simple-select-label">DD</InputLabel>
                                            <Select
                                                className='me-0'
                                                sx={{
                                                    width: '130px',
                                                    borderRadius: '99px',
                                                    boxShadow: 'inset 0 0 11px 2px #ebe8e8',
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                }}
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
                                                className='me-0'
                                                sx={{
                                                    width: '130px',
                                                    borderRadius: '99px',
                                                    boxShadow: 'inset 0 0 11px 2px #ebe8e8',
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                }}
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
                                                className='me-0'
                                                sx={{
                                                    width: '130px',
                                                    borderRadius: '99px',
                                                    boxShadow: 'inset 0 0 11px 2px #ebe8e8',
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                }}
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

                                <Box className="mt-4 mb-2">
                                    <NormalHeading title="Language Known" />
                                    <StyledFormControl>
                                        <InputLabel id="demo-multiple-checkbox-label">Search Language</InputLabel>
                                        <Select
                                            sx={{ width: '100%', borderRadius: '99px' }}
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={personName}
                                            onChange={handleChange}
                                            input={
                                                <OutlinedInput
                                                    label="Tag"
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <SearchIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            }
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
                                    </StyledFormControl>
                                </Box>

                                <ButtonBlue title="Continue" link="/degree" />

                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DateOfBirth