import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
//import axios from 'axios';

//var respuesta = axios.get('http://127.0.0.1:8000/api/usuarios').then(response => {
//console.log(response.data);
//return response.data;
//}).catch(console.log);

//console.log(respuesta);


const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
    }
});

const styles = {
    historialconcursos: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
    }
}

const operations = [
    {
        asterisco: '1',
        programa: 'General',
        concurso: 'Radiaso',
        horario: '10:00 - 11:30',
        fecha: 'Viernes 22 de agosto de 2020',
    },
    {
        asterisco: '2',
        programa: 'Tacos, canela y chile',
        concurso: 'Selfie con tu hijo',
        horario: '14:00 - 15:00',
        fecha: 'Jueves 21 de agosto de 2020',
    },
    {
        asterisco: '3',
        programa: 'Salsa Viva',
        concurso: 'Adivina el personaje',
        horario: '17:00 - 19:00',
        fecha: 'Viernes 22 de agosto de 2020',
    }
]

const columns = [
    { key: 'column1', name: '#', fieldName: 'asterisco', minWidth: 10, maxWidth: 30, isResizable: true },
    { key: 'column2', name: 'Programa', fieldName: 'programa', minWidth: 120, maxWidth: 120, isResizable: true },
    { key: 'column3', name: 'Concurso', fieldName: 'concurso', minWidth: 120, maxWidth: 120, isResizable: true },
    { key: 'column4', name: 'Horario', fieldName: 'horario', minWidth: 80, maxWidth: 80, isResizable: true },
    { key: 'column5', name: 'Fecha', fieldName: 'fecha', minWidth: 100, maxWidth: 300, isResizable: true },
]

const HistorialConcursos = () => {
    return (
        <div data-is-scrollable={true}>
            <div className={`s - Grid - col ms-sm9 ms-xl12 ${classNames.table}`}>
                <div style={styles.historialconcursos}> Historial de Concursos: 50</div>
                <DetailsList
                    items={operations}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
        </div >
    );
};

export default HistorialConcursos;