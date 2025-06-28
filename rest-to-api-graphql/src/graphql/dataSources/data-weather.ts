import { F1 } from "./data-source";

export class WeatherData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener datos meteorológicos
    async getWeather(filters?: any) {
        let url = 'weather';
        
        // Si hay filtros, construir la URL con parámetros
        if (filters) {
            const params = [];
            
            // Agregar cada filtro si existe
            if (filters.session_key) params.push(`session_key=${filters.session_key}`);
            if (filters.meeting_key) params.push(`meeting_key=${filters.meeting_key}`);
            if (filters.date) params.push(`date${filters.date}`); // Para operadores como >2023-05-07T18:00:00
            if (filters.air_temperature) params.push(`air_temperature${filters.air_temperature}`); // Para operadores como >=25
            if (filters.track_temperature) params.push(`track_temperature${filters.track_temperature}`); // Para operadores como >=52
            if (filters.humidity) params.push(`humidity${filters.humidity}`); // Para operadores como <=60
            if (filters.pressure) params.push(`pressure${filters.pressure}`); // Para operadores como >=1015
            if (filters.rainfall) params.push(`rainfall=${filters.rainfall}`); // 0 o 1
            if (filters.wind_direction) params.push(`wind_direction${filters.wind_direction}`); // Para operadores como >=130
            if (filters.wind_speed) params.push(`wind_speed${filters.wind_speed}`); // Para operadores como <=5
            
            // Si hay parámetros, agregarlos a la URL
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
        }
        
        return this.get(url);
    }
}
