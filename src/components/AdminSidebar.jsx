import React from 'react'
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
  return (
    <div style={{ display: "flex" }}>
      <Sidebar className="sidebar" style={{ height: "100vh", position: 'fixed' }}> 
        <Menu>
          <MenuItem style={{margin: "2rem" }}>
            <img src={Logo} alt="Logo" />
          </MenuItem>
          <MenuItem icon={<img src={Home} alt="Home" className="blackOutline"/>}> <Link to="/">Home</Link> </MenuItem>
          <SubMenu icon={<img src={User} alt="User" className="blackIcon"/>} label="User">
            <MenuItem><Link to="/drivers">Driver</Link></MenuItem>
            <MenuItem><Link to="/riders">Rider</Link></MenuItem>
          </SubMenu>
          <MenuItem icon={<img src={Trip} alt="Trip" className="blackIcon"/>}> Trips </MenuItem>
          <MenuItem icon={<img src={Vehicle} alt="Vehicle" className="blackIcon"/>}> Vehicles </MenuItem>
          <MenuItem icon={<img src={Wallet} alt="Wallet" className="blackIcon"/>}> Payment </MenuItem>
          <MenuItem icon={<img src={Badge} alt="Badge" className="blackIcon"/>}> Ambassadors </MenuItem>
          <MenuItem icon={<img src={Invest} alt="Invest" className="blackIcon"/>}> Investors </MenuItem>
          <MenuItem icon={<img src={School} alt="School" className="blackIcon"/>}> Schools </MenuItem>
          <MenuItem icon={<img src={Settings} alt="Settings" className="blackIcon"/>}> Settings </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default AdminSidebar
