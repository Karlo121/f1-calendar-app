import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { StyledCalendar } from './Calendar.style';
import { CalendarProps, IRace } from './Calendar.types';
import { generateCalendar } from "./Calendar.helpers";

import Header from "../Header/Header";
import Day from "./Day/Day";

import api from 'src/api/data';

export const Calendar = (props: CalendarProps) => {
    const { date, onChange } = props;

    const [data, setData] = useState<Array<IRace>>([]);
    const [calendar, setCalendar] = useState<Array<Array<moment.Moment>>>([]);

    useEffect(() => {
        setCalendar(generateCalendar(date));
    }, [date]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('')
                setData(response.data.MRData.RaceTable.Races);
            } catch (err) {
                console.log("oops");
            }
        }
        fetchData();
    }, []);

    const renderCalendar = calendar.map((week) => (
        <div className="weekRow">
            {
                week.map((day, index) => <Day key={index} data={data} date={date} day={day} onChange={onChange} />)
            }
        </div>
    ));

    return (
        <StyledCalendar>
            <div className="monthContainer">
                <Header date={date} setDate={onChange} />
                {renderCalendar}
            </div>
        </StyledCalendar>
    )
}