import { IResolvers } from 'graphql-tools';
import {database} from '../data/data.store';

const query: IResolvers = {
    Query: {
        productos(): any {
            return database.productos;
        },
        estudiantes():any{
            return database.estudiantes;
        },
        estudiante(__: void,{id}): any {
            const resultado = database.estudiantes.filter((estudiante: any) => estudiante.id === id)[0];
            
            if( resultado === undefined ) {
                return{ 
                    id: '-1',
                    name: `No se ha encontrado en estudiante con el id ${id}`
                }
            }
            return resultado; 
        },

        cursos(): any{
            return database.cursos;
        },
        curso(__:void,{id}): any {

            const resultado = database.cursos.filter((curso:any) => curso.id === id)[0];

            if( resultado === undefined ) {
                return{ 
                    id: '-1',
                    title: `No se ha encontrado el curso con el id ${id}`,
                    description: "",
                    clases:1,
                    
                }
            }
            return resultado; 
        }

    }
}
export default query;