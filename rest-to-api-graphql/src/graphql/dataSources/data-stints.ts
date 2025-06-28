import { F1 } from "./data-source";

export class StintsData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos de stints (períodos de conducción)
    async getStints(filters?: any) {
        let url = 'stints';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.driver_number) params.push(`driver_number=${filters.driver_number}`);
            if (filters.session_key) params.push(`session_key=${filters.session_key}`);
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.stint_number) params.push(`stint_number=${filters.stint_number}`);
            if (filters.compound) params.push(`compound=${filters.compound}`);
            if (filters.lap_start) params.push(`lap_start${filters.lap_start}`); // Para operadores como >=10
            if (filters.lap_end) params.push(`lap_end${filters.lap_end}`); // Para operadores como <=50
            if (filters.tyre_age_at_start) params.push(`tyre_age_at_start${filters.tyre_age_at_start}`); // Para operadores como >=3
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}
