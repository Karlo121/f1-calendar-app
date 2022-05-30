import moment from "moment";
import styled from "styled-components";

import background from '../../images/background.jpg'

const daySelected = (date: moment.Moment, currentDate: moment.Moment) => {
    return currentDate.isSame(date, "day");
};

const beforeCurrent = (date: moment.Moment) => {
    return date.isBefore(new Date(), "day")
};

const isToday = (date: moment.Moment) => {
    return date.isSame(new Date(), "day")
};

export const generateStyles = (date: moment.Moment, currentDate: moment.Moment) => {
    if (beforeCurrent(date)) return "passed dayCell";
    if (daySelected(date, currentDate)) return "selected dayCell";
    if (isToday(date)) return "today dayCell";
    return "dayCell";
};

export const StyledCalendar = styled.div`
    font-family: "Lucida Console";  
    background-color: #414141;
    border-radius: 10px;
    padding: 10px;

    .monthContainer {
        max-width: 1200px;
        margin: 15px auto;  
    }
    
    .weekRow {
        display: flex;
        height: 150px;
    }
    
    .dayCell {
        flex-basis: 100%;
        flex: 1 1 0px;
        background-color: white;
        margin: 2px;
        padding: 5px;
        text-align: center;
        z-index: 1;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    }

    .passed {
       color: rgba(254, 84, 69, 0.607)
    }

    .today {
        color: black;
        border: 2px solid rgb(39, 144, 67);
        color: rgb(39, 144, 67);
    }

    .selected {
        border: 2px solid rgb(236, 221, 18);
    }

    .hidden {
        display: none;
        border: 0px;
    }

    .raceDay {
        border: 1px solid black;
        height: 80px;
        height: 100px;
        border-radius: 10px;
        background-image: url(${background});
        background-size: contain;

        color: white;
        font-weight: 700;
    }
`;
