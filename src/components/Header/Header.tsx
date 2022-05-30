import React from 'react'
import { MdKeyboardArrowRight as RightArrow, MdKeyboardArrowLeft as LeftArrow } from "react-icons/md";
import { StyledHeader } from './Header.style';
import { HeaderProps } from './Header.type';


export const dayNames: Array<string> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

const Header = (props: HeaderProps) => {

    const { date, setDate } = props;

    const getMonth = () => {
        return date.format("MMMM");
    };

    const getYear = () => {
        return date.format("YYYY");
    };

    const previousMonth = () => {
        return date.clone().subtract(1, "month");
    };

    const nextMonth = () => {
        return date.clone().add(1, "month");
    };

    const preparedDayname = dayNames.map((name: string) => <div className="dayName">
        {name}
    </div>
    );

    return (
        <StyledHeader>
            <div className="monthYear">
                <div className="monthYearLabel">{getMonth()} {getYear()}</div>
                <div className="buttons">
                    <LeftArrow
                        className="left"
                        size={35}
                        onClick={() => setDate(previousMonth())}
                    />
                    <RightArrow
                        className="right"
                        size={35}
                        onClick={() => setDate(nextMonth())}
                    />
                </div>
            </div>
            <div className="dayLabel">{preparedDayname}</div>
        </StyledHeader>
    )
}

export default Header