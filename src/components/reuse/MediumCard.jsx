import React from 'react'
import { Box, Typography} from '@mui/material'


const MediumCard = ({topMargin = 0, icon, number, text, length = '100%'}) => {
  return (
    // <Box borderRadius="10px" bgcolor="white" mt={topMargin} py="38px" paddingLeft="24px" paddingRight="46px"  display="flex" alignItems="center" width={length} >
    //     <Box sx={{justifySelf: 'center' }} alignItems="center" >
    //         <img src={icon} alt="" />
    //     </Box>
    //     <Box ml="20px" >
    //         <Typography fontSize="22px" fontWeight="bold" >{number}</Typography>
    //         <Typography fontSize="12px" fontWeight="bold" color9="#E9E9E" >{text}</Typography>
    //     </Box>
    // </Box>

  <>
    <div className='bg-white rounded' style={{ paddingLeft: '24px', paddingRight: '24px', paddingTop: '10px', paddingBottom: '10px', marginTop: `${topMargin}px`, width: {length}, height:'145px' }}>
      <div className='flex items-center p-4'>
        <div className="self-center">
          <img src={icon} alt="" />
        </div>
        <div className="ml-20">
          <p className="text-2xl font-bold">{number}</p>
          <p className="text-12 font-bold text-gray-500">{text}</p>
        </div>
      </div>

      <div class="flex justify-end">
        <div>
          <button class="bg-transparent hover:bg-yellow-400 text-gray-800 py-2 px-4 border border-gray-800 text-xs rounded">
            See Details
          </button>
        </div>
      </div>
    </div> 
  </>  
  )
}

export default MediumCard
