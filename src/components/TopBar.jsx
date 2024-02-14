import React from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import { Back, DownArrow, NotificationBell } from '../assets'
import { useStore } from 'zustand'
//import { AdminLogin } from '../stores/AdminLogin'



const TopBar = () => {
  //const { logout } = useStore(AdminLogin);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  const handleToggleColorMode = () => {
    colorMode.toggleColorMode();
  };

  // const searchBarStyles = {
  //   width: '450px',
  //   borderRadius: '15px',
  //   backgroundColor: '#f2f2f2',
  // };

  function handleBackClick() {
    // window.history.back();
    logout()
  }

  const searchBarStyles = {
    flex: 1,
    borderRadius: '3px',
    padding: '0.6rem',
    marginLeft: '0.8rem', // Adjust margin as needed
    backgroundColor: 'white',
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto p-2">
        {/* Ensure the container class (mx-auto) doesn't limit the width */}
        <div className="flex justify-between items-center">
          <InputBase
            placeholder="Search..."
            style={searchBarStyles}
            startAdornment={<SearchIcon style={{ color: 'gray' }} />}
          />

          {/* Icons */}
          <div className="flex p-1 space-x-3 bg-gray-100 rounded">
            <IconButton>
              <img src={NotificationBell} alt="" />
            </IconButton>
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
            <IconButton>
              <img src={DownArrow} alt="" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <Box display="flex" alignItems="center">
  //     <Box display="flex"  width="100%" justifyContent="space-between" p={1.8}  sx={{backgroundColor: `${colors.white[100]}`, borderRadius:"3px",}} >

  //       <InputBase
  //         placeholder={'Search...'}
  //         style={searchBarStyles}
  //         startAdornment={
  //           <SearchIcon style={{ color: 'gray' }} />
  //         }
  //       />

  //       {/* Icons */}
  //       <Box display="flex" p={0.1} marginX={3} sx={{backgroundColor:`${colors.grey[100]}`, borderRadius:5}} >
  //         <IconButton>
  //           <img src={NotificationBell} alt="" />
  //         </IconButton>
  //         <IconButton>
  //           <PersonOutlinedIcon/>
  //         </IconButton>
  //         <IconButton>
  //             <img src={DownArrow} alt="" />
  //         </IconButton>
  //       </Box>
        
  //     </Box>
  //   </Box>
  // )
}

export default TopBar