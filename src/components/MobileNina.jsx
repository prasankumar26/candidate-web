import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const MobileNina = ({number, para1}) => {
    return (
        <div className='mb-2 mt-3 des-none'>
            <h5 className='mb-1'>NINA</h5>
            <Stack direction="row" alignItems="center" >
                <Avatar alt="Cindy Baker" src="/images/avatar-one.png" />
                <p style={{marginLeft: '-4px', fontSize: '14px', backgroundColor: '#F5F6Fa', borderTopRightRadius: '5px', borderTopLeftRadius: '5px', padding: '4px 8px'  }}>So here's a thought.</p>
            </Stack>

            {para1 &&  <div className="mt-2 p-2" style={{backgroundColor: '#F5F6Fa', borderRadius: '5px'}}>
                <p className='mb-1' style={{fontSize: '14px'}}>{number}</p>
                <p style={{fontSize: '14px'}}> {para1} </p>
            </div>}
           
        </div>
    )
}

export default MobileNina