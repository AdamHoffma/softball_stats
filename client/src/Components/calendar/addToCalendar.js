import React, { useState } from 'react'
import {addEvent} from "../../redux/actions.js"
import { connect } from 'react-redux'



const AddToCalendar = props => {
    const [newEvent, setNewEvent] = useState({})  
    

    const changeHandler = event => {
        setNewEvent({...newEvent, [event.target.name]: event.target.value})
    }

    const postEvent = () => {
        props.addEvent(newEvent)
        window.reload()
    }

    return (
        <div className="addeventouterbody">
            <div className="addeventinnerboyd">
                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={newEvent.name}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={newEvent.location}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="Time"
                        name="time"
                        value={newEvent.time}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="Arrival"
                        name="arrival"
                        value={newEvent.arrival}
                        onChange={changeHandler}
                    />
                     <input
                        type="text"
                        placeholder="YYYY, M, D"
                        name="date"
                        value={newEvent.date}
                        onChange={changeHandler}
                    />
                    <button className="eventbutton" onClick={postEvent}>Submit</button>
                </form>
            </div>            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, {addEvent})(AddToCalendar)