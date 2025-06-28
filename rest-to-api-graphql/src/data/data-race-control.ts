import { F1 } from "./data-source";

export class RaceControlData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos de control de carrera
    async getRaceControl(filters?: any) {
        let url = 'race_control';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.driver_number) params.push(`driver_number=${filters.driver_number}`);
            if (filters.session_key) params.push(`session_key=${filters.session_key}`);
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.lap_number) params.push(`lap_number=${filters.lap_number}`);
            if (filters.category) params.push(`category=${filters.category}`);
            if (filters.flag) params.push(`flag=${filters.flag}`);
            if (filters.scope) params.push(`scope=${filters.scope}`);
            if (filters.sector) params.push(`sector=${filters.sector}`);
            if (filters.date) params.push(`date${filters.date}`); // Para operadores como >=2023-01-01
            if (filters.message) params.push(`message=${filters.message}`);
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}
