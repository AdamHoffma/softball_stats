import React, {useEffect, useState} from 'react'
import {addEvent} from "../../redux/actions.js"
import { connect } from 'react-redux'
import axios from "axios"


const AddToCalendar = props => {
    const [newEvent, setNewEvent] = useState({})

    useEffect(() => {
        axios.get("http://localhost:5000/api/schedule")
        .then(res => {
            setNewEvent(res.data)
        })
    }, [])
    console.log(newEvent)
    

    const changeHandler = event => {
        setNewEvent({[event.target.name]: event.target.value})
    }

    const postEvent = () => {
        props.addEvent(newEvent)
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
                        name="locations"
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