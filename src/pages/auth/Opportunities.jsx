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
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TopHeading from '../../components/TopHeading';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/system';

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


const StyledFormControl = styled(FormControl)({
    m: 1,
    width: '100%',
    '& fieldset': {
        border: 'none',
      },
});

const CustomSelect = styled(Select)(({ theme }) => ({
    width: '100%',
    borderRadius: '99px',
    boxShadow: 'inset 0 0 11px 2px #e8430a91', // Inner shadow
    '&:focus': {
        borderRadius: '99px',
        boxShadow: 'inset 0 0 11px 2px #e8430a91', // Inner shadow on focus
    },
}));

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
        <section className='opportunities-bg' style={{ height: '97vh' }}>
            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '10%', width: '300px' }} />
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: '99' }}>
                <TopHeading />

                <div className="mx-lg-5">
                <div className="text-start mt-5 mb-3">
                    <h6 className="text-white" style={{ fontSize: '22px' }}>
                        What kind of opportunities  are you looking for?
                    </h6>
                </div>

                <div className="mx-auto text-center w-100">
                    <StyledFormControl>
                        <InputLabel id="demo-multiple-chip-label" style={{ color: '#dad5d5' }}>Browse jobs</InputLabel>
                        <CustomSelect
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
                        </CustomSelect>
                    </StyledFormControl>
                </div>

                <Stack direction="row" justifyContent="space-between" alignItems="center" className='mt-4 mb-4'>
                    <p className='text-white'>Notify me about similar jobs</p>
                    <CustomSwitch {...label} size="medium" />
                </Stack>

                <div className="mx-auto text-center w-100">
                    <StyledFormControl>
                        <InputLabel id="demo-multiple-chip-label" style={{ color: '#dad5d5' }}>Select Industry</InputLabel>
                        <CustomSelect
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
                        </CustomSelect>
                    </StyledFormControl>
                </div>

                <Button onClick={() => navigate('/helpyou')} sx={{
                    backgroundColor: '#FFD0BF', boxShadow: '0px 2px 10px 0px rgba(34, 34, 34, 0.1)', color: '#756DE9', fontWeight: '600', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                        backgroundColor: '#FFD0BF',
                    },
                }} className='w-100 mt-5' variant="text">Next</Button>
                </div>


            </Container>
        </section>
    )
}

export default Opportunities