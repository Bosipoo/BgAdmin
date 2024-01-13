import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import TopBar from '../../components/TopBar'
import { Box } from '@mui/material'
import LargeCard from '../../components/reuse/LargeCard'
import MediumCard from '../../components/reuse/MediumCard'
import SmallCard from '../../components/reuse/SmallCard'
import RidesList from './RidesList'
import SupportTickets from '../../components/SupportTickets'
import { Referrals, Riders, TripsCompleted} from '../../assets'

const Landing = () => {
  const boxStyle = {
    display:"grid",
    py:"52px",
    px:"40px"
  };
  const tableStyle = {
    px:"40px"
  };

  return (
    <div style={{ display: 'flex' }}>
      <AdminSidebar />
      {/* <div style={{ padding: '15px 25px 25px', width: 'calc(100% - 250px)' }}> */}
      <div style={{ marginLeft: '250px', padding: '20px', flex: '1' }}>
        <TopBar />
        <Box sx={[boxStyle, { mt: 0, alignItems: "center", display: "flex"  }]}>
          <LargeCard balance={"₦"+ "15,900"}/>
          <Box  sx={[boxStyle, { border:"0", py: 0.5, px: 3 }]}>
            <SmallCard icon={Referrals} number={"4,665"} text={"Drivers"} />
            <SmallCard topMargin={4} icon={Riders} number={"6,645"} text={"Riders"} />
          </Box>
          <Box sx={[boxStyle, { border:"0", py: 0.5, px: 3, ml:"-24px"}]}>
            <MediumCard icon={TripsCompleted} number={"5,498"} text={"Trips Completed"} />
            <MediumCard topMargin={4} icon={TripsCompleted} number={"5,498"} text={"Trips Completed"} />
          </Box>
        </Box>
        <Box sx={[tableStyle, { mt: 0, alignItems: "center", display: "flex"  }]} >
            <RidesList/>
        </Box>
        <Box ml={4} >
            <SupportTickets/>
           </Box>
      </div>
    </div>
  )
}

export default Landing
