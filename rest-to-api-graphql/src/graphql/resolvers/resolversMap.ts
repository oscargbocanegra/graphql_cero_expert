import { IResolvers } from 'graphql-tools';
import mutation from './mutation';
import query from './query';
import type from './type';

const resolversMap: IResolvers = {
    ...query,
    ...type,
    // Solo incluir mutations si tiene contenido real
    ...(Object.keys(mutation).length > 0 && mutation)
};

export default resolversMap;