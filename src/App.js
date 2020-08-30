import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

//import Navigation from './Navigation';
import Identificacion from './Identificacion';
import ExtraInfo from './ExtraInfo';
import Credencial from './Credencial';
import Llamada from './Llamada';
import TablaLlamadas from './TablaLlamadas';
import TablaConcursosGanados from './TablaConcursosGanados';
import TablaConcursosParticipando from './TablaConcursosParticipando';
import HistorialConcursos from './HistorialConcursos';
import Boton1 from './Boton1';
import CallerNumber from './callerNumber';

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">

        <div className="ms-Grid-col ms-sm10 ms-xl12 main-element">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6"><Identificacion /></div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lgOffset1 ms-lg4"><TablaLlamadas /></div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6"><Credencial /></div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lgOffset1 ms-lg4"> <TablaConcursosGanados /></div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6"><Llamada /></div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lgOffset1 ms-lg4"> <TablaConcursosParticipando /></div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6"> <ExtraInfo /></div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lgOffset1 ms-lg4"> <HistorialConcursos /></div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-xl6"> <Boton1 /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
