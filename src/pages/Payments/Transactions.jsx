// import { Box, IconButton, InputBase, Typography } from '@mui/material'
// import React from 'react'
// import { DropdownText } from '../../components/Reusable'
// import TransactionTable from '../../components/TransactionTable'
// import { GridSearchIcon } from '@mui/x-data-grid'

// const Transactions = () => {
//   return (
//     <Box ml={5} mt={2} mb={5}  >
//         <Box
//         display="grid"
//         border={2}
//         borderRadius={"10px"}
//         py={"22px"}
//         px={"40px"}
//         mr={"0px"}
//         borderColor="#E0E0E0"
//       >
//         <Typography variant="h7">Transactions</Typography>
//         <Typography variant="h8" color="#9E9E9E">
//         Manage Driver wallets
//         </Typography>
//       </Box>
//       <Box display="flex" my={2}>
//         <DropdownText dropdown title={"Sort By"}/> 
//         </Box>
//         <Box
//         display="grid"
//         border={2}
//         borderRadius={"10px"}
//         py={"22px"}
//         px={"40px"}
//         mr={"40px"}
//         borderColor="#E0E0E0"
//       >
//         <Box display="flex" alignItems="center" justifyContent="space-between" >
//           <Typography variant="h8" fontWeight="bold">
//         Transactions
//         </Typography>
//         <Box 
//         display="flex"
//         backgroundColor="#FAFAFA"
//         borderRadius="15px"
//         marginX={3}
//         >
//         <IconButton type='button' sx={{ p:1}} >
//           <GridSearchIcon/>
//         </IconButton>
//           <InputBase sx={{ flex:1 }} 
//             placeholder='Search'
//           />
//       </Box>
//         </Box>
//         <TransactionTable/>
//       </Box> 
        
//     </Box>
//   )
// }

// export default Transactions

import React from 'react';
import { DropdownText } from '../../components/Reusable';
import TransactionTable from '../../components/TransactionTable';
import { SearchIcon } from '@heroicons/react/outline'; // Import the SearchIcon from Heroicons

const Transactions = () => {
  return (
    <div className="ml-5 mt-2 mb-5 space-y-2">
      <div className='rounded-md border-2 border-gray-300 py-4 px-8'>
        <div className="text-2xl font-semibold">Transactions</div>
        <p className="text-sm ml-1 text-gray-600">Manage Driver wallets</p>
      </div>

      <div className="flex my-2">
        <DropdownText dropdown title="Sort By" />
      </div>

      <div className="grid border-2 rounded-md py-6 px-8 border-gray-300">
        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
          <div className="text-2xl font-semibold">Transactions</div>
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
        <TransactionTable />
      </div>
    </div>
  );
};

export default Transactions;
