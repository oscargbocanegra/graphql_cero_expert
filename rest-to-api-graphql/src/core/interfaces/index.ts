/**
 * Core Domain Interfaces for Formula 1 Data
 */

export interface Season {
    year: number;
    meeting_key: number;
    session_name: string;
    session_type: string;
    circuit_short_name: string;
    country_name: string;
    date_start: string;
    date_end?: string;
}

export interface Driver {
    driver_number: number;
    name_acronym: string;
    full_name: string;
    team_name: string;
    team_colour?: string;
    country_code?: string;
}

export interface CarData {
    date: string;
    driver_number: number;
    session_key: number;
    meeting_key: number;
    speed?: number;
    rpm?: number;
    gear?: number;
    throttle?: number;
    brake?: number;
    drs?: number;
}

export interface LapData {
    date_start: string;
    driver_number: number;
    duration_sector_1?: number;
    duration_sector_2?: number;
    duration_sector_3?: number;
    lap_duration?: number;
    lap_number: number;
    is_pit_out_lap: boolean;
    segment_1_speed?: number;
    segment_2_speed?: number;
    st_speed?: number;
}

export interface Position {
    date: string;
    driver_number: number;
    meeting_key: number;
    position: number;
    session_key: number;
}

export interface Meeting {
    circuit_key: number;
    circuit_short_name: string;
    country_code: string;
    country_name: string;
    date_start: string;
    gmt_offset: string;
    location: string;
    meeting_key: number;
    meeting_name: string;
    meeting_official_name: string;
    year: number;
}

// Query Input Interfaces
export interface QueryFilters {
    limit?: number;
    offset?: number;
    session_key?: number;
    meeting_key?: number;
    driver_number?: number;
    year?: number;
}

export interface DataSourceResponse<T> {
    data: T[];
    total?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
}
