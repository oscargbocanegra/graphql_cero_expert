import { F1 } from "./data-source";

export class LocationData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos de ubicación
    async getLocation(filters?: any) {
        let url = 'location';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.driver_number) params.push(`driver_number=${filters.driver_number}`);
            if (filters.session_key) params.push(`session_key=${filters.session_key}`);
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.date) params.push(`date${filters.date}`); // Para operadores como >2023-09-16T13:03:35.200
            if (filters.x) params.push(`x${filters.x}`); // Para operadores como >500
            if (filters.y) params.push(`y${filters.y}`); // Para operadores como <3000
            if (filters.z) params.push(`z${filters.z}`); // Para operadores como =187
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}
