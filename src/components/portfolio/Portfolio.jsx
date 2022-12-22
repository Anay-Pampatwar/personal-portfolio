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
import ThreePIcon from '@mui/icons-material/ThreeP'
import { Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

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
                textColor="primary"
                indicatorColor="primary"
                centered
                variant="fullWidth"
                scrollButtons="auto"
              >
                <Tab
                  //icon={<FavoriteIcon />}
                  iconPosition="top"
                  label="About"
                  value="1"
                  icon={<ThreePIcon />}
                />
                <Tab
                  //icon={<FavoriteIcon />}
                  iconPosition="top"
                  label="Education"
                  value="2"
                  icon={<SchoolIcon />}
                />
                <Tab
                  label="Experience"
                  iconPosition="top"
                  value="3"
                  icon={<BusinessCenterIcon />}
                />
                <Tab
                  label="Projects"
                  iconPosition="top"
                  value="4"
                  icon={<AccountTreeIcon />}
                />
                <Tab
                  label="Certification"
                  iconPosition="top"
                  value="5"
                  icon={<WorkspacePremiumIcon />}
                />
                <Tab
                  label="Skills"
                  iconPosition="top"
                  value="6"
                  icon={<CodeIcon />}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="item">
                <h3>
                  <ThreePIcon /> A little about me...
                  <hr
                    style={{
                      color: 'aliceblue',
                      backgroundColor: 'aliceblue',
                      height: 1,
                    }}
                  />
                  <br />
                  <h4>
                    Hi! I am a graduate student at Northeastern University
                    majoring in Software Engineering Systems. I am a passionate
                    web developer with a focus on the MERN stack. I am an AWS
                    Certified Solution Architect Associate and my goal through
                    my masters is to make a career in the domain of cloud
                    computing. Essentially in Distributed Systems and creating
                    Infrastructures with technologies like Kubernetes and
                    Terraform.
                  </h4>
                  <br />
                  <br />
                </h3>

                <img src="https://raw.githubusercontent.com/Anay-Pampatwar/Anay-Pampatwar/main/github.jpg"></img>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="item">
                <h3>
                  <SchoolIcon /> My Education
                  <hr
                    style={{
                      color: 'aliceblue',
                      backgroundColor: 'aliceblue',
                      height: 1,
                    }}
                  />
                  <br />
                  {/* <h4>Masters in Software Engineering Systems</h4> */}
                  <h4>Northeastern University, Boston, MA </h4>
                  <br />
                  <h4 className="expected">Expected May 2024</h4>
                  <br />
                  <h4 className="univ">
                    <b>Master of Science in Software Engineering Systems</b>
                  </h4>
                  <br />
                  <h4>Relevant Coursework:</h4>
                  <br />
                  <h4>Web Design and User Experience Engineering, </h4>
                  <br />
                  <h4>Concepts of object-oriented design</h4>
                </h3>

                <img src="https://thumbs.dreamstime.com/b/northeastern-university-boston-massachusetts-private-research-established-127076883.jpg"></img>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="item">
                <h3>
                  <BusinessCenterIcon /> Work Experience
                  <hr
                    style={{
                      color: 'aliceblue',
                      backgroundColor: 'aliceblue',
                      height: 1,
                    }}
                  />
                  <br />
                  <h4>
                    <span className='expected'>Infosys Limited, India - Sept 2019 to Sept 2022 - Cloud Solution Architect</span> <br/>
                    •Provided daily cloud support & maintained client’s cloud
                    infrastructure consisting of 50+ services spread across 7
                    AWS accounts and 3 regions 
                    <br/>• Innovated CloudFormation
                    templates to provision EC2 instances, RDS, CloudWatch
                    alarms, IAM users and roles using parameters, mappings,
                    resources, outputs <br/>• Regulated and maintained 20+ EC2
                    servers along with managing the user provisioning, group
                    provisioning, user ownership of 25 users and changing file
                    permissions on OS level on these servers <br/>• Managed the
                    access of AWS services using IAM. Restricting the users by
                    providing the minimum access to AWS services with the help
                    of User groups 
                  </h4>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </h3>

                <img src="https://i0.wp.com/boldblushblog.com/wp-content/uploads/2018/01/img_20171231_154252-01.jpeg?ssl=1"></img>
              </div>
            </TabPanel>
            
            <TabPanel value="4">
              <div className="item">
                <h3>
                  <AccountTreeIcon /> Projects I am working on
                  <hr
                    style={{
                      color: 'aliceblue',
                      backgroundColor: 'aliceblue',
                      height: 1,
                    }}
                  />
                  <br />
                  <h4>
                    Stocks Portfolio Management MERN Web App.
                    <br/> Live: <a target="_blank" href='https://stocktradeportfolio.netlify.app/'>https://stocktradeportfolio.netlify.app/ <LinkIcon/></a>
                    <br/>
                    <a target="_blank" href='https://github.com/Anay-Pampatwar/Stocks-Portfolio-Manager-React-App'><GitHubIcon/></a>
                    <br/>
                    <br/>
                    Recipe Suggestor And Meal Planner JavaFX Application
                    <a target="_blank" href='https://github.com/Anay-Pampatwar/cerealkillers/tree/master'><GitHubIcon/></a>
                  </h4>
                  
                  <br />
                  <br />
                </h3>

                <img src="https://thumbs.dreamstime.com/b/northeastern-university-boston-massachusetts-private-research-established-127076883.jpg"></img>
              </div>
            </TabPanel>

            <TabPanel value="5"><div className="item">
                <h3>
                  <WorkspacePremiumIcon /> My Certification
                  <hr
                    style={{
                      color: 'aliceblue',
                      backgroundColor: 'aliceblue',
                      height: 1,
                    }}
                  />
                  <br/>
                  AWS Certified Solution Architect Associte
                  <h4>Validation Number: GQJP516JBEV11QGF<br/> View my certification here<a target="_blank" href='https://www.linkedin.com/posts/anay-pampatwar28_aws-certificate-activity-6830679042228854784-sqgc?utm_source=share&utm_medium=member_desktop'><LinkIcon/></a></h4>
                </h3>

                <img src="https://thumbs.dreamstime.com/b/northeastern-university-boston-massachusetts-private-research-established-127076883.jpg"></img>
              </div></TabPanel>
            <TabPanel value="6">Item Five</TabPanel>
          </TabContext>
        </Box>
      </ul>
    </div>
  )
}
