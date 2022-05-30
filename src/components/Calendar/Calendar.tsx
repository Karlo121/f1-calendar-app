import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { StyledCalendar, generateStyles } from './Calendar.style';
import { CalendarProps, IRaces } from './Calendar.types';
import { generateCalendar } from "./Calendar.helpers"

import Header from "../Header/Header"

import api from 'src/api/data';

export const Calendar = (props: CalendarProps) => {
    const { date, onChange } = props;

    const [data, setData] = useState<Array<IRaces>>([]);
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
    }, [])

    const preparedCalendar = calendar.map(week =>
        <div className="weekRow">
            {
                week.map(day =>
                    <div
                        className={generateStyles(day, date)}
                        onClick={() => onChange(day)}
                    >
                        <div>
                            {
                                date.format("MMMM") === day.format("MMMM")
                                    ? <div>
                                        {day.format("D")}
                                        {
                                            data.some(race => race.date === day.format("YYYY-MM-DD"))
                                                ? <div className="raceDay">Race day</div>
                                                : <></>
                                        }
                                    </div>
                                    : <div className="hidden"></div>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );

    return (
        <StyledCalendar>
            <div className="monthContainer">
                <Header date={date} setDate={onChange} />
                {preparedCalendar}
            </div>
        </StyledCalendar>
    )
}