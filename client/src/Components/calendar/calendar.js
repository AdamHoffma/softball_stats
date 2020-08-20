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
const renderDays = () => {
    const dateFormat = "dd"
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
                    onClick={() => onDateClick(dateFns.parse(cloneDay))}
                >
                    <span className="number">{formattedDate}</span>
                    <span className="bg">{formattedDate}</span>
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

const onDateClick = day => {
    setState({
        selectedDate: day
    })
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

export default Calendar