import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import BackTopBar from '../../components/reuse/BackTopBar'
import { Box, Button } from '@mui/material'
import ListHeaderRow from '../../components/reuse/ListHeaderRow'
import DriverListTable from "../../components/DriverListTable"
import VerticalTabContainer from '../../components/reuse/VerticalTabContainer'
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
 
const DriverDetails = () => {
    const boxStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const tab1Content = (
        <div style={{ padding: '10px', width: '100%' }}>
          <Box
            sx={{
                border: '2px solid #E0E0E0', // Light grey border
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}
            >
            
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                {/* User Image */}
                    <div
                        style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#ccc', // Placeholder color for user image
                        marginRight: '15px',
                        }}
                    ></div>

                    {/* User Name and Role */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '5px' }}>John Doe</div>
                        <div style={{ fontWeight: '300', fontSize: '16px' }}>User Role</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    {/* Push Notification Button */}
                    <Button
                    variant="outlined"
                    style={{ borderColor: '#E0E0E0', color: '#757575', marginRight: '10px', borderRadius: '45px' }}
                    >
                    Push Notification
                    <span style={{ marginLeft: '4px'}} ><NotificationsIcon /></span>
                    </Button>

                    {/* Edit Button */}
                    <Button
                    variant="outlined"
                    style={{ borderColor: '#E0E0E0', color: '#757575' , borderRadius: '45px', paddingLeft:'25px'}}>
                        Edit
                    <span style={{ marginLeft: '4px'}} ><EditIcon /></span>
                    </Button>
                </div>
            </Box>

            <Box
            sx={{
                border: '2px solid #E0E0E0', // Light grey border
                borderRadius: '8px',
                padding: '20px',
                width: '100%',
                marginTop: '15px'
            }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Personal Information</div>
                    <Button
                    variant="outlined"
                    style={{ borderColor: '#E0E0E0', color: '#757575', borderRadius: '45px', paddingLeft: '25px' }}
                    >
                    Edit
                    <span style={{ marginLeft: '4px' }}><EditIcon /></span>
                    </Button>
                </div>

                {/* First and Last Name Row */}
                <div style={{ display: 'flex', width: '100%', marginTop: '15px', gap: '40%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ color: '#9E9E9E' }}>First Name</div>
                        <div>John</div>
                    </div> 
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ color: '#9E9E9E' }}>Last Name</div>
                        <div>Doe</div>
                    </div>
                </div>

                {/* Email and Phone Number Row */}
                <div style={{ display: 'flex', width: '100%', marginTop: '15px', gap: '40%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ color: '#9E9E9E' }}>Email Address</div>
                        <div>John</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ color: '#9E9E9E' }}>Phone Number</div>
                        <div>Doe</div>
                    </div>
                </div>
            </Box>



        </div>
      );
    
      const tab2Content = (
        <div style={{ padding: '10px', width: '100%' }}>
          <Box
            sx={{
                border: '2px solid #E0E0E0', // Light grey border
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}
            >
                <p>Content for Tab 2</p>
            </Box>
        </div>
      );
    
      const tab3Content = (
        <div style={{ padding: '10px', width: '100%' }}>
          <Box
            sx={{
                border: '2px solid #E0E0E0', // Light grey border
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}
            >
                <p>Content for Tab 3</p>
            </Box>
        </div>
      );

      const tab4Content = (
        <div style={{ padding: '10px', width: '100%' }}>
          <Box
            sx={{
                border: '2px solid #E0E0E0', // Light grey border
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}
            >
                <p>Content for Tab </p>
            </Box>
        </div>
      );
    
      // Create an array of content variables
      const tabContent = [tab1Content, tab2Content, tab3Content, tab4Content];
    
    return (
        <div style={{ display: 'flex', overflowX: 'hidden' }}>
          <AdminSidebar />
          {/* <div style={{ padding: '15px 25px 25px', width: 'calc(100% - 250px)' }}> */}
          <div style={{ marginLeft: '250px', padding: '20px', flex: '1', width: 'calc(100vw - 250px)', marginBottom: '50px', height:'100%', overflowX: 'hidden' }}>
            <BackTopBar />
            <Box sx={[{ mt: 3, display: "flex"  }]}>
              <ListHeaderRow />
            </Box>       
            <Box sx={[boxStyle, { mt: 0, alignItems: "center", display: "flex"  }]}>
                <div style={{paddingTop: '15px', width: '100%', overflowX: 'hidden'}}>
                    <VerticalTabContainer
                        tabNumber={4}
                        tabLabels={['User Profile', 'Ride History', 'Payment Information', 'Analytics']}
                        tabContent={tabContent}
                    />
                </div>
            </Box>
            
          </div>
        </div>
    )

    
}

export default DriverDetails
