import { F1 } from "./data-source";

export class PositionData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos de posiciones
    async getPosition(filters?: any) {
        let url = 'position';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.driver_number) params.push(`driver_number=${filters.driver_number}`);
            if (filters.session_key) params.push(`session_key=${filters.session_key}`);
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.position) params.push(`position${filters.position}`); // Para operadores como <=3, >10
            if (filters.date) params.push(`date${filters.date}`); // Para operadores como >2023-08-26T09:30:00
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}
