import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from '@material-ui/icons/Work'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="August 2018" iconStyle={{background: '#3e497a', color: '#fff'}} icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Gettysburg College, Gettysburg, Pennsylvania</h3>
          <p>Began attending Gettysburg College.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="June 2019 - August 2019" iconStyle={{background: '#3e497a', color: '#fff'}} icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>Summer Intern (Technology Support) at Asturian Group, Inc.</h3>
          <p>
            Responsible for compilation of bid packages and electronic distribution
            to subcontractors and vendors for pricing for federal/military
            construction projects using Procore. Itemized take-offs using Bluebeam
            Software. Also worked with Visual Basic and Excel to automate the
            filling out of forms.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="June 2020 - August 2020" iconStyle={{background: '#3e497a', color: '#fff'}} icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>Summer Intern (Technology Support) at Asturian Group, Inc.</h3>
          <p>
            Supported creation of vendor database for integration into Procore
            (Relational Database), a construction project management and
            estimating software. Wrote macros for database import into Procore
            contact management module.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="August 2021 - November" iconStyle={{background: '#3e497a', color: '#fff'}} icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>Software Development Engineer (Student Position) at Affordable</h3>
          <p>
            Updated a Selenium web browser plugin to support new inputs from
            the user. Used AWS to setup an orchestration server. This included
            creating an API and using API Gateway to trigger Lambda functions
            which would then pull the requested data from the database. The
            requested data (user info and selenium script) would then be used to
            automatically fill out healthcare applications on websites.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="May 2022" iconStyle={{background: '#3e497a', color: '#fff'}} icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Gettysburg College, Gettysburg, Pennsylvania</h3>
          <p>Graduated from Gettysburg College with a Bachelor of Science in Computer Science.  While attending Gettysburg College I was also on the football team and a member of the Alpha Tau Omega Fraternity.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience