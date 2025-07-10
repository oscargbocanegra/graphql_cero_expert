/**
 * Domain Entities for Formula 1 Data
 * These represent the core business objects
 */

import { Driver, Season, CarData, LapData, Position, Meeting } from '../interfaces';

export class F1Driver implements Driver {
    constructor(
        public driver_number: number,
        public name_acronym: string,
        public full_name: string,
        public team_name: string,
        public team_colour?: string,
        public country_code?: string
    ) {}

    getDisplayName(): string {
        return `${this.name_acronym} - ${this.team_name}`;
    }

    isValid(): boolean {
        return this.driver_number > 0 && 
               this.name_acronym.length > 0 && 
               this.full_name.length > 0;
    }
}

export class F1Season implements Season {
    constructor(
        public year: number,
        public meeting_key: number,
        public session_name: string,
        public session_type: string,
        public circuit_short_name: string,
        public country_name: string,
        public date_start: string,
        public date_end?: string
    ) {}

    isCurrentSeason(): boolean {
        return this.year === new Date().getFullYear();
    }

    getSessionIdentifier(): string {
        return `${this.year}_${this.meeting_key}_${this.session_name}`;
    }
}

export class TelemetryData implements CarData {
    constructor(
        public date: string,
        public driver_number: number,
        public session_key: number,
        public meeting_key: number,
        public speed?: number,
        public rpm?: number,
        public gear?: number,
        public throttle?: number,
        public brake?: number,
        public drs?: number
    ) {}

    isValidTelemetry(): boolean {
        return this.driver_number > 0 && 
               this.session_key > 0 && 
               this.meeting_key > 0;
    }

    hasSpeedData(): boolean {
        return this.speed !== undefined && this.speed > 0;
    }
}

export class RaceLap implements LapData {
    constructor(
        public date_start: string,
        public driver_number: number,
        public duration_sector_1: number | undefined,
        public duration_sector_2: number | undefined,
        public duration_sector_3: number | undefined,
        public lap_duration: number | undefined,
        public lap_number: number,
        public is_pit_out_lap: boolean,
        public segment_1_speed?: number,
        public segment_2_speed?: number,
        public st_speed?: number
    ) {}

    getTotalLapTime(): number | undefined {
        return this.lap_duration;
    }

    isCompleteLap(): boolean {
        return this.duration_sector_1 !== undefined &&
               this.duration_sector_2 !== undefined &&
               this.duration_sector_3 !== undefined;
    }

    getBestSectorSpeed(): number | undefined {
        const speeds = [this.segment_1_speed, this.segment_2_speed, this.st_speed]
            .filter(speed => speed !== undefined) as number[];
        
        return speeds.length > 0 ? Math.max(...speeds) : undefined;
    }
}
