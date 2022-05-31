import moment from "moment";
import { IRace } from "../Calendar.types";

export type DayProps = {
    day: moment.Moment;
    date: moment.Moment;
    data: Array<IRace>;
    onChange: React.Dispatch<React.SetStateAction<moment.Moment>>;
}