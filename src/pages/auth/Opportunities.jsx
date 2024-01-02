import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };
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
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const Opportunities = () => {
    const navigate = useNavigate()
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [industry, setIndustry] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeIndustry = (event) => {
        const {
            target: { value },
        } = event;
        setIndustry(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <section className='opportunities-bg' style={{ height: '97vh' }}>
            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '10%', width: '300px' }} />
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: '99' }}>
                <p className="text-center text-white" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>

                <div className="text-center mt-5 mb-3">
                    <p className="text-white" style={{ fontSize: '20px' }}>
                        <b>What kind of opportunities  are you looking for?</b>
                    </p>
                </div>

                <div className="mx-auto text-center w-100">
                    <FormControl sx={{ m: 1, width: '100%' }}>
                        <InputLabel id="demo-multiple-chip-label" style={{ color: '#dad5d5' }}>Browse jobs</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Browse jobs" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} sx={{ backgroundColor: 'white', color: 'black' }} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                            sx={{
                                width: '100%',
                                borderRadius: '99px',
                                border: '2px solid white',
                                '&:focus': {
                                    borderRadius: '99px',
                                    border: '2px solid white',
                                },
                            }}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <Stack direction="row" justifyContent="space-between" alignItems="center" className='mt-4 mb-4'>
                    <p className='text-white'>Notify me about similar jobs</p>
                    <Switch {...label} size="medium" />
                </Stack>

                <div className="mx-auto text-center w-100">
                    <FormControl sx={{ m: 1, width: '100%' }}>
                        <InputLabel id="demo-multiple-chip-label" style={{ color: '#dad5d5' }}>Select Industry</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={industry}
                            onChange={handleChangeIndustry}
                            input={<OutlinedInput id="select-multiple-chip" label="Select Industry" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} sx={{ backgroundColor: 'white', color: 'black' }} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                            sx={{
                                width: '100%',
                                borderRadius: '99px',
                                border: '2px solid white',
                                '&:focus': {
                                    borderRadius: '99px',
                                    border: '2px solid white',
                                },
                            }}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <Button onClick={() => navigate('/helpyou')} sx={{
                    backgroundColor: '#fff', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                        backgroundColor: '#fff',
                    },
                }} className='w-100 text-dark mt-5' variant="text">Next</Button>


            </Container>
        </section>
    )
}

export default Opportunities