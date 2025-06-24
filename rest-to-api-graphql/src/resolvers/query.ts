import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasonsList(_: any, __: any, { dataSources }: any) {
            try {
                // Obtener sesiones del año actual (2025) o puedes cambiarlo por otro año
                const sessions = await dataSources.seasons.getSessions("2024");
                return sessions || [];
            } catch (error) {
                console.error('Error fetching seasons list:', error);
                // Retornar array vacío en caso de error para evitar null
                return [];
            }
        }
    }
};

export default query;