import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '60%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">
                    <span style={{ fontSize: '12px', color: '#000' }}> Up Next: Video CV </span> </Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};


const ProgressBar = ({marginRight}) => {
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
        <Box sx={{ width: '100%', margin: `${marginRight ? '0px 115px' : ''}` }}>
            <Stack direction="row" justifyContent="space-between" sx={{ flex: 1 }}>
                <div>
                <h4 className='text-uppercase' style={{fontSize: '18px'}}>About You</h4>
                <p style={{fontSize: '12px'}}>1 step out of 2</p>
                </div>
                
                <LinearProgressWithLabel sx={{ width: '100%' }} value={progress} />
            </Stack>
        </Box>
    )
}

export default ProgressBar