/**
 * Shared Constants for Formula 1 GraphQL API
 */

// API Endpoints
export const API_ENDPOINTS = {
    F1_BASE_URL: 'https://api.openf1.org/v1',
    SEASONS: '/sessions',
    CAR_DATA: '/car_data',
    DRIVERS: '/drivers',
    INTERVALS: '/intervals',
    LAPS: '/laps',
    LOCATION: '/location',
    MEETINGS: '/meetings',
    PIT: '/pit',
    POSITION: '/position',
    RACE_CONTROL: '/race_control',
    STINTS: '/stints',
    TEAM_RADIO: '/team_radio',
    WEATHER: '/weather'
} as const;

// Session Types
export const SESSION_TYPES = {
    PRACTICE_1: 'Practice 1',
    PRACTICE_2: 'Practice 2',
    PRACTICE_3: 'Practice 3',
    QUALIFYING: 'Qualifying',
    SPRINT: 'Sprint',
    SPRINT_QUALIFYING: 'Sprint Qualifying',
    RACE: 'Race'
} as const;

// Query Limits
export const QUERY_LIMITS = {
    DEFAULT: 20,
    MAX: 1000,
    MIN: 1
} as const;

// Cache TTL (in milliseconds)
export const CACHE_TTL = {
    SHORT: 60000,      // 1 minute
    MEDIUM: 300000,    // 5 minutes
    LONG: 1800000,     // 30 minutes
    EXTENDED: 3600000  // 1 hour
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
} as const;

// GraphQL Error Codes
export const GRAPHQL_ERRORS = {
    INVALID_INPUT: 'INVALID_INPUT',
    NOT_FOUND: 'NOT_FOUND',
    EXTERNAL_API_ERROR: 'EXTERNAL_API_ERROR',
    RATE_LIMITED: 'RATE_LIMITED',
    INTERNAL_ERROR: 'INTERNAL_ERROR'
} as const;

// Team Colors (2024 season)
export const TEAM_COLORS = {
    RED_BULL: '#3671C6',
    FERRARI: '#F91536',
    MERCEDES: '#27F4D2',
    MCLAREN: '#FF8000',
    ASTON_MARTIN: '#229971',
    ALPINE: '#FF87BC',
    WILLIAMS: '#64C4FF',
    ALPHATAURI: '#5E8FAA',
    ALFA_ROMEO: '#C92D4B',
    HAAS: '#B6BABD'
} as const;

// Driver Numbers (common ones)
export const DRIVER_NUMBERS = {
    VERSTAPPEN: 1,
    LECLERC: 16,
    HAMILTON: 44,
    RUSSELL: 63,
    NORRIS: 4,
    PIASTRI: 81,
    ALONSO: 14,
    STROLL: 18
} as const;

// Regex Patterns
export const REGEX_PATTERNS = {
    DRIVER_NUMBER: /^[1-9]\d{0,2}$/,
    SESSION_KEY: /^\d+$/,
    MEETING_KEY: /^\d+$/,
    YEAR: /^(19|20)\d{2}$/,
    TIME_FORMAT: /^\d{2}:\d{2}:\d{2}\.\d{3}$/
} as const;

// Default Values
export const DEFAULTS = {
    YEAR: new Date().getFullYear(),
    LIMIT: QUERY_LIMITS.DEFAULT,
    OFFSET: 0,
    TIMEOUT: 10000, // 10 seconds
    RETRY_ATTEMPTS: 3
} as const;
