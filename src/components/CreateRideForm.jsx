import { Box, Button, InputAdornment, Modal, TextField, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Asterisk, Mail, Name_Icon, Password_Icon, Password_open, Phone } from "../assets"
import { useStore } from 'zustand'
import { ModalStore } from '../stores/ModalStores'
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CreateRideForm = () => {

    const {createRiderModal,setCreateRiderModal } = useStore(ModalStore)

    const InputItem = ({label, placeholder, icon})=>{
        return(
            <Box>
            <Box mt={2} display="flex" >
            <Typography fontSize="1rem" > {label}</Typography>
            <img 
                alt='asterisk'
            src={Asterisk} />
            </Box>
            <TextField 
                sx={{paddingTop:1}}
                placeholder={placeholder}
                fullWidth 
                InputProps={{
                startAdornment: (
            <InputAdornment position="start">
             
              <img 
                alt=''
              src={icon} />
            </InputAdornment>
          ),
        }} />
          </Box>
        )
    }

    const NoLabelInputItem = ({ icon, placeholder, type = 'text', showPassword, onTogglePassword, ...rest }) => {
      return (
        <TextField
          placeholder={placeholder}
          type={type === 'password' && showPassword ? 'text' : type}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={icon}/>
              </InputAdornment>
            ),
            endAdornment: type === 'password' && (
              <InputAdornment position="end">
                <IconButton onClick={onTogglePassword}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...rest}
        />
      );
    };

    const style = {
        position: 'absolute',
        top: '75%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "45%",
        bgcolor: 'background.paper',
        borderRadius:"10px",
        boxShadow: 24,
        p: 5,
    };

    const handleClose = () => setCreateRiderModal(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePassword = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    
  return (
    <div>
      <Modal
        open={createRiderModal}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <Typography textAlign="center" id="modal-modal-title" variant="h4" component="h4">
             Create a rider account
          </Typography>
          <form>
          <InputItem icon={Name_Icon} label={"Name"} placeholder={"Name"}  />
          <InputItem icon={Mail} label={"Your best Email?"} placeholder={"E.g yourname@gmail.com"}  />
          <InputItem icon={Phone} label={"Phone Number"} placeholder={"+2340000004200"}  />
          <InputItem icon={Phone} label={"An alternative phone number "} placeholder={"+2340000004200"}  />
          
          {/* Password row */}
          <NoLabelInputItem
            icon={Password_Icon}
            label="Create Password"
            placeholder="Enter your password"
            type="password"
            showPassword={showPassword}
            onTogglePassword={handleTogglePassword}
          />
          <NoLabelInputItem
            icon={Password_Icon}
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            showPassword={showPassword}
            onTogglePassword={handleTogglePassword}
          />
            
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default CreateRideForm