import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const ButtonBlue = ({ title, link, center }) => {
    const navigate = useNavigate()
    return (
        <Box className="py-3">
            {center ? <Button
            style={{padding: '10px 40px'}} 
                      onClick={() => navigate(`${link}`)}
                      sx={{ backgroundColor: '#756DE9', 
                            borderRadius: '99px', 
                            fontSize: '16px', 
                            textTransform: 'capitalize',
                            width: 'fit-content',
                            '&:hover': {
                            backgroundColor: '#756DE9', 
                         },
                    }}
                variant="contained" className='w-100 next-btn mt-2 btn-pad' size='small'>{title}</Button> :
                <Button 
                style={{padding: '15px 40px'}}
                onClick={() => navigate(`${link}`)} 
                sx={{ backgroundColor: '#756DE9', 
                      borderRadius: '99px',
                      fontSize: '16px', 
                      textTransform: 'capitalize',
                      width: 'fit-content', 
                      '&:hover': {
                        backgroundColor: '#756DE9', 
                      },
                }}
                variant="contained" className='w-100 mt-2 btn-pad' size='small'> {title} </Button>
            }
        </Box>
    )
}

export default ButtonBlue