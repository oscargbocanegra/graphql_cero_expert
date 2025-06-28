import { F1 } from "./data-source";

export class MeetingsData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos de meetings (Grandes Premios)
    async getMeetings(filters?: any) {
        let url = 'meetings';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.year) params.push(`year=${filters.year}`);
            if (filters.country_name) params.push(`country_name=${filters.country_name}`);
            if (filters.country_code) params.push(`country_code=${filters.country_code}`);
            if (filters.circuit_short_name) params.push(`circuit_short_name=${filters.circuit_short_name}`);
            if (filters.meeting_name) params.push(`meeting_name=${filters.meeting_name}`);
            if (filters.location) params.push(`location=${filters.location}`);
            if (filters.date_start) params.push(`date_start${filters.date_start}`); // Para operadores como >2023-09-15
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}
