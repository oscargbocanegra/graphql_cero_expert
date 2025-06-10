import { IResolvers } from "@graphql-tools/utils";


const query : IResolvers = {
    Query: {
        hola(): string{
            return 'Hola Mundo 123!';
        },
        holaConNombre(__: void, { nombre }): string {
            return `Hola Mundo ${nombre}`
        },
        holaAlCursoGraphql(): string {
            return 'Hola Mundo en el curso de Graphql'
        }
    }
}

export default query;