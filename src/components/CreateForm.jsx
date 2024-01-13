import { Box, Button, InputAdornment, Modal, TextField, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Asterisk, Mail, Name_Icon, Password_Icon, Password_open, Phone } from "../assets"
import { useStore } from 'zustand'
import { ModalStore } from '../stores/ModalStores'
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CreateForm = () => {

    const {createDriverModal,setCreateDriverModal } = useStore(ModalStore)

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

    const handleClose = () => setCreateDriverModal(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePassword = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    
  return (
    
    // <Box>
    //   <Modal
    //   sx={{overflowY: 'scroll'}} disableScrollLock={false}
    //     open={createDriverModal}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <Typography textAlign="center" id="modal-modal-title" variant="h4" component="h4">
    //             Create a driver account
    //           </Typography>
    //           <Box mt={2}>
    //             <InputItem icon={Name_Icon} label={"Name"} placeholder={"Name"}  />
    //             <InputItem icon={Mail} label={"Your best Email?"} placeholder={"E.g yourname@gmail.com"}  />
    //             <InputItem icon={Phone} label={"Phone Number (We'll send a verification code)"} placeholder={"+2340000004200"}  />
    //             <InputItem icon={Phone} label={"An alternative phone number "} placeholder={"+2340000004200"}  />
    //             <InputItem  label={"Street Address"} placeholder={"E.g. 2, harmony street, diamond estate."}  />
    //             <Box display="flex" justifyContent="space-around" >
    //             <InputItem label={"City"} placeholder={"E.g. Gbagada"}  />
    //             <InputItem  label={"State"} placeholder={"E.g. Lagos"}  />
    //             </Box>
    //             <Box mt={2} display="flex" >
    //         <Typography variant='h5' > "Password"</Typography>
    //         <img 
    //             alt='asterisk'
    //             src={Asterisk} />
    //         </Box>
    //         <TextField 
    //             sx={{paddingTop:1}}
    //             placeholder="Create a Password"
    //             fullWidth 
    //             InputProps={{
    //                 endAdornment: (
    //         <InputAdornment position="end">
    //           <img 
    //             alt='password'
    //           src={Password_open} />
    //         </InputAdornment>
    //       ),
    //       startAdornment:(
    //         <InputAdornment position='start' >
    //             <img alt='password' src={Password_Icon} />
    //         </InputAdornment>
    //       )
    //     }} />
    //         <TextField 
    //             sx={{paddingTop:1}}
    //             placeholder="Confirm Password"
    //             fullWidth 
    //             InputProps={{
    //                 endAdornment: (
    //         <InputAdornment position="end">
    //           <img alt='password' src={Password_open} />
    //         </InputAdornment>
    //       ),
    //       startAdornment:(
    //         <InputAdornment position='start' >
    //             <img alt='password' src={Password_Icon} />
    //         </InputAdornment>
    //       )
    //     }} />
    //           </Box>
            
    //         <Typography 
    //             borderRadius="5px" 
    //             alignSelf="center" 
    //             textAlign="center" 
    //             p={2} 
    //             sx={{backgroundColor:"#FFD240", mx:20, mt:3 }} 
    //             >
    //             Proceed
    //         </Typography>
    //     </Box>
        
    //   </Modal>
    // </Box>
    <div>
      <Modal
        open={createDriverModal}
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
             Create a driver account
          </Typography>
          <form>
          <InputItem icon={Name_Icon} label={"Name"} placeholder={"Name"}  />
          <InputItem icon={Mail} label={"Your best Email?"} placeholder={"E.g yourname@gmail.com"}  />
          <InputItem icon={Phone} label={"Phone Number (We'll send a verification code)"} placeholder={"+2340000004200"}  />
          <InputItem icon={Phone} label={"An alternative phone number "} placeholder={"+2340000004200"}  />
          <InputItem  label={"Street Address"} placeholder={"E.g. 2, harmony street, diamond estate."}  />
          <Box display="flex" justifyContent="space-between" >
            <InputItem label={"City"} placeholder={"E.g. Gbagada"}  />
            <InputItem  label={"State"} placeholder={"E.g. Lagos"}  />
          </Box>
          
          {/* Password row */}
          <NoLabelInputItem
            icon={<LockIcon />}
            label="Create Password"
            placeholder="Enter your password"
            type="password"
            showPassword={showPassword}
            onTogglePassword={handleTogglePassword}
          />
          <NoLabelInputItem
            icon={<LockIcon />}
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

export default CreateForm