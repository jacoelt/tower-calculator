import { useState } from 'react'
import './App.css'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import AttackUpgrades from './components/attack/AttackUpgrades'
import DefenseUpgrades from './components/defense/DefenseUpgrades'
import LabAndStartSetup from './components/lab_and_start_setup/LabAndStartSetup'

function App() {
  const [currentTab, setCurrentTab] = useState(0)

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
  }

  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <Typography variant="h4" gutterBottom>
        The Tower Mobile Idle Game: Upgrades calculator
      </Typography>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Attack Upgrades" />
            {/* <Tab label="Defense Upgrades" /> */}
            {/* <Tab label="Utility Upgrades" /> */}
            <Tab label="Lab and start setup" />
          </Tabs>
        </Box>
      </Box>

      {currentTab === 0 && <AttackUpgrades />}
      {/* {currentTab === 1 && <DefenseUpgrades />} */}
      {/* {currentTab === 2 && <UtilityUpgrades />} */}
      {currentTab === 1 && <LabAndStartSetup />}

      <Box sx={{ position: 'absolute', bottom: 12, width: '100%', textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          Data pulled from <a href="https://tower-workshop-calculator.netlify.app" target='_blank'>https://tower-workshop-calculator.netlify.app</a>
        </Typography>
      </Box>
    </Box>
  )
}

export default App
