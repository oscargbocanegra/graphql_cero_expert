import { F1 } from "./data-source";

export class CarData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos de coches
    async getCarData(filters?: any) {
        let url = 'car_data';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.driver_number) params.push(`driver_number=${filters.driver_number}`);
            if (filters.session_key) params.push(`session_key=${filters.session_key}`);
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.speed) params.push(`speed${filters.speed}`);
            if (filters.date) params.push(`date=${filters.date}`);
            if (filters.rpm) params.push(`rpm${filters.rpm}`);
            if (filters.throttle) params.push(`throttle${filters.throttle}`);
            if (filters.brake !== undefined) params.push(`brake=${filters.brake}`);
            if (filters.drs !== undefined) params.push(`drs=${filters.drs}`);
            if (filters.n_gear !== undefined) params.push(`n_gear=${filters.n_gear}`);
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}