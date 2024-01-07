import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import MobileNina from './MobileNina';
import Container from '@mui/material/Container';

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


const ProgressBar = ({ marginRight, number, para1 }) => {
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
        // <Container>
            <Box sx={{ width: '100%', margin: `${marginRight ? '0px 115px' : ''}` }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ flex: 1 }}>
                <div>
                    <h4 className='text-uppercase progressbar-font'>About You</h4>
                    <p style={{ fontSize: '12px' }}>1 step out of 2</p>
                </div>

                {/* <LinearProgressWithLabel sx={{ width: '100%' }} value={progress} /> */}

                <Box className="progressbar-res" sx={{ display: 'flex', justifyContent: 'end' }}>
                    <div className="progress progress-striped">
                        <div
                            className="progress-bar progress-bar-danger"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "30%" }}
                        >
                        </div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#000', marginLeft: '10px', marginTop: '-6px' }}> Up Next: Video CV </span>
                </Box>
            </Stack>
            <MobileNina number={number} para1={para1} />
        </Box>
        // </Container>
    )
}

export default ProgressBar