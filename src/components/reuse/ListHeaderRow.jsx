import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ListHeaderRow = ({ linkText, linkTo }) => {
  return (


    <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
        <Select label="Sort by" value="" displayEmpty style={{ marginRight: '8px', height: '45px' }} IconComponent={ArrowDropDownIcon}>
            <MenuItem value="" disabled>
            Sort by
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
        </Select>

        <div>
            <Button variant="outlined" style={{ backgroundColor: 'black',color: 'white', borderColor: 'black', marginRight: '8px', height: '45px' }}>
                Create Driver Account 
                <IconButton style={{ marginLeft: '4px' }} color="inherit">
                    <AddCircleIcon />
                </IconButton>
            </Button>
            <Button variant="outlined" style={{ backgroundColor: 'white',color: 'black', borderColor: 'black', marginRight: '8px', height: '45px' }}>
                Export
                <IconButton style={{ marginLeft: '4px' }} color="inherit">
                    <CloudDownloadIcon />
                </IconButton>
            </Button>
        </div>
    </Box>
  );
};
export default ListHeaderRow
