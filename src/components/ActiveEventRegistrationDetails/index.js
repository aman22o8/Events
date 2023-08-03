// Write your code here
import './index.css'
import {Component} from 'react'

class ActiveEventRegistrationDetails extends Component {
  state = {initial: ''}

  initialRequest = () => (
    <p className="initial_req">
      Click on an event, to view its registration details
    </p>
  )

  yettoregister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetto"
      />
      <p className="yettodesc">
        A live performance brings so much to your relationship with dance
      </p>
      <button className="btn" type="button">
        Register Here
      </button>
    </div>
  )

  registrationcolsed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yetto"
      />
      <h1 className="closed_heading">Registrations Are Closed Now!</h1>
      <p className="yettodesc">Stay tuned. We will reopen</p>
    </div>
  )

  alreadyregistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="tick"
      />
      <h1 className="alreadydesc">You have already registered for the event</h1>
    </div>
  )

  render() {
    const {initial} = this.state
    const {myactive} = this.props
    console.log(initial, myactive)
    switch (myactive) {
      case 'REGISTRATIONS_CLOSED':
        return <div>{this.registrationcolsed()}</div>
      case 'REGISTERED':
        return <div>{this.alreadyregistered()}</div>
      case 'YET_TO_REGISTER':
        return <div>{this.yettoregister()}</div>
      default:
        return <div>{this.initialRequest()}</div>
    }
  }
}

export default ActiveEventRegistrationDetails
