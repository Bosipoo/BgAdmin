import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import TopBar from '../../components/TopBar'
import { Box } from '@mui/material'
import SmallCard from '../../components/reuse/SmallCard'
import HeaderRow from '../../components/reuse/HeaderRow'
import CreateForm from '../../components/CreateForm'
import { Referrals, Riders, TripsCompleted, WalletYelow} from '../../assets'
import { useStore } from 'zustand'
import { ModalStore } from '../../stores/ModalStores'
import MainLayout from '../../components/reuse/MainLayout'

const Drivers = () => {
  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const {createDriverModal,setCreateDriverModal } = useStore(ModalStore)
  const handleOpen = () => setCreateDriverModal(true);

  return (
    <div>
      <MainLayout>
      <div className="ml-250px flex-1 w-full max-w-screen-xl mx-auto mb-50 h-screen" style={{ paddingLeft: '5rem', paddingRight: '5rem', paddingTop: '1rem' }}>
        <TopBar />
        <div className="mt-3 flex">
          <HeaderRow linkText={"See Full List"} linkTo={"/driverList"} ButtonText={"Create Driver Account"} onClickCreate={handleOpen} />
        </div>
        <div className="mt-2 flex items-center">
          <div>
            <div className="flex flex-row">
              <div className="flex-grow p-1">
              <SmallCard icon={Referrals} number={"4,665"} text={"Registered Drvs"} />
              </div>
              <div className="flex-grow p-1">
                <SmallCard icon={Referrals} number={"4,665"} text={"Approved Drvs"} />
              </div>
              <div className="flex-grow p-1">
                <SmallCard icon={Referrals} number={"4,665"} text={"Active Drvs"} />
              </div>
              <div className="flex-grow p-1">
                <SmallCard icon={WalletYelow} number={"12,560,000"} text={"Paid Out"} />
              </div>
            </div>
            { createDriverModal && <CreateForm open={createDriverModal} />}
            <div className="flex flex-row">
              <div className="flex-grow p-1">
                <SmallCard icon={TripsCompleted} number={"4,665"} text={"Riders"} />
              </div>
              <div className="flex-grow p-1">
                <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
              </div>
              <div className="flex-grow p-1">
                <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
              </div>
              <div className="flex-grow p-1">
                <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </MainLayout>
    </div>

    // <div style={{ display: 'flex' }}>
    //   <AdminSidebar />
    //   {/* <div style={{ padding: '15px 25px 25px', width: 'calc(100% - 250px)' }}> */}
    //   <div style={{ marginLeft: '250px', padding: '20px', flex: '1', width: 'calc(100vw - 250px)', marginBottom: '50px', height:'100vh' }}>
    //     <TopBar />
    //     <Box sx={[{ mt: 3, display: "flex"  }]}>
    //       <HeaderRow linkText={"See Full List"} linkTo={"/driverList"} onClickCreate={handleOpen}/>
    //     </Box>       
    //     <Box sx={[boxStyle, { mt: 0, alignItems: "center", display: "flex"  }]}>
    //     <div>
    //       <Box display="flex" flexDirection="row">
    //         <Box flexGrow={1} p={1}>
    //           <SmallCard icon={Referrals} number={"4,665"} text={"Drivers"} />
    //         </Box>
    //         <Box flexGrow={1} p={1}>
    //           <SmallCard icon={Referrals} number={"4,665"} text={"Drivers"} />
    //         </Box>
    //         <Box flexGrow={1} p={1}>
    //           <SmallCard icon={Referrals} number={"4,665"} text={"Drivers"} />
    //         </Box>
    //         <Box flexGrow={1} p={1}>
    //           <SmallCard icon={Referrals} number={"4,665"} text={"Drivers"} />
    //         </Box>
    //       </Box>
    //       { createDriverModal && <CreateForm open={createDriverModal} />}
    //       <Box display="flex" flexDirection="row">
    //         <Box flexGrow={1} p={1}>
    //           <SmallCard icon={Referrals} number={"4,665"} text={"Drivers"} />
    //         </Box>
    //         <Box flexGrow={1} p={1}>
    //           <SmallCard icon={Referrals} number={"4,665"} text={"Drivers"} />
    //         </Box>
    //         <Box flexGrow={1} p={1}>
    //           <SmallCard icon={Referrals} number={"4,665"} text={"Drivers"} />
    //         </Box>
    //         <Box flexGrow={1} p={1}>
    //           <SmallCard icon={Referrals} number={"4,665"} text={"Drivers"} />
    //         </Box>
    //       </Box>
    //     </div>
    //     </Box>
        
    //   </div>
    // </div>
  )
}


export default Drivers
