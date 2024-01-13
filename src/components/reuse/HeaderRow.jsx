import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

const HeaderRow = ({ linkText, linkTo, onClickCreate }) => {
  return (


    <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
        <Link to={linkTo} style={{ textDecoration: 'none', color: 'black' }}>
            <Typography fontWeight="bold" borderBottom="1px solid black">{linkText}</Typography>
        </Link>

        <div>
            <Button variant="outlined" style={{ backgroundColor: 'white',color: 'black', borderColor: 'black', marginRight: '8px', height: '45px' }}>
                Generate Report
            </Button>

            <Button variant="outlined" onClick={onClickCreate} style={{ backgroundColor: 'black',color: 'white', borderColor: 'black', marginRight: '8px', height: '45px' }}>
                Create Driver Account 
                <IconButton style={{ marginLeft: '4px' }} color="inherit">
                    <AddCircleIcon />
                </IconButton>
            </Button>
        </div>
        

        {/* <Box display="flex"   p={1.8}  sx={{ borderRadius:"3px",}} >

            

            <Box display="flex">
                

                
            </Box>
        
        </Box> */}
    </Box>
  );
};

export default HeaderRow;
