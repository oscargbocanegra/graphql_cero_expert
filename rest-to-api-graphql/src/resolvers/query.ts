import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasonsList(_: any, __: any, { dataSources }: any) {
            try {
                // Obtener sesiones del año 2024 (puedes cambiar el año)
                const result = await dataSources.seasons.getSessions("2024");
                return result || [];
            } catch (error) {
                console.error('Error fetching seasons list:', error);
                return [];
            }
        },
        
        async carData(_: any, args: any, { dataSources }: any) {
            try {
                // Configurar valores por defecto para paginación
                const limit = args.limit || 50;
                const offset = args.offset || 0;
                
                // Crear filtros SIN incluir limit y offset (la API no los soporta)
                const apiFilters = { ...args };
                delete apiFilters.limit;
                delete apiFilters.offset;
                
                // Si no hay filtros de datos, pasar undefined
                const hasDataFilters = Object.keys(apiFilters).some(key => 
                    apiFilters[key] !== undefined
                );
                
                const filtersToSend = hasDataFilters ? apiFilters : undefined;
                
                // Llamar al data source (sin paginación en la API)
                const allData = await dataSources.cardata.getCarData(filtersToSend);
                const fullData = allData || [];
                
                // Implementar paginación del lado del cliente
                const total = fullData.length;
                const startIndex = offset;
                const endIndex = offset + limit;
                const paginatedData = fullData.slice(startIndex, endIndex);
                
                // Calcular información de paginación
                const hasNext = endIndex < total;
                const hasPrevious = offset > 0;
                
                // Retornar respuesta con paginación
                return {
                    data: paginatedData,
                    pagination: {
                        total: total,
                        limit: limit,
                        offset: offset,
                        hasNext: hasNext,
                        hasPrevious: hasPrevious
                    }
                };
            } catch (error) {
                console.error('Error fetching car data:', error);
                return {
                    data: [],
                    pagination: {
                        total: 0,
                        limit: args.limit || 50,
                        offset: args.offset || 0,
                        hasNext: false,
                        hasPrevious: false
                    }
                };
            }
        },
        
        async drivers(_: any, args: any, { dataSources }: any) {
            try {
                // Si no hay argumentos, pasar undefined
                const filters = Object.keys(args).length > 0 ? args : undefined;
                
                // Llamar al data source
                const result = await dataSources.drivers.getDrivers(filters);
                
                // Retornar el resultado o array vacío
                return result || [];
            } catch (error) {
                console.error('Error fetching drivers:', error);
                return [];
            }
        }
    }
};

export default query;