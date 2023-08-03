// Write your code here
import './index.css'

const EventItem = props => {
  const {eachitem, currentactive} = props
  const {imageUrl, name, location, registrationStatus} = eachitem
  console.log(registrationStatus)
  const clickingevent = () => {
    currentactive(registrationStatus)
  }

  return (
    <li className="liste_container">
      <button onClick={clickingevent} type="button" className="mybutton">
        <img src={imageUrl} alt="event" className="image1" />
        <p className="name_event">{name}</p>
        <p className="location_event">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
