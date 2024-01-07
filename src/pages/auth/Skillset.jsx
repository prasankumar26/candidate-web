import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import { colourOptions } from '../../data';
import TopHeading from '../../components/TopHeading';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ProgressBar from '../../components/ProgressBar';
import NormalHeading from '../../components/NormalHeading';

import { styled } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ButtonBlue from '../../components/ButtonBlue';
import MobileNav from '../../components/MobileNav';

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
    value: PropTypes.number.isRequired,
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

const StyledFormControl = styled(FormControl)({
    position: 'relative',
    '& .MuiSelect-icon': {
      display: 'none',
    },  
    m: 1,
    width: '100%',
    boxShadow: `inset 0 0 11px 2px #dfd9d9`,
    borderRadius: '99px',
    '&:focus-within': {
        boxShadow: 'inset 0 0 11px 2px #dfd9d9', // Inner shadow on focus
    },
});


const Skillset = () => {
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


    return (
        <section className='position-relative' style={{ height: '106vh' }}>
            <div maxWidth="xl">
                <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                    <Grid container>
                        <Grid className='mob-none' item xs={12} md={4} style={{ backgroundColor: '#FF8960', height: '106vh', position: 'relative' }}>
                            <img src="/images/ellipse-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '70%' }} />
                            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                            <div className="mt-4">
                                <TopHeading textstart />
                                <h2 className='text-white ms-3 mt-5 pt-5 position-relative px-5' style={{ zIndex: '999' }}>
                                    Select skillset which you
                                </h2>
                                <h2 className='text-white ms-3 position-relative px-5' style={{ zIndex: '999' }}>are proud of</h2>
                            </div>
                        </Grid>

                        <MobileNav />
                        
                        <Grid item xs={12} md={8} className='pt-lg-5 px-lg-s-des'>
                            <ProgressBar sPara="Select skillset which you are proud of" />
                            <Stack direction="row" className='mt-3'> <NavigateBeforeIcon /> Back </Stack>
                            <Box className="mt-2">
                                <Stack direction="row" justifyContent="space-between">
                                    <NormalHeading title="My Skillsets Are" />
                                </Stack>

                                <StyledFormControl>
                                    <InputLabel id="demo-multiple-checkbox-label">Search By Keywords</InputLabel>
                                    <Select
                                        sx={{ width: '100%', borderRadius: '99px', '& fieldset': {
                                            border: 'none',
                                            boxShadow: `inset 0 0 11px 2px rgba(75, 68, 212, 0.08)`,
                                        }, }}
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

                            <Box className="mt-4">
                                <Stack direction="row" justifyContent="space-between">
                                    <NormalHeading title="Tools Known" />
                                </Stack>
                                <StyledFormControl>
                                    <InputLabel id="demo-multiple-checkbox-label">Search By Tools</InputLabel>
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

                            <ButtonBlue title="Next up Experience" link="/experience" />

                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    )
}

export default Skillset