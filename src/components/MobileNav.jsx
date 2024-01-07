import React from 'react'
import TopHeading from './TopHeading'
import Grid from '@mui/material/Grid';

const MobileNav = () => {
    return (
        <Grid item xs={12} md={4} className='des-none' style={{ backgroundColor: '#FF8960', height: 'auto', position: 'relative' }}>
            <div className="mt-0">
                <TopHeading textstart />
            </div>
        </Grid>
    )
}

export default MobileNav