import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";
import _ from "lodash";

const mutation: IResolvers = {
    Mutation: {
        cursoNuevo(__: void, { curso }): any {
            const itemCurso = {
                id: String(database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                level: curso.level,
                logo: curso.logo,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            }
            if (database.cursos.filter(itemCurs => itemCurs.title === itemCurso.title).length === 0) {
                database.cursos.push(itemCurso);
                return itemCurso;
            }
            return {
                id: '-1',
                title: `El curso ${itemCurso.title} ya existe`,
                description: '',
                clases: -1,
                time: 0.0,
                level: 'ALL',
                logo: '',
                path: '',
                teacher: '',
                reviews: []
            }

        },
        modificarCurso(__: void, { curso }): any {
            const elementoExiste = _.findIndex(database.cursos, function (o) {
                return o.id === curso.id
            });
            if (elementoExiste > -1) {
                const valoraciones = database.cursos[elementoExiste].reviews;
                curso.reviews = valoraciones;
                database.cursos[elementoExiste] = curso;
                return curso;
            }

            return {
                id: '-1',
                title: `El curso ${curso.title} no existe en la base de datos `,
                description: '',
                clases: -1,
                time: 0.0,
                level: 'ALL',
                logo: '',
                teacher: '',
                reviews: []
            };
        }
    }
}
    

export default mutation;
