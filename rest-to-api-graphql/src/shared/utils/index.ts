/**
 * Shared Utility Functions
 */

/**
 * Format time duration in milliseconds to human readable format
 */
export function formatDuration(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const remainingMs = milliseconds % 1000;

    if (minutes > 0) {
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}.${remainingMs.toString().padStart(3, '0')}`;
    }
    return `${remainingSeconds}.${remainingMs.toString().padStart(3, '0')}`;
}

/**
 * Convert speed from different units
 */
export function convertSpeed(speed: number, from: 'kmh' | 'mph', to: 'kmh' | 'mph'): number {
    if (from === to) return speed;
    
    if (from === 'kmh' && to === 'mph') {
        return speed * 0.621371;
    }
    
    if (from === 'mph' && to === 'kmh') {
        return speed * 1.60934;
    }
    
    return speed;
}

/**
 * Parse API date strings
 */
export function parseAPIDate(dateString: string): Date {
    return new Date(dateString);
}

/**
 * Format date for API queries
 */
export function formatAPIDate(date: Date): string {
    return date.toISOString();
}

/**
 * Validate query parameters
 */
export function validateQueryParams(params: Record<string, any>): boolean {
    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null) {
            if (typeof value === 'number' && isNaN(value)) {
                return false;
            }
            if (typeof value === 'string' && value.trim().length === 0) {
                return false;
            }
        }
    }
    return true;
}

/**
 * Paginate array results
 */
export function paginate<T>(
    array: T[], 
    limit?: number, 
    offset?: number
): { data: T[]; total: number; hasNext: boolean; hasPrev: boolean } {
    const total = array.length;
    const start = offset || 0;
    const end = limit ? start + limit : array.length;
    
    const data = array.slice(start, end);
    
    return {
        data,
        total,
        hasNext: end < total,
        hasPrev: start > 0
    };
}

/**
 * Debounce function for API calls
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
    
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Cache with TTL
 */
export class TTLCache<T> {
    private cache = new Map<string, { value: T; expiry: number }>();
    
    constructor(private defaultTTL: number = 300000) {} // 5 minutes default
    
    set(key: string, value: T, ttl?: number): void {
        const expiry = Date.now() + (ttl || this.defaultTTL);
        this.cache.set(key, { value, expiry });
    }
    
    get(key: string): T | undefined {
        const item = this.cache.get(key);
        
        if (!item) return undefined;
        
        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return undefined;
        }
        
        return item.value;
    }
    
    clear(): void {
        this.cache.clear();
    }
    
    size(): number {
        return this.cache.size;
    }
}
