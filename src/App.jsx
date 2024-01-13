import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Dashboard/Landing"
import DriverPage from "./pages/DriverPage/Drivers"
import DriverList from "./pages/DriverPage/DriverList" 
import DriverDetails from "./pages/DriverPage/DriverDetails"
import RiderPage from "./pages/RiderPage/Riders"

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
              
    </Routes>
);
}

export default App
