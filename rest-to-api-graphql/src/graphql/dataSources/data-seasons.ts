import { F1 } from "./data-source";

export class SeasonsData extends F1 {
    constructor() {
        super();
    }

    // Método específico para obtener sesiones
    async getSessions(year?: string) {
        let url = 'sessions';
        
        // Si hay año, agregarlo como parámetro
        if (year) {
            url += `?year=${year}`;
        }
        
        return this.get(url);
    }
}