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


const GreatJob = () => {
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
              <img src="/images/vector-two.png" alt="" className="img-fluid mob-none" style={{ position: 'absolute', bottom: '35%', left: '45%', width: 'fit-content' }} />

              <div className="mt-4">
                <TopHeading textstart />
                <h2 className='text-white ms-3 mt-5 pt-5 position-relative px-5' style={{ zIndex: '999' }}>
                  Great Job!
                </h2>
                <p className='text-white ms-3 position-relative px-5' style={{ zIndex: '999' }}>
                  Your Catalyst Profile is almost ready for the world!
                </p>
              </div>
            </Grid>

            <MobileNav />

            <Grid item xs={12} md={8} className='pt-lg-5 px-lg-s-des'>
              <Stack direction="row" className='mt-3'> <NavigateBeforeIcon /> Back to My profile </Stack>
              <h2 className='mt-3' style={{ fontSize: '22px', fontWeight: '600' }}>How about we make the profile richer before the hiring company sees it?</h2>
              <p style={{ color: '#979797' }} className='mb-4'>Companies respond 20x times more to applications which have completed profiles. </p>

              <Box style={{ boxShadow: '0px 2px 10px 0px #2222221A' }} className="p-5 position-relative">
                <h4 style={{ color: '#756DE9', fontSize: '18px' }}>Make Profile richer</h4>
                <div className="pt-2">
                  <p style={{ color: '#979797', lineHeight: '18px' }}>Add work links, media, tell us about you</p>
                  <p style={{ color: '#979797' }}>a bit more</p>
                </div>
                <img src="/images/notes-list.png" alt="" className="img-fluid w-100 position-absolute" style={{ bottom: 0, right: '-2%', width: '100px' }} />
              </Box>


              <Box style={{ boxShadow: '0px 2px 10px 0px #2222221A' }} className="p-5 position-relative mt-5">
                <h4 style={{ color: '#756DE9', fontSize: '18px' }}>Add preferences</h4>
                <div className="pt-2">
                  <p style={{ color: '#979797', lineHeight: '18px' }}>Tell us what are your basic criteria so we can </p>
                  <p style={{ color: '#979797' }}>find best fit opportunities for you</p>
                </div>
                <img src="/images/group-table.png" alt="" className="img-fluid w-100 position-absolute" style={{ bottom: '-15%', right: '-2%', width: '300px' }} />
              </Box>




              <Stack direction="row" alignItems="center">
                <ButtonBlue title="Let's get it done!" link="/experience" />

                <Button
                  style={{ padding: '15px 40px' }}
                  onClick={() => navigate(``)}
                  sx={{
                    backgroundColor: '#ffffff',
                    color: '#756DE9',
                    fontWeight: '600',
                    borderRadius: '99px',
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    width: 'fit-content',
                    '&:hover': {
                      backgroundColor: '#ffffff',
                    },
                  }}
                  variant="contained" className='w-100 mt-2 btn-pad ms-4' size='small'>  Publish Anyway </Button>
              </Stack>


            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  )
}

export default GreatJob