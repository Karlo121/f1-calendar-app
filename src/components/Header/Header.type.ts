import moment from "moment"

export type HeaderProps = {
    date: moment.Moment;
    setDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
}