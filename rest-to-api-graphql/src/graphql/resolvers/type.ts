import { IResolvers } from 'graphql-tools';

const type: IResolvers = {
    Sessions: {
        // Ejemplo: Si necesitas transformar algún campo específico
        // meeting_key: (parent: any) => parent.meeting_key || 0,
        // date_start: (parent: any) => new Date(parent.date_start).toISOString(),
        
        // Por ahora, devolvemos los campos tal como vienen de la API
        // GraphQL automáticamente mapea los campos si tienen el mismo nombre
    },
    
    CarData: {
        // Los campos se mapean automáticamente si tienen el mismo nombre
        // Puedes agregar transformaciones personalizadas aquí si es necesario
        // Por ejemplo:
        // date: (parent: any) => new Date(parent.date).toISOString(),
        // speed: (parent: any) => Math.round(parent.speed), // Redondear velocidad
    }
};

export default type;