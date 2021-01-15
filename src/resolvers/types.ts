import { IResolvers } from 'graphql-tools';
import {database} from '../data/data.store';
import _ from 'lodash';

const type: IResolvers = {
    Estudiante:{
        courses: parent => {

            const cursosLista: Array<any> = [];

            parent.courses.map( (curso:string) => {

                cursosLista.push(_.filter(database.cursos,['id',curso])[0]);
                
            });

            return cursosLista;
        }
    },
    Producto:{
        clientes: parent =>{
            const listaClientes: Array<any> = [];
            
            parent.clientes.map( (cliente:string) => {
                listaClientes.push(_.filter(database.clientes,['id',cliente])[0]);
            });

            return listaClientes;
        }
    },
    Curso:{
        students: parent => {
            
            const listadoEstudiantes: Array<any> = [];

            const idCurso = parent.id;

            database.estudiantes.map((estudiante:any) => {
                if(estudiante.courses.filter((id:any)=> id === idCurso) > 0) {
                    listadoEstudiantes.push(estudiante);
                }
            });
            return listadoEstudiantes;
        },
        path: parent => `https://www.udemy.com${parent.path}`
    }
}

export default type;