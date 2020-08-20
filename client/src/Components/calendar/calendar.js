import React, {useState} from 'react'   
import "./calendar.css" 
import  * as dateFns from "date-fns"




const events = [{ title: "Today", date: new Date() }]

const Calendar = props => {
const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date()
})

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
const renderDays = () => {}
const renderCells = () => {}
const onDateClick = day => {}
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

export default Calendar