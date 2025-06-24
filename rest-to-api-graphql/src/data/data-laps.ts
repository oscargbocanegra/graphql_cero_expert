import { F1 } from "./data-source";

export class LapsData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos de vueltas
    async getLaps(filters?: any) {
        let url = 'laps';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.driver_number) params.push(`driver_number=${filters.driver_number}`);
            if (filters.session_key) params.push(`session_key=${filters.session_key}`);
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.lap_number) params.push(`lap_number=${filters.lap_number}`);
            if (filters.date_start) params.push(`date_start=${filters.date_start}`);
            if (filters.lap_duration) params.push(`lap_duration${filters.lap_duration}`); // Para operadores como >90
            if (filters.is_pit_out_lap !== undefined) params.push(`is_pit_out_lap=${filters.is_pit_out_lap}`);
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}
