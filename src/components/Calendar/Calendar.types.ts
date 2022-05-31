import moment from "moment"
import { TimeHTMLAttributes } from "react";
import { TypeReferenceDirectiveResolutionCache } from "typescript";

export type CalendarProps = {
    date: moment.Moment;
    onChange: React.Dispatch<React.SetStateAction<moment.Moment>>;
}

export interface IRace {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: TCircuit;
    date: string;
    time: string;
    FirstPractice: TTime;
    SecondPractice: TTime;
    ThirdPractice: TTime;
    Qualifying: TTime;
}

export type TCircuit = {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: TLocation;
}

export type TLocation = {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

export type TTime = {
    date: string;
    time: string;
}