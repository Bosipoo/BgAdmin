import React from 'react'
import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from '@mui/material'
import { Availablebalance,  CardYello,  Drivers,  Progress,  Referrals,  RevenueYellow,  Revenuebackground, Riders,  TripSelected,  TripsCompleted, WalletEye, WalletYelow} from '../../assets'

const LargeCard = ({balance}) => {

    const boxStyle = {
        display:"grid",
        py:"52px",
        px:"40px"
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

export default LargeCard
