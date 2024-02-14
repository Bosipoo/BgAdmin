import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
import Logo from "../assets/logo.png"
import Home from "../assets/icons/AHome.svg"
import User from "../assets/icons/userBlack.svg"
import Trip from "../assets/icons/tripsBlack.svg"
import Vehicle from "../assets/icons/vehicleUnselected.svg"
import Wallet from "../assets/icons/Wallet.svg"
import Badge from "../assets/icons/ambassador.svg"
import Invest from "../assets/icons/investor.svg"
import School from "../assets/icons/school.svg"
import Settings from "../assets/icons/Setting.svg"

const AdminSidebar = () => {
  const [isUserCollapsed, setUserCollapsed] = useState(false);
  // return (
  //   // <div style={{ display: "flex" }}>
  //     <Sidebar className="sidebar" style={{ height: "100vh", position: 'fixed' }}> 
  //       <Menu>
  //         <MenuItem style={{margin: "2rem" }}>
  //           <img src={Logo} alt="Logo" />
  //         </MenuItem>
  //         <MenuItem icon={<img src={Home} alt="Home" className="blackOutline"/>}> <Link to="/">Home</Link> </MenuItem>
  //         <SubMenu icon={<img src={User} alt="User" className="blackIcon"/>} label="User">
  //           <MenuItem><Link to="/drivers">Driver</Link></MenuItem>
  //           <MenuItem><Link to="/riders">Rider</Link></MenuItem>
  //         </SubMenu>
  //         <MenuItem icon={<img src={Trip} alt="Trip" className="blackIcon"/>}> Trips </MenuItem>
  //         <MenuItem icon={<img src={Vehicle} alt="Vehicle" className="blackIcon"/>}> Vehicles </MenuItem>
  //         <MenuItem icon={<img src={Wallet} alt="Wallet" className="blackIcon"/>}> Payment </MenuItem>
  //         <MenuItem icon={<img src={Badge} alt="Badge" className="blackIcon"/>}> Ambassadors </MenuItem>
  //         <MenuItem icon={<img src={Invest} alt="Invest" className="blackIcon"/>}> Investors </MenuItem>
  //         <MenuItem icon={<img src={School} alt="School" className="blackIcon"/>}> Schools </MenuItem>
  //         <MenuItem icon={<img src={Settings} alt="Settings" className="blackIcon"/>}> Settings </MenuItem>
  //       </Menu>
  //     </Sidebar>
  //   // </div>
  // )

  return (
    //<div className="flex">
      <div className="h-screen bg-yellow-400 text-black p-4 w-64 hidden md:block">
        <div className="mb-8">
          <img src={Logo} alt="Logo" className="h-16 mx-auto" />
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/" className="flex items-center text-lg text-black hover:text-gray-400">
                <img src={Home} alt="Home" className="mr-2 w-4 h-4" />
                Home
              </Link>
            </li>
            <li className="mb-4">
              <div
                className="flex items-center cursor-pointer text-lg"
                onClick={() => setUserCollapsed(!isUserCollapsed)}
              >
                <img src={User} alt="User" className="mr-2 w-4 h-4" />
                User
              </div>
              <ul
                className={`ml-8 ${isUserCollapsed ? 'hidden' : 'block transition-all ease-in-out duration-300'}`}
              >
                <li>
                  <Link to="/drivers" className="text-black hover:text-gray-400">Driver</Link>
                </li>
                <li>
                  <Link to="/riders" className="text-black hover:text-gray-400">Rider</Link>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <Link to="/trips" className="flex items-center text-lg text-black hover:text-gray-400">
                  <img src={Trip} alt="Trip" className="mr-2 w-4 h-4" />
                  Trips
                </Link>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <Link to="/vehicles" className="flex items-center text-lg text-black hover:text-gray-400">
                  <img src={Vehicle} alt="Vehicle" className="mr-2 w-4 h-4" />
                  Vehicles
                </Link>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <Link to="/payments" className="flex items-center text-lg text-black hover:text-gray-400">
                <img src={Wallet} alt="Wallet" className="mr-2 w-4 h-4" />
                Payment
                </Link>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center text-lg">
                <img src={Badge} alt="Badge" className="mr-2 w-4 h-4" />
                Ambassadors
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center text-lg">
                <img src={Invest} alt="Invest" className="mr-2 w-4 h-4" />
                Investors
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center text-lg">
                <img src={School} alt="School" className="mr-2 w-4 h-4" />
                Schools
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center text-lg">
                <img src={Settings} alt="Settings" className="mr-2 w-4 h-4" />
                Settings
              </div>
            </li>
          </ul>
        </nav>
      </div>
    //</div>
  );
}

export default AdminSidebar
