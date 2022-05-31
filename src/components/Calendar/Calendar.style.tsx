import moment from "moment";
import styled from "styled-components";

const beforeToday = (date: moment.Moment) => {
    return date.isBefore(new Date(), "day")
};

const isToday = (date: moment.Moment) => {
    return date.isSame(new Date(), "day")
};

export const generateStyles = (date: moment.Moment, currentDate: moment.Moment) => {
    if (beforeToday(date)) return "passed dayCell";
    if (isToday(date)) return "today dayCell";
    return "dayCell";
};

export const StyledCalendar = styled.div`
    font-family: "Lucida Console";  
    background-color: #262626;
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

        :hover {
            transform: scale(1.01,1.01);
            background-color: #BF5050;
            color: white;
        }
    }

    .passed {
       color: rgba(71, 71, 71, 0.607)
    }

    .today {     
        background-color: rgb(39, 144, 67);
        color: white;
        
        :hover {
            border: 3px solid rgb(39, 144, 67);
        }
    }

`;
