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
import MainLayout from '../../components/reuse/MainLayout'


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
    <div>
      <MainLayout>
        <div className="">
          <div className="ml-250px p-4 flex-1">
            <TopBar />
            <div className="mt-4 flex h-full">
            <div className="flex-1">
              <Box sx={[boxStyle, { border: "0", py: 0.5, px: 3 }]}>
                <LargeCard balance={"₦" + "15,900"} />
              </Box>
            </div>

              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <Box sx={[boxStyle, { border: "0", py: 0.5, px: 3 }]}>
                    <SmallCard icon={Referrals} number={"4,665"} text={"Drivers"} buttonText={"See Details"} buttonUrl={"#"}/>
                    <SmallCard topMargin={4} icon={Riders} number={"6,645"} text={"Riders"} />
                  </Box>
                </div>
              </div>

              <div className="flex flex-col h-full ml-4 flex-2">
                <div className="flex-1">
                  <Box sx={[boxStyle, { border: "0", py: 0.5, px: 3 }]}>
                    <MediumCard icon={TripsCompleted} number={"5,498"} text={"Trips Completed"} />
                    <MediumCard topMargin={4} icon={TripsCompleted} number={"5,498"} text={"Trips Completed"} />
                  </Box>
                </div>
              </div>
                
              
            </div>
          </div>
        </div>

      </MainLayout>
    </div>
  )
      {/* <AdminSidebar /> */}
      {/* <div style={{ padding: '15px 25px 25px', width: 'calc(100% - 250px)' }}> */}
      {/* <div style={{ marginLeft: '250px', padding: '20px', flex: '1' }}>
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
      </div> */}
  
}

export default Landing
