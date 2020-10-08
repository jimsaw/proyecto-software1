// endpoint channels devuelve un arreglo

// 1er caso timbrando
// cuando se hace una llamada se crean dos channels
// ambos channels tienen propiedades state
// aque canal cuya propiedad state sea "Ringing", tendra en la propiedad connected["number"] el numero de quien realizó la llamada

// 2do caso llamada en curso
// en ambos channels las propiedades state son "Up"

// numero del telefono de la estación
let registredNumber = "0983601005";

async function CallerNumber(){
    // en el navegador se abrirá una ventana emergente en la que se pide 
    // las credenciales para acceder a ari.

    let callerNumber = ''; //numero por defecto para pruebas

    await fetch('http://192.168.100.145:8088/ari/channels', {
        method: 'get',
        credentials: 'include',    
    }).then( response =>{
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Bad HTTP stuff');
        }
    }).then( jsondata =>{

        jsondata.forEach(channel => {  
            // caso de que este timbrando
            if (channel.state === 'Ringing') {
                callerNumber = channel.connected.number;
                return callerNumber;
            }
            // caso de que se contestó la llamada
            if(channel.state === 'Up'){
                // registredNumber se debe setear previamente con el numero del teléfono de la estación
                if (channel.caller.number === registredNumber) {
                    callerNumber = channel.connected.number;
                    return callerNumber;
                }
                if (channel.connected.number === registredNumber) {
                    callerNumber = channel.caller.number;
                    return callerNumber;
                }
            }     
        });

    }).catch( error =>{
        console.log(error);
        return callerNumber;
    });

    return callerNumber;
};
export {CallerNumber};