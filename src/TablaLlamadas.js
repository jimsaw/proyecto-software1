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
    tablallamadashoy: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
    },
    actualizado: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        //paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
    }
}

const operations = [
    {
        asterisco: '1',
        programa: 'A filo de cama',
        concurso: 'Arta Pelota',
        horario: '16:00 - 18:00',
        fecha: 'Lunes 24 de agosto de 2020',
    },
    {
        asterisco: '2',
        programa: 'Canela íntima',
        concurso: '-',
        horario: '12:30 - 14:00',
        fecha: 'Martes 25 de agosto de 2020',
    }
]

const columns = [
    { key: 'column1', name: '#', fieldName: 'asterisco', minWidth: 10, maxWidth: 30, isResizable: true },
    { key: 'column2', name: 'Programa al que llamó', fieldName: 'programa', minWidth: 150, maxWidth: 150, isResizable: true },
    { key: 'column3', name: 'Concurso', fieldName: 'concurso', minWidth: 100, maxWidth: 100, isResizable: true },
    { key: 'column4', name: 'Horario', fieldName: 'horario', minWidth: 75, maxWidth: 75, isResizable: true },
    { key: 'column5', name: 'Fecha', fieldName: 'fecha', minWidth: 100, maxWidth: 300, isResizable: true },
]

const TablaLlamadas = () => {
    return (
        <div data-is-scrollable={true}>
            <div className={`s - Grid - col ms-sm9 ms-xl12 ${classNames.table}`}>
                <div style={styles.actualizado}> Actualizado hasta: {fechaactual()}</div>
                <div style={styles.tablallamadashoy}> Llamadas Realizadas Hoy: 2</div>
                <DetailsList
                    items={operations}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
        </div >
    );
};

export default TablaLlamadas;

function fechaactual() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;
    return (today);
}