import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Dashboard/Landing"
import DriverPage from "./pages/DriverPage/Drivers"
import DriverList from "./pages/DriverPage/DriverList" 
import DriverDetails from "./pages/DriverPage/DriverDetails"
import RiderPage from "./pages/RiderPage/Riders"
import RiderList from "./pages/RiderPage/RiderList"
import Trips from "./pages/Trips/index"
import Vehicles from "./pages/Vehicles/index"
import Payments from "./pages/Payments/index"
import Settings from "./pages/Settings/index"

function App() {
  return (
  // <ColorModeContext.Provider value={colorMode}>
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline />
  //     <div className="app">
  //       {matches ? <AmbassadorSideBar /> : null}
  //       <main className="content">
  //         {!matches ? <MobileMenu /> : <TopBar />}
  //         <Routes>
  //           <Route path="/" element={<AmbasaddorDashboard/>} />
  //         </Routes>
  //       </main>
  //     </div>
  //   </ThemeProvider>
  // </ColorModeContext.Provider>
    <Routes>
      <Route path="/" element={<Landing />} /> 
      <Route path="/drivers" element={<DriverPage />} />
      <Route path="/driverList" element={<DriverList />} />
      <Route path="/driverDetails" element={<DriverDetails />} />     
      <Route path="/riders" element={<RiderPage />} />
      <Route path="/riderList" element={<RiderList />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/settings" element={<Settings />} />
              
    </Routes>
);
}

export default App
