import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../../components/reuse/MainLayout'
import TopBar from '../../components/TopBar'
import SmallCard from '../../components/reuse/SmallCard'
import HeaderRow from '../../components/reuse/HeaderRow'
import StatBox from '../../components/StatBox'
import { Link } from 'react-router-dom'
import { Car, TripsOutline, Drivers, TripsCompleted } from '../../assets'


const Vehicles = () => {
  // return (
  //   <Box mt={"36px"} ml={8} mr={5} >

  //     <Box display="flex" justifyContent="space-between" alignItems="center" mr={3} >
  //       <Box>

  //         <Link to="/VehicleList">
  //           <Typography component={Button} textTransform="initial" color="#000000" borderBottom={1} variant='h4' sx={{ paddingBottom: "2px" }}> See Full List </Typography></Link>
  //       </Box>

  //       <Box display="flex">
  //         <Typography variant='h5' fontWeight="bold" textTransform="initial" color="black" p={"12px"} borderRadius={"4px"} border={1} sx={{ backgroundColor: "#ffff" }} >Generate Report </Typography>
  //       </Box>
  //     </Box>
  //     <Box
  //       mt={"15px"}
  //       display="grid"
  //       gridTemplateColumns="repeat(4, 1fr)"
  //       gridAutoRows="140px"
  //       gap="20px">

  //       <StatBox icon={Car} statFigure="406" statTitle="Total Vehicles" all style={{ backgroundColor: "#FFE180" }} />
  //       <StatBox icon={Car} statFigure="100" statTitle="Saloon Cars" all style={{ backgroundColor: "#FFB4B4" }} />
  //       <StatBox icon={Car} statFigure="120" statTitle="SUVs" all style={{ backgroundColor: "#BDFFE3" }} />
  //       <StatBox icon={Car} statFigure="70" statTitle="Minibus " style={{ backgroundColor: "#CBB2FF" }} />
  //       <StatBox icon={Car} statFigure="70" statTitle="E-trikes " style={{ backgroundColor: "#CBB2FF" }} />
  //     </Box>
  //   </Box>
  // )

  return (
    <div>
      <MainLayout>
      <div className="ml-250px flex-1 w-full max-w-screen-xl mx-auto mb-50 h-screen" style={{ paddingLeft: '5rem', paddingRight: '5rem', paddingTop: '1rem' }}>
        <TopBar />
        <div className="mt-3 flex">
          <HeaderRow linkText={"See Full List"} linkTo={"/riderList"}/>
        </div>
        <div className="mt-2 flex items-center">
          <div>
            <div className="flex flex-row">
              <div className="flex-grow p-1">
                <SmallCard icon={TripsCompleted} number={"10"} text={"Trips Completed"} textSize={10.9} buttonText={"See all"} buttonUrl={"#"}/>
              </div>
              <div className="flex-grow p-1">
              <SmallCard icon={TripsCompleted} number={"30"} text={"On-going Trips"} textSize={10.9} buttonText={"See all"} buttonUrl={"#"}/>
              </div>
              <div className="flex-grow p-1">
              <SmallCard icon={TripsCompleted} number={"70"} text={"Scheduled Trips"} textSize={10.9} buttonText={"See all"} buttonUrl={"#"}/>
              </div>
              <div className="flex-grow p-1">
                <SmallCard icon={Drivers} number={"50km"} text={"Avg Trip Distance"} textSize={10.9} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </MainLayout>
    </div>
  )
}

export default Vehicles