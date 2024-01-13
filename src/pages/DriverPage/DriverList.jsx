import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import TopBar from '../../components/TopBar'
import BackTopBar from '../../components/reuse/BackTopBar'
import { Box } from '@mui/material'
import SmallCard from '../../components/reuse/SmallCard'
import ListHeaderRow from '../../components/reuse/ListHeaderRow'
import { Referrals, Riders, TripsCompleted} from '../../assets'
import DriverListTable from "../../components/DriverListTable"

const DriverList = () => {
  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={{ display: 'flex' }}>
      <AdminSidebar />
      {/* <div style={{ padding: '15px 25px 25px', width: 'calc(100% - 250px)' }}> */}
      <div style={{ marginLeft: '250px', padding: '20px', flex: '1', width: 'calc(100vw - 250px)', marginBottom: '50px', height:'100%' }}>
        <BackTopBar url="/driverDetails" />
        <Box sx={[{ mt: 3, display: "flex"  }]}>
          <ListHeaderRow />
        </Box>       
        <Box sx={[boxStyle, { mt: 0, alignItems: "center", display: "flex"  }]}>
            <DriverListTable />
        </Box>
        
      </div>
    </div>
  )
}

export default DriverList
