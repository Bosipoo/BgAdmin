import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const tabPanelStyle = {
    padding: '20px', 
    width: '100%'
  };

const VerticalTabContainer = ({ tabNumber = 3, tabLabels = [], tabContent = [] }) => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const tabIndices = Array.from({ length: tabNumber }, (_, index) => index);

  return (
    <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%', borderRadius: '12px' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', width: '200px', height: '100vh' }}
          
        >
            {tabIndices.map((index) => (
                <Tab key={index} label={tabLabels[index] || `Item ${index + 1}`} {...a11yProps(index)} />
            ))}
        </Tabs>

        {tabIndices.map((index) => (
            <TabPanel key={index} value={value} index={index} style={tabPanelStyle}>
                {tabContent[index]}
            </TabPanel>
        ))}
      </Box>
  )
}

export default VerticalTabContainer
