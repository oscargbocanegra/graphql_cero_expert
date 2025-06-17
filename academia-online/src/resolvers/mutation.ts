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

        database.cursos.push(itemCurso);
        return itemCurso;
        }
    }
}
    

export default mutation;
