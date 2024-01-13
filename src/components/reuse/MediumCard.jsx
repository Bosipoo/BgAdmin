import React from 'react'
import { Box, Typography} from '@mui/material'


const MediumCard = ({topMargin = 0, icon, number, text, length = '20rem'}) => {
  return (
    // <Box borderRadius="10px" bgcolor="white" py="38px" display="flex" alignItems="center" mt={topMargin} paddingLeft="24px" paddingRight="46px" >
    //     <Box sx={{justifySelf: 'center' }} alignItems="center" >
    //         <img src={icon} alt="" />
    //     </Box>
    //     <Box ml="20px" >
    //         <Typography fontSize="22px" fontWeight="bold" >{number}</Typography>
    //         <Typography fontSize="12px" fontWeight="bold" color="#9E9E9E" >{text}</Typography>
    //     </Box>
    // </Box>

    <Box borderRadius="10px" bgcolor="white" mt={topMargin} py="38px" paddingLeft="24px" paddingRight="46px"  display="flex" alignItems="center" width={length} >
        <Box sx={{justifySelf: 'center' }} alignItems="center" >
            <img src={icon} alt="" />
        </Box>
        <Box ml="20px" >
            <Typography fontSize="22px" fontWeight="bold" >{number}</Typography>
            <Typography fontSize="12px" fontWeight="bold" color="#9E9E9E" >{text}</Typography>
        </Box>
    </Box>
  )
}

export default MediumCard
