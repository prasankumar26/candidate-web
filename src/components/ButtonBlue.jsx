import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const ButtonBlue = ({ title, link, center }) => {
    const navigate = useNavigate()
    return (
        <Box className="py-3">
            {center ? <Button 
                      onClick={() => navigate(`${link}`)}
                      sx={{ backgroundColor: '#756DE9', 
                            borderRadius: '99px', 
                            fontSize: '16px', 
                            textTransform: 'capitalize',
                            width: 'fit-content',
                            padding: '15px, 40px, 15px, 40px',
                            '&:hover': {
                            backgroundColor: '#756DE9', 
                         },
                    }}
                variant="contained" className='w-100 px-5 next-btn mt-2' size='small'>{title}</Button> :
                <Button 
                onClick={() => navigate(`${link}`)} 
                sx={{ backgroundColor: '#756DE9', 
                      borderRadius: '99px',
                      fontSize: '16px', 
                      textTransform: 'capitalize',
                      width: 'fit-content', 
                      padding: '15px, 40px, 15px, 40px', 
                      '&:hover': {
                        backgroundColor: '#756DE9', 
                      },
                }}
                variant="contained" className='w-100 px-5 mt-2' size='small'> {title} </Button>
            }
        </Box>
    )
}

export default ButtonBlue