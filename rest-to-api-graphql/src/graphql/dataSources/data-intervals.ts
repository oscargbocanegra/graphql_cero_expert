import { F1 } from "./data-source";

export class IntervalsData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos de intervalos
    async getIntervals(filters?: any) {
        let url = 'intervals';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.driver_number) params.push(`driver_number=${filters.driver_number}`);
            if (filters.session_key) params.push(`session_key=${filters.session_key}`);
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.date) params.push(`date=${filters.date}`);
            if (filters.interval) params.push(`interval${filters.interval}`); // Para operadores como <0.005
            if (filters.gap_to_leader) params.push(`gap_to_leader${filters.gap_to_leader}`);
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}
