import { F1 } from "./data-source";

export class DriversData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos de pilotos
    async getDrivers(filters?: any) {
        let url = 'drivers';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.driver_number) params.push(`driver_number=${filters.driver_number}`);
            if (filters.session_key) params.push(`session_key=${filters.session_key}`);
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.country_code) params.push(`country_code=${filters.country_code}`);
            if (filters.team_name) params.push(`team_name=${filters.team_name}`);
            if (filters.name_acronym) params.push(`name_acronym=${filters.name_acronym}`);
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}
