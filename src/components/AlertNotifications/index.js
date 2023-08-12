import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="notifications-card">
          <h1>Alert Notifications</h1>
          <Notification>
            <div className="notification-card">
              <div className="logo">
                <AiFillCheckCircle className="icon1" />
              </div>
              <div>
                <h2 className="success">Success</h2>
                <p>You can access all the files in the folders</p>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="notification-card">
              <div className="logo">
                <RiErrorWarningFill className="icon2" />
              </div>
              <div>
                <h2 className="error">Error</h2>
                <p>
                  Sorry, you are not authorized to have access to delete the
                  file
                </p>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="notification-card">
              <div className="logo">
                <MdWarning className="icon3" />
              </div>
              <div>
                <h2 className="warning">Warning</h2>
                <p>Viewers of this file can see comments and suggestions</p>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="notification-card">
              <div className="logo">
                <MdInfo className="icon4" />
              </div>
              <div>
                <h2 className="info">Info</h2>
                <p>Anyone on the internet can view these files</p>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    )
  }
}
export default AlertNotifications
