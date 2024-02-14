import React from 'react'
import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from '@mui/material'
import { Availablebalance,  CardYello,  Drivers,  Progress,  Referrals,  RevenueYellow,  Revenuebackground, Riders,  TripSelected,  TripsCompleted, WalletEye, WalletYelow} from '../../assets'

const LargeCard = ({balance}) => {

    const boxStyle = {
        display:"grid",
        py:"52px",
        px:"42px"
    };

  return (
    <Box bgcolor="white" sx={[boxStyle, { py: "32px", px: "64px" }]}>
        <Box display= "grid"  alignItems="center"  justifyContent="center" justifyItems="center" >
            <img src={WalletYelow} alt="" />
            <Box mt="22px">
                <Typography fontSize="29px" textAlign="center" fontWeight="bold" >{balance}</Typography>
                <Typography fontSize="12px" fontWeight="bold" textAlign="center" color="#9E9E9E" >AVAILABLE BALANCE</Typography>
            </Box>
        </Box>

        <Box mt="28px" display="flex" justifyContent={"space-between"} alignItems="center" >

        <Box justifySelf="center" mr={2} bgcolor="#FFCC2A" px="40px" py="13px" borderRadius="5px" >
            <Typography fontSize="13px"fontWeight="bold" >Withdraw</Typography>
        </Box>

        <Box p="12px" bgcolor="#020202" borderRadius="5px" justifySelf="center">
            <img src={WalletEye} alt="" /></Box>
        </Box>
    </Box>
  )
}

// const LargeCard = ({ balance }) => {
//     return (
//       <div className="bg-white grid py-52 px-10">
//         <div className="grid place-items-center">
//           <img src={WalletYelow} alt="" />
//           <div className="mt-22">
//             <p className="text-29 font-bold text-center">{balance}</p>
//             <p className="text-12 font-bold text-center text-gray-500">AVAILABLE BALANCE</p>
//           </div>
//         </div>
  
//         <div className="mt-28 flex justify-between items-center">
//           <div className="self-center mr-2 bg-yellow-400 px-40 py-13 rounded">
//             <p className="text-13 font-bold">Withdraw</p>
//           </div>
  
//           <div className="p-12 bg-black rounded self-center">
//             <img src={WalletEye} alt="" />
//           </div>
//         </div>
//       </div>
//     );
//   };

export default LargeCard
