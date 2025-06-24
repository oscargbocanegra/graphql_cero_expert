import { IResolvers } from 'graphql-tools';

const type: IResolvers = {
    Sessions: {
        // Ejemplo: Si necesitas transformar algún campo específico
        // meeting_key: (parent: any) => parent.meeting_key || 0,
        // date_start: (parent: any) => new Date(parent.date_start).toISOString(),
        
        // Por ahora, devolvemos los campos tal como vienen de la API
        // GraphQL automáticamente mapea los campos si tienen el mismo nombre
    }
};

export default type;