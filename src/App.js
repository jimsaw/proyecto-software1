import React, { Component } from 'react';
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
import {CallerNumber} from './callerNumber';
//import Ejemploapi from './ejemploapi';
import {getInfo} from './getInfo';
import { CommonLoading } from 'react-loadingg';

class App extends Component {

  constructor() {
    super();
    this.state = {
      numero: '',
      usuario: {},
      error: null,
      isLoaded: false,
    }
  }

  async componentDidMount() {
    this.setState({
      numero: await CallerNumber(),
    });
    this.setState({
      usuario: await getInfo(this.state.numero),
      isLoaded: true,
    });
  }

  render() {
    if(this.state.error){
      return <div>Error: {this.error.message}</div>;
    }else if( !this.state.isLoaded){
      return <CommonLoading  />;
    }else{
      return (
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm10 ms-xl12 main-element">
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6"><Identificacion usuario = {this.state.usuario} /></div>
                <div className="ms-Grid-col ms-sm12 ms-md6 ms-lgOffset1 ms-lg4"><TablaLlamadas /></div>
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md6"><Credencial usuario = {this.state.usuario}/></div>
                <div className="ms-Grid-col ms-sm12 ms-md6 ms-lgOffset1 ms-lg4"> <TablaConcursosGanados /></div>
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md6"><Llamada usuario = {this.state.usuario} /></div>
                <div className="ms-Grid-col ms-sm12 ms-md6 ms-lgOffset1 ms-lg4"> <TablaConcursosParticipando /></div>
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md6"> <ExtraInfo usuario = {this.state.usuario} /></div>
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
  }

}

export default App;
