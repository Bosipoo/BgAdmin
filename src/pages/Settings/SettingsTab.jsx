import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import General from './General';
import UserPermissions from './UserPermissions';
import CompanyDetails from './CompanyDetails';
import TeamInformation from './TeamInformation';
import TabbedContainer from '../../components/reuse/TabbedContainer';


  

function SettingsTab() {


  const tabs = [
    { name: 'General', content: <General /> },
    { name: 'User Permissions', content: <UserPermissions /> },
    { name: 'Company Details', content: <CompanyDetails /> },
    { name: 'Team Information', content: <TeamInformation /> },
  ];

  return (
    <div className="p-4">
      <TabbedContainer tabs={tabs} />
    </div>
  );
}

export default SettingsTab;
