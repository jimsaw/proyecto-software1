import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';


const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
    }
});

const styles = {
    tablaconcursosganados: {
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
        horario: '08:30 - 10:00',
        fecha: 'Jueves 13 de agosto de 2020',
        aciertos: '5',
    },
    {
        asterisco: '2',
        programa: 'A filo de cama',
        concurso: 'Arta pelota',
        horario: '12:00 - 14:00',
        fecha: 'Miércoles 12 de agosto de 2020',
        aciertos: '5',
    },
    {
        asterisco: '3',
        programa: 'Canela íntima',
        concurso: 'Selfie con tu hijo',
        horario: '16:00 - 18:00',
        fecha: 'Martes 11 de agosto de 2020',
        aciertos: '-',
    }
]

const columns = [
    { key: 'column1', name: '#', fieldName: 'asterisco', minWidth: 10, maxWidth: 30, isResizable: true },
    { key: 'column2', name: 'Programa', fieldName: 'programa', minWidth: 80, maxWidth: 80, isResizable: true },
    { key: 'column3', name: 'Concurso', fieldName: 'concurso', minWidth: 90, maxWidth: 90, isResizable: true },
    { key: 'column4', name: 'Horario', fieldName: 'horario', minWidth: 70, maxWidth: 70, isResizable: true },
    { key: 'column5', name: 'Fecha', fieldName: 'fecha', minWidth: 150, maxWidth: 170, isResizable: true },
    { key: 'column6', name: 'Aciertos', fieldName: 'aciertos', minWidth: 60, maxWidth: 60, isResizable: true },
]

const TablaConcursosGanados = () => {
    return (
        <div data-is-scrollable={true}>
            <div className={`s - Grid - col ms-sm9 ms-xl12 ${classNames.table}`}>
                <div style={styles.tablaconcursosganados}> Concursos Ganados Recientemente: 3</div>
                <DetailsList
                    items={operations}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
        </div >
    );
};

export default TablaConcursosGanados;