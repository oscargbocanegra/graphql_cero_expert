import { F1 } from "./data-source";

export class PitData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos de pit lane
    async getPit(filters?: any) {
        let url = 'pit';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.driver_number) params.push(`driver_number=${filters.driver_number}`);
            if (filters.session_key) params.push(`session_key=${filters.session_key}`);
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.lap_number) params.push(`lap_number=${filters.lap_number}`);
            if (filters.date) params.push(`date${filters.date}`); // Para operadores como >2023-09-16T13:03:35.200
            if (filters.pit_duration) params.push(`pit_duration${filters.pit_duration}`); // Para operadores como <31
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}
