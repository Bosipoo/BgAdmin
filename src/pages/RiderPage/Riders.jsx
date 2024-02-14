import React from 'react'
import TopBar from '../../components/TopBar'
import SmallCard from '../../components/reuse/SmallCard'
import HeaderRow from '../../components/reuse/HeaderRow'
import CreateRideForm from '../../components/CreateRideForm'
import { Referrals, TripsCompleted} from '../../assets'
import { useStore } from 'zustand'
import { ModalStore } from '../../stores/ModalStores'
import MainLayout from '../../components/reuse/MainLayout'


const RidersPage = () => {
  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const {createRiderModal,setCreateRiderModal } = useStore(ModalStore)
  const handleOpen = () => setCreateRiderModal(true);

  return (
    <div>
      <MainLayout>
      <div className="ml-250px flex-1 w-full max-w-screen-xl mx-auto mb-50 h-screen" style={{ paddingLeft: '5rem', paddingRight: '5rem', paddingTop: '1rem' }}>
        <TopBar />
        <div className="mt-3 flex">
          <HeaderRow linkText={"See Full List"} linkTo={"/riderList"} ButtonText={"Create Rider Account"} onClickCreate={handleOpen} />
        </div>
        <div className="mt-2 flex items-center">
          <div>
            <div className="flex flex-row">
              <div className="flex-grow p-1">
                <SmallCard icon={Referrals} number={"4,665"} text={"Riders"} />
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
            {createRiderModal && <CreateRideForm open={createRiderModal} />}
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
  )
}


export default RidersPage
