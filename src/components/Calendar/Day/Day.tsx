import React, { useState } from 'react'
import { DayProps } from './Day.types'

import { generateStyles } from '../Calendar.style';
import { StyledDay } from './Day.style';

const Day = (props: DayProps) => {

    const { day, date, data, onChange } = props;

    return (
        <div
            className={generateStyles(day, date)}
            onClick={() => onChange(day)}
        >
            <StyledDay>
                {
                    date.format("MMMM") === day.format("MMMM")
                        ? <div>
                            {
                                day.format("D")
                            }

                            {
                                data.map(race => race.date === day.format("YYYY-MM-DD")
                                    ? (
                                        <div>
                                            <div className="raceDay">
                                                {race.raceName}
                                            </div>
                                            <div className="raceCount">
                                                {race.time.slice(0, -1)} GMT
                                            </div>
                                        </div>)
                                    : (race.Qualifying.date === day.format("YYYY-MM-DD")
                                        ? <div className="raceDay">
                                            {race.raceName} Qualifying
                                        </div>
                                        : (race.FirstPractice.date === day.format("YYYY-MM-DD"))
                                            ? <div className="raceDay">
                                                {race.raceName} Practice
                                            </div>
                                            : <></>)
                                )
                            }
                        </div>
                        : <div className="hidden"></div>
                }
            </StyledDay>
        </div>
    )
}

export default Day;