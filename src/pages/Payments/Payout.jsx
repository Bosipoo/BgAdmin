import { Box, IconButton, InputBase, Typography } from '@mui/material'
import React from 'react'
import { DropdownText } from '../../components/Reusable';
import TransactionTable from '../../components/TransactionTable';
import { SearchIcon } from '@heroicons/react/outline';
import SmallCard from '../../components/reuse/SmallCard'
import { Car, TripsOutline, Drivers, TripsBlack } from '../../assets'
import { GridSearchIcon } from '@mui/x-data-grid'
import PayoutsTable from '../../components/PayoutsTable'

const Payout = () => {
    return (
        <div className="ml-5 mt-2 mb-5 space-y-2">
          <div className='rounded-md border-2 border-gray-300 py-4 px-8'>
            <div className="text-2xl font-semibold">Payout</div>
            <p className="text-sm ml-1 text-gray-600">Manage Payout Information</p>
          </div>
    
          <div className="flex my-2">
            <DropdownText dropdown title="Sort By" />
          </div>

          <div className="flex space-x-8 overflow-x-auto border-2 rounded-md py-6 px-8 border-gray-300">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex-none w-64">
                <SmallCard
                    icon={Drivers}
                    number={index + 1}  // Update with your actual data
                    text={`Card ${index + 1}`}  // Update with your actual data
                    textSize={10.9}
                    buttonText={"See all"}
                    buttonUrl={"#"}
                    withBorder={true}
                />
                </div>
            ))}
           </div>
    
          <div className="grid border-2 rounded-md py-6 px-8 border-gray-300">
            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
              <div className="text-2xl font-semibold">Payouts</div>
              <div className="flex bg-gray-100 rounded-full mx-3">
                <button type="button" className="p-1">
                  <SearchIcon className="h-5 w-5 text-gray-500" />
                </button>
                <input
                  className="flex-1 p-1 focus:outline-none rounded-full bg-gray-100"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <PayoutsTable />
          </div>
        </div>
      );


    //     const boxStyle = {
    //             display:"grid",
    //             border:2,
    //             borderRadius:"10px",
    //             py:"22px",
    //             px:"40px",
    //             mr:"0px",
    //             borderColor:"#E0E0E0"
    //         }
    // return (
    //     <Box ml={5} mt={2} mb={5}  >
    //         <Box sx={boxStyle}>
    //             {/* GENERAL SETTINGS */}
    //             <Typography variant="h7">Payouts</Typography>
    //             <Typography variant="h8" color="#9E9E9E">
    //                 Manage Payout Information
    //             </Typography>
    //         </Box>
    //         <Box sx={[boxStyle,{mt:2, justifyContent:"space-between", alignItems:"center", display:"flex" }]}  >
        
    //         <Box sx={[boxStyle,{py:0.5, width:260, px:3} ]}>
    //             <Typography textAlign="right" borderRadius={1} fontSize={8} padding={1} bgcolor="#F5F5F5" display="flex" justifySelf="flex-end" mb={1} >Today</Typography>
    //             <Box display="flex" alignItems="center" >
    //             <Box sx={{backgroundColor:"#FFE180", m:0, p:2, justifySelf:'center', borderRadius:20 }} alignItems="center" >
    //             <img src={Card}  alt="" />
    //             </Box>
    //             <Box ml={2}>
    //                 <Typography variant='h7' fontWeight="bold" >20</Typography>
    //                 <Typography variant="h6" fontWeight="bold" color="#9E9E9E" >Total Payouts Made</Typography>
    //             </Box>
    //             </Box>
    //             <Typography textAlign="left" borderRadius={1} fontSize={8} px={1} py={0.5} bgcolor="#ffffff" display="flex" justifySelf="flex-end" mt={1} border={1} mb={1} >See All</Typography>
    //         </Box>

    //         <Box sx={[boxStyle,{py:0.5, width:260, px:3} ]}>
    //             <Typography textAlign="right" borderRadius={1} fontSize={8} padding={1} bgcolor="#F5F5F5" display="flex" justifySelf="flex-end" mb={1} >Today</Typography>
    //             <Box display="flex" alignItems="center" >
    //             <Box sx={{backgroundColor:"#FFB4B4", m:0, p:2, justifySelf:'center', borderRadius:20 }} alignItems="center" >
    //             <img src={Card}  alt="" />
    //             </Box>
    //             <Box ml={2}>
    //                 <Typography variant='h7' fontWeight="bold" >₦200,234</Typography>
    //                 <Typography variant="h6" fontWeight="bold" color="#9E9E9E" >Amount Paid Out</Typography>
    //             </Box>
    //             </Box>
    //             <Typography textAlign="left" borderRadius={1} fontSize={8} px={1} py={0.5} bgcolor="#ffffff" display="flex" justifySelf="flex-end" mt={1} border={1} mb={1} >See All</Typography>
    //         </Box>

    //         <Box sx={[boxStyle,{py:0.5, width:260, px:3} ]}>
    //             <Typography textAlign="right" borderRadius={1} fontSize={8} padding={1} bgcolor="#F5F5F5" display="flex" justifySelf="flex-end" mb={1} >Today</Typography>
    //             <Box display="flex" alignItems="center" >
    //             <Box sx={{backgroundColor:"#BDFFE3", m:0, p:2, justifySelf:'center', borderRadius:20 }} alignItems="center" >
    //             <img src={Card}  alt="" />
    //             </Box>
    //             <Box ml={2}>
    //                 <Typography variant='h7' fontWeight="bold" >10</Typography>
    //                 <Typography variant="h6" fontWeight="bold" color="#9E9E9E" >Pending Payouts</Typography>
    //             </Box>
    //             </Box>
    //             <Typography textAlign="left" borderRadius={1} fontSize={8} px={1} py={0.5} bgcolor="#ffffff" display="flex" justifySelf="flex-end" mt={1} border={1} mb={1} >See All</Typography>
    //         </Box>

    //         </Box>
    //         <Box sx={[boxStyle,{mt:3}]} >
    //     <Box display="flex" alignItems="center" justifyContent="space-between" >
    //       <Typography variant="h8" fontWeight="bold">
    //     Payouts
    //     </Typography>
    //     <Box 
    //         display="flex"
    //         backgroundColor="#FAFAFA"
    //         borderRadius="15px"
    //         marginX={3}
    //     >
    //     <IconButton type='button' sx={{ p:1}} >
    //       <GridSearchIcon/>
    //     </IconButton>
    //       <InputBase sx={{ flex:1 }} 
    //         placeholder='Search'
    //       />
    //   </Box>
    //     </Box>
    //     <PayoutsTable/>
    //   </Box> 
    //     </Box>
    // )
}

export default Payout