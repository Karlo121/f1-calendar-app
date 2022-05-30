import moment from "moment";

export const generateCalendar = (date: moment.Moment) => {
    const firstDay = date.clone().startOf("month").startOf("week");
    const lastDay = date.clone().endOf("month").endOf("week");
    const day = firstDay.clone().subtract(1, "day");
        const calendar: Array<Array<moment.Moment>> = [];
        while (day.isBefore(lastDay, "day")) {
            calendar.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            )
        }

    return calendar;
}

