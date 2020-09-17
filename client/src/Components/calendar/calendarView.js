import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEventById } from "../../redux/actions.js"
import "./calendarview.css"
import { getYear } from 'date-fns'

const CalendarView = (props, {getEventById, scheduled}) => {
    useEffect(() => {
        props.getEventById(props.match.params.id)
    }, [getEventById])

    const timeStamp = new Date(props.scheduled.date)
    console.log("TIMESTAMP", timeStamp)
    var weekday = new Array(7)
    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"
    const month = timeStamp.getMonth()
    const dayOfWeek = weekday[timeStamp.getDay()]
    const day = timeStamp.getDay()
    const year = getYear(timeStamp)
    console.log("DAY", day)
    console.log("EVENT", props.scheduled)

    return (
        <div className="expandedouterbody">
            <div className="expandedinnerbody">
                <div className="eventdetailscontainer">
                    <h1 className="date">Day: {dayOfWeek}</h1>
                    <h1 className="date">Date: {month} / {day} / {year}</h1>
                    <div className="textcontainer">
                        <p className="eventheading">Event Type: <span className="eventdetails">{props.scheduled.name}</span></p>                            
                        <p className="eventheading">Location: <span className="eventdetails">{props.scheduled.location}</span></p>                            
                        <p className="eventheading">Arrive At Field: <span className="eventdetails">{props.scheduled.arrival}</span></p>    
                        <p className="eventheading">Start Time: <span className="eventdetails">{props.scheduled.time}</span></p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        scheduled: state.events
    }
}

export default connect(mapStateToProps, {getEventById})(CalendarView)