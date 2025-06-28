/**
 * Shared TypeScript Types and Interfaces
 */

// Generic API Response Type
export interface APIResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    errors?: string[];
    meta?: {
        total?: number;
        page?: number;
        limit?: number;
        hasNext?: boolean;
        hasPrev?: boolean;
    };
}

// Error Types
export interface GraphQLError {
    message: string;
    code: string;
    path?: string[];
    locations?: Array<{
        line: number;
        column: number;
    }>;
    extensions?: Record<string, any>;
}

// Context Types for GraphQL
export interface GraphQLContext {
    dataSources: {
        seasons: any;
        cardata: any;
        drivers: any;
        intervals: any;
        laps: any;
        location: any;
        meetings: any;
        pit: any;
        position: any;
        racecontrol: any;
        stints: any;
        teamradio: any;
        weather: any;
    };
    user?: {
        id: string;
        role: string;
    };
    request: {
        ip: string;
        userAgent: string;
    };
}

// Utility Types
export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

// Pagination Types
export interface PaginationArgs {
    limit?: Maybe<number>;
    offset?: Maybe<number>;
}

export interface PaginationInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    totalCount: number;
    currentPage: number;
    totalPages: number;
}

export interface Connection<T> {
    edges: Array<{
        node: T;
        cursor: string;
    }>;
    pageInfo: PaginationInfo;
}

// Filter Types
export interface DateRange {
    start: string;
    end: string;
}

export interface NumericRange {
    min: number;
    max: number;
}

// External API Types
export interface ExternalAPIConfig {
    baseURL: string;
    timeout: number;
    retries: number;
    headers: Record<string, string>;
}

// Cache Types
export interface CacheConfig {
    ttl: number;
    maxSize: number;
    strategy: 'LRU' | 'FIFO' | 'LFU';
}

// Logging Types
export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export interface LogEntry {
    level: LogLevel;
    message: string;
    timestamp: string;
    context?: Record<string, any>;
    error?: Error;
}

// Performance Monitoring
export interface PerformanceMetrics {
    requestId: string;
    operation: string;
    startTime: number;
    endTime?: number;
    duration?: number;
    success: boolean;
    errorMessage?: string;
}

// Feature Flags
export interface FeatureFlags {
    enableCaching: boolean;
    enableRateLimiting: boolean;
    enableDetailedLogging: boolean;
    enableMetrics: boolean;
    maxQueryDepth: number;
    maxQueryComplexity: number;
}

// Configuration Types
export interface DatabaseConfig {
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    ssl: boolean;
}

export interface RedisConfig {
    host: string;
    port: number;
    password?: string;
    db: number;
}

// Environment Types
export type Environment = 'development' | 'staging' | 'production' | 'test';

export interface EnvironmentConfig {
    env: Environment;
    debug: boolean;
    logLevel: LogLevel;
    features: FeatureFlags;
}

// Union and Intersection Types
export type SessionType = 
    | 'Practice 1'
    | 'Practice 2' 
    | 'Practice 3'
    | 'Qualifying'
    | 'Sprint'
    | 'Sprint Qualifying'
    | 'Race';

export type TeamName = 
    | 'Red Bull Racing'
    | 'Ferrari'
    | 'Mercedes'
    | 'McLaren'
    | 'Aston Martin'
    | 'Alpine'
    | 'Williams'
    | 'AlphaTauri'
    | 'Alfa Romeo'
    | 'Haas';

// Branded Types for better type safety
export type DriverNumber = number & { __brand: 'DriverNumber' };
export type SessionKey = number & { __brand: 'SessionKey' };
export type MeetingKey = number & { __brand: 'MeetingKey' };

// Type Guards
export function isDriverNumber(value: number): value is DriverNumber {
    return value >= 1 && value <= 999;
}

export function isSessionKey(value: number): value is SessionKey {
    return value > 0;
}

export function isMeetingKey(value: number): value is MeetingKey {
    return value > 0;
}
