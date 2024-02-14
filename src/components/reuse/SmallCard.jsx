import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography} from '@mui/material'

// const SmallCard = ({topMargin = 0, icon, number, text}) => {
//     return (
//       <Box borderRadius="10px" bgcolor="white" py="38px" display="flex" alignItems="center" mt={topMargin} paddingLeft="24px" paddingRight="46px" >
//           <Box sx={{justifySelf: 'center' }} alignItems="center" >
//               <img src={icon} alt="" />
//           </Box>
//           <Box ml="20px" >
//               <Typography fontSize="22px" fontWeight="bold" >{number}</Typography>
//               <Typography fontSize="12px" fontWeight="bold" color="#9E9E9E" >{text}</Typography>
//           </Box>
//       </Box>
//     )
// }

const SmallCard = ({ topMargin = 0, icon, number, text, textSize= 13, buttonText, buttonUrl, withBorder = false }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      if (buttonUrl) {
        navigate(buttonUrl);
      }
    };

    return (
      <>
        <div className={`bg-white rounded ${withBorder ? 'border border-gray-300' : ''} flex flex-col justify-center`} style={{ paddingLeft: '24px', paddingRight: '24px', paddingTop: '10px', paddingBottom: '10px', marginTop: `${topMargin}px`, width: '270px', height: '145px' }}>
          <div className='flex items-center p-4'>
            <div className="self-center">
              <img src={icon} alt="" style={{height: '60px', width: '60px'}}/>
            </div>
            <div className="ml-10">
              <p className="text-2xl font-bold">{number}</p>
              <p className="font-bold text-gray-500" style={{ fontSize: `${textSize}px`}}>{text}</p>
            </div>
          </div>

          {buttonText && (
          <div className="flex justify-end">
            <div>
              <button
                className="bg-transparent hover:bg-yellow-400 text-gray-800 py-2 px-4 border border-gray-800 text-xs rounded"
                onClick={handleButtonClick}
              >
                {buttonText}
              </button>
            </div>
          </div>
        )}
        </div> 
      </>  
    );
        {/* <div className="bg-white rounded py-38 flex items-center mt-0 p-6" style={{ paddingLeft: '24px', paddingRight: '46px' }}>
          <div className="self-center">
            <img src={icon} alt="" />
          </div>
          <div className="ml-20">
            <p className="text-22 font-bold">{number}</p>
            <p className="text-12 font-bold text-gray-500">{text}</p>
          </div>
          
          <div className="mt-4 flex items-center">
            <button className="border-r border-gray-300 p-2">
              Your Button
            </button>
          </div>
        <div> */}
      
      

    
};

export default SmallCard
