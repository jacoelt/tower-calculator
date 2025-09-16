import { useState } from 'react'
import './App.css'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import AttackUpgrades from './components/AttackUpgrades'
import DefenseUpgrades from './components/DefenseUpgrades'
import UtilityUpgrades from './components/UtilityUpgrades'
import LabAndStartSetup from './components/LabAndStartSetup'

function App() {
  const [currentTab, setCurrentTab] = useState(3)

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
  }

  return (
    <Box sx={{ p: 2, height: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        The Tower Mobile Idle Game: Upgrades calculator
      </Typography>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Attack Upgrades" />
            <Tab label="Defense Upgrades" />
            <Tab label="Utility Upgrades" />
            <Tab label="Lab and start setup" />
          </Tabs>
        </Box>
      </Box>

      {currentTab === 0 && <AttackUpgrades />}
      {currentTab === 1 && <DefenseUpgrades />}
      {currentTab === 2 && <UtilityUpgrades />}
      {currentTab === 3 && <LabAndStartSetup />}
    </Box >
  )
}

export default App
