import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import TopBar from '../../components/TopBar'
import { Box } from '@mui/material'
import SmallCard from '../../components/reuse/SmallCard'
import HeaderRow from '../../components/reuse/HeaderRow'
import CreateForm from '../../components/CreateForm'
import { Referrals, TripsCompleted} from '../../assets'
import { useStore } from 'zustand'
import { ModalStore } from '../../stores/ModalStores'

const RidersPage = () => {
  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const {createRiderModal,setCreateRiderModal } = useStore(ModalStore)
  const handleOpen = () => setCreateRiderModal(true);

  return (
    <div style={{ display: 'flex' }}>
      <AdminSidebar />
      {/* <div style={{ padding: '15px 25px 25px', width: 'calc(100% - 250px)' }}> */}
      <div style={{ marginLeft: '250px', padding: '20px', flex: '1', width: 'calc(100vw - 250px)', marginBottom: '50px', height:'100vh' }}>
        <TopBar />
        <Box sx={[{ mt: 3, display: "flex"  }]}>
          <HeaderRow linkText={"See Full List"} linkTo={"/driverList"} onClickCreate={handleOpen}/>
        </Box>       
        <Box sx={[boxStyle, { mt: 0, alignItems: "center", display: "flex"  }]}>
        <div>
          <Box display="flex" flexDirection="row">
            <Box flexGrow={1} p={1}>
              <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
            </Box>
            <Box flexGrow={1} p={1}>
              <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
            </Box>
            <Box flexGrow={1} p={1}>
              <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
            </Box>
            <Box flexGrow={1} p={1}>
              <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
            </Box>
          </Box>
          { createRiderModal && <CreateForm open={createRiderModal} />}
          <Box display="flex" flexDirection="row">
            <Box flexGrow={1} p={1}>
              <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
            </Box>
            <Box flexGrow={1} p={1}>
              <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
            </Box>
            <Box flexGrow={1} p={1}>
              <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
            </Box>
            <Box flexGrow={1} p={1}>
              <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
            </Box>
          </Box>
        </div>
        </Box>
        
      </div>
    </div>
  )
}


export default RidersPage
