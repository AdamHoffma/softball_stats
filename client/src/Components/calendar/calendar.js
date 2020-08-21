import React, {useState, useEffect} from 'react'   
import "./calendar.css" 
import  * as dateFns from "date-fns"
import {getEvent} from "../../redux/actions.js"
import { connect } from 'react-redux'
import addToCalendar from './addToCalendar'

const events = [{ title: "Today", date: new Date() }]

const Calendar = props => {
const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date()
})

useEffect(() => {
    props.getEvent()
}, [])

console.log("scheduled", props.scheduled)

const [schedule, setSchedule] = useState({
    name: "appointment"
})
const test = new Date(2020, 0, 22)

console.log('tis', test.getDate())

console.log("Test", test)
useEffect(() => {
    props.getEvent()
}, [])

// console.log("events", props.scheduled)
// const test = dateFns.format(props.getEvent.date, 'MMMM dddd yyyy')
// console.log('test', test)
// console.log("date", new Date())

const renderHeader = () => {
    const dateFormat = "MMMM yyyy"

    return (
        <div className="header row flex-middle">
            <div className="col col-start">
                <div className="icon" onClick={prevMonth}>
                    chevron_left
                </div>
            </div>
            <div className="col col-center">
                <span>
                    {dateFns.format(state.currentMonth, dateFormat)}
                </span>
            </div>
            <div className="col col-end" onClick={nextMonth}>
                <div className="icon">chevron_right</div>
            </div>
        </div>
    )
}
const renderDays = () => {
    const dateFormat = "E"
    const days = []

    let startDate = dateFns.startOfWeek(state.currentMonth)

    for (let i = 0; i < 7; i++){
        days.push(
            <div className="col col-center" key={i}>
                {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </div>
        )
    }
    return <div className="days row">{days}</div>
}

const renderCells = () => {
    const {currentMonth, selectedDate} = state
    const monthStart = dateFns.startOfMonth(currentMonth)
    const monthEnd = dateFns.endOfMonth(monthStart)
    const startDate = dateFns.startOfWeek(monthStart)
    const endDate = dateFns.endOfWeek(monthEnd)

    const dateFormat = "d"
    const rows = []

    let days = []
    let day = startDate
    let formattedDate = ""

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, dateFormat)
            const cloneDay = day            
            days.push(
                <div
                    className={`col cell ${
                        !dateFns.isSameMonth(day, monthStart)
                            ? "disabled"
                            : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                    }`}
                    key={day}
                    onClick={() => onDateClick(cloneDay)}
                >
                    <span className="number">{formattedDate}</span>
                    <span className="bg">{formattedDate}</span>
                    {props.scheduled.map(e => {
                        const timeStamp = new Date(e.date)
                        console.log("timeStamp", timeStamp)
                        const equalizer = timeStamp.getDate()
                        console.log('equalizer', equalizer)
                        const gridDay = cloneDay.getDate()
                        console.log("griday", gridDay)
                        const gridMonth = cloneDay.getMonth()
                        const monthEqualizer = timeStamp.getMonth()
                        if (equalizer === gridDay && gridMonth === monthEqualizer) {
                            return <div className='schedule'>
                                <span>{e.name}</span>
                                <span>Location: {e.location}</span>
                                <span>Arrival: {e.arrival}</span>
                                <span>Time: {e.time}</span>                                
                            </div>
                        }
                    })}                  
                </div>
            )
            day = dateFns.addDays(day, 1)            
        }
        rows.push(
            <div className="row" key={day}>
                {days}
            </div>
        )
        days = []
    }
    return <div className="body">{rows}</div>
}

const onDateClick = cloneDay => {    
    console.log("CLICK", cloneDay)
}

// const onDateClick = day => {
//     setState({
//         selectedDate: day
//     })
// }

const nextMonth = () => {
    setState({
        currentMonth: dateFns.addMonths(state.currentMonth, 1)
    })
}

const prevMonth = () => {
    setState({
        currentMonth: dateFns.subMonths(state.currentMonth, 1)
    })
}

    return (
        <div className="calendar">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        scheduled: state.events
    }
}

export default connect(mapStateToProps, {getEvent})(Calendar)