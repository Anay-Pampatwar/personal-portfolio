import React from 'react'
import './Portfolio.scss'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import CodeIcon from '@mui/icons-material/Code'
import { Typography } from '@mui/material'

//resume = portfolio
export default function Portfolio() {
  const [value, setValue] = useState('1')
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <div className="portfolio" id="portfolio">
      <br></br>
      <h1>Resume</h1>
      <ul>
        {/* Featured\/ */}
        {/* ///////////// */}
        <Box sx={{ width: '100%' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="Resume"
                textColor="secondary"
                indicatorColor="secondary"
                centered
                variant="fullWidth"
                scrollButtons="auto"
              >
                <Tab
                  //icon={<FavoriteIcon />}
                  iconPosition="top"
                  label="Education"
                  value="1"
                  icon={<SchoolIcon />}
                />
                <Tab
                  label="Experience"
                  iconPosition="top"
                  value="2"
                  icon={<BusinessCenterIcon />}
                />
                <Tab
                  label="Projects"
                  iconPosition="top"
                  value="3"
                  icon={<AccountTreeIcon />}
                />
                <Tab
                  label="Certifications"
                  iconPosition="top"
                  value="4"
                  icon={<WorkspacePremiumIcon />}
                />
                <Tab
                  label="Skills"
                  iconPosition="top"
                  value="5"
                  icon={<CodeIcon />}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="item">
                <h3>
                  <SchoolIcon /> Education
                  <hr
                    style={{
                      color: 'aliceblue',
                      backgroundColor: 'aliceblue',
                      height: 1,
                    }}
                  />
                  <br />
                  {/* <h4>Masters in Software Engineering Systems</h4> */}
                  <h4 >Northeastern University, Boston, MA </h4>
                  <br />
                  <h4 className='expected'>Expected May 2024</h4>
                  <br/>
                  <h4 className="univ"><b>Master of Science in Software Engineering Systems</b></h4>
                  <br />
                  <h4>Relevant Coursework:</h4>
                  <br/>
                  <h4>Web Design and User Experience Engineering, </h4>
                  <br/>
                    <h4>Concepts of object-oriented design</h4>
                </h3>

                <img src="https://thumbs.dreamstime.com/b/northeastern-university-boston-massachusetts-private-research-established-127076883.jpg"></img>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="item">
                <h3>Professional Experience
                <hr
                    style={{
                      color: 'aliceblue',
                      backgroundColor: 'aliceblue',
                      height: 1,
                    }}
                  />
                  <br/>
                  <h4>Infosys Limited Pune India</h4>
                  </h3>
                  
                <img src="https://thumbs.dreamstime.com/b/northeastern-university-boston-massachusetts-private-research-established-127076883.jpg"></img>
              </div>
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Four</TabPanel>
            <TabPanel value="5">Item Five</TabPanel>
          </TabContext>
        </Box>
      </ul>
    </div>
  )
}
