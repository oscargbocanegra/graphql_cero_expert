/**
 * Business Services for Formula 1 Data
 * These contain the business logic and orchestrate data access
 */

import { F1Driver, F1Season, TelemetryData } from '../entities';
import { QueryFilters, DataSourceResponse } from '../interfaces';

export interface IF1DataService {
    getSeasons(filters?: QueryFilters): Promise<F1Season[]>;
    getDrivers(filters?: QueryFilters): Promise<F1Driver[]>;
    getCarData(filters?: QueryFilters): Promise<TelemetryData[]>;
}

export class F1DataService implements IF1DataService {
    
    async getSeasons(filters?: QueryFilters): Promise<F1Season[]> {
        // This would be implemented with actual data source calls
        // For now, returning empty array as placeholder
        return [];
    }

    async getDrivers(filters?: QueryFilters): Promise<F1Driver[]> {
        // This would be implemented with actual data source calls
        // For now, returning empty array as placeholder
        return [];
    }

    async getCarData(filters?: QueryFilters): Promise<TelemetryData[]> {
        // This would be implemented with actual data source calls
        // For now, returning empty array as placeholder
        return [];
    }

    // Business logic methods
    async getCurrentSeasonDrivers(): Promise<F1Driver[]> {
        const currentYear = new Date().getFullYear();
        return this.getDrivers({ year: currentYear });
    }

    async getTopSpeedForSession(sessionKey: number): Promise<{ driver: F1Driver; maxSpeed: number } | null> {
        const carData = await this.getCarData({ session_key: sessionKey });
        
        if (carData.length === 0) return null;

        const maxSpeedEntry = carData.reduce((max, current) => {
            return (current.speed || 0) > (max.speed || 0) ? current : max;
        });

        const driver = await this.getDrivers({ driver_number: maxSpeedEntry.driver_number });
        
        return driver.length > 0 ? {
            driver: driver[0],
            maxSpeed: maxSpeedEntry.speed || 0
        } : null;
    }

    async getDriverPerformanceInSession(driverNumber: number, sessionKey: number): Promise<{
        driver: F1Driver;
        avgSpeed: number;
        maxSpeed: number;
        totalLaps: number;
    } | null> {
        const [drivers, carData] = await Promise.all([
            this.getDrivers({ driver_number: driverNumber }),
            this.getCarData({ driver_number: driverNumber, session_key: sessionKey })
        ]);

        if (drivers.length === 0 || carData.length === 0) return null;

        const speeds = carData
            .map(data => data.speed)
            .filter(speed => speed !== undefined) as number[];

        if (speeds.length === 0) return null;

        const avgSpeed = speeds.reduce((sum, speed) => sum + speed, 0) / speeds.length;
        const maxSpeed = Math.max(...speeds);

        return {
            driver: drivers[0],
            avgSpeed: Math.round(avgSpeed * 100) / 100,
            maxSpeed,
            totalLaps: carData.length
        };
    }
}
