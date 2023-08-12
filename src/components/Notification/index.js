import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  console.log('Notify')
  const {children} = props

  return (
    <div className="notify-item">
      <div>{children}</div>
      <GrFormClose className="cross" />
    </div>
  )
}

export default Notification
