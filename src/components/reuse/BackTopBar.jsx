import React from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ColorModeContext, tokens } from "../../theme"
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import { Back, DownArrow, NotificationBell } from '../../assets'
import { Link } from 'react-router-dom';
//import { useStore } from 'zustand'
//import { AdminLogin } from '../stores/AdminLogin'



const BackTopBar = ({url = "#"}) => {
  //const { logout } = useStore(AdminLogin);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  const handleToggleColorMode = () => {
    colorMode.toggleColorMode();
  };
  const navigate = useNavigate();

  const searchBarStyles = {
    width: '450px',
    borderRadius: '15px',
    backgroundColor: '#f2f2f2',
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Box display="flex" alignItems="center" >
      {/* search bar ml={2} mr={6}*/}
      <Box 
        display="flex"
        borderRadius="3px"
        mr={3}
        bgcolor={colors.white[100]}
        p={2}
        >
        <IconButton type='button' onClick={handleBackClick} >
          <img src={Back} alt="" />
        </IconButton>
      </Box>
      <Box display="flex"  width="100%" justifyContent="space-between" p={1.8}  sx={{backgroundColor: `${colors.white[100]}`, borderRadius:"3px",}} >

        <InputBase
          placeholder={'Search...'}
          style={searchBarStyles}
          startAdornment={
            <SearchIcon style={{ color: 'gray' }} />
          }
        />

        {/* Icons */}
        <Box display="flex" p={0.1} marginX={3} sx={{backgroundColor:`${colors.grey[100]}`, borderRadius:5}} >
          <IconButton>
            <img src={NotificationBell} alt="" />
          </IconButton>
          <Link to={url}>
            <IconButton>
              <PersonOutlinedIcon/>
            </IconButton>
          </Link>
          <IconButton>
              <img src={DownArrow} alt="" />
          </IconButton>
        </Box>
        
      </Box>
    </Box>
  )
}

export default BackTopBar