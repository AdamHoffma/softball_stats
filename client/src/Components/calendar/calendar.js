import React, {useState, useEffect} from 'react'   
import "./calendar.css" 
import  * as dateFns from "date-fns"
import {getEvent} from "../../redux/actions.js"
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

const Calendar = ({getEvent, scheduled}) => {
const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date()
})

useEffect(() => {
    getEvent()
}, [getEvent])

console.log(scheduled)

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
                    {scheduled.map(e => {
                        const timeStamp = new Date(e.date)                        
                        const equalizer = timeStamp.getDate()                        
                        const gridDay = cloneDay.getDate()                       
                        const gridMonth = cloneDay.getMonth()
                        const monthEqualizer = timeStamp.getMonth()
                        if (equalizer === gridDay && gridMonth === monthEqualizer) {
                            return <Link to={`/calendarview/${e.id}`} className='schedule'>
                                <span>{e.name}</span>
                                <span>Location: {e.location}</span>
                                <span>Arrival: {e.arrival}</span>
                                <span>Time: {e.time}</span>                                
                            </Link>
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

const renderExpanded = cloneDay => {
    
}

const onDateClick = cloneDay => {        
    let expanded = []
    {scheduled.map(day => {
        const conversion = new Date(day.date)
        const eventDay = conversion.getDate()
        const eventMonth = conversion.getMonth()
        const calendarDay = cloneDay.getDate()
        const calendarMonth = cloneDay.getMonth()

        if (eventDay === calendarDay && eventMonth === calendarMonth) {
            // expanded.push(
            // <div className={`test ${cloneDay}`} key={cloneDay}>
            //     <h1>{day.date}</h1>
            //     <h1>TIME: {day.time}</h1>
            // </div>
            // )
            // console.log("expanded before clear", expanded)
            // return <div key={cloneDay}>{expanded}</div>
            // console.log("CLICK", day)
            return <div>
                        <h1>LOCATION: {day.location}</h1>                
                   </div>
        }
    })}
    expanded = []
}

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