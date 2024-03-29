import { Box, Typography } from "@mui/material"
import { DownArrow } from "../assets"

// export const DropdownText=({title, dropdown})=>{
//     return(

//         <Box borderRadius="5px" 
//             color="#000000" 
//             p={1} 
//             border={1} 
//             display="flex"
//             alignItems="center"
//             justifyContent="space-between"
//             sx={{backgroundColor:"white"}}>
//         <Typography  
//             textTransform="initial" 
//             variant='h5' 
//             color="#424242"
//             > {title} </Typography>
//            { dropdown && <img src={DownArrow} style={{paddingLeft:10}}/>}
//         </Box>
//     )
// }

export const DropdownText = ({ title, dropdown }) => {
    return (
      <div className="rounded-md border p-1 flex items-center justify-between bg-white border-black">
        <h5 className="text-base text-black">{title}</h5>
        {dropdown && <img src={DownArrow} className="pl-2" alt="Down Arrow" />}
      </div>
    );
  };