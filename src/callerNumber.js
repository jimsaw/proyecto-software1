

// endpoint channels devuelve un arreglo

// 1er caso timbrando
// cuando se hace una llamada se crean dos channels
// ambos channels tienen propiedades state
// aque canal cuya propiedad state sea "Ringing", tendra en la propiedad connected["number"] el numero de quien hiso la llamada



// 2do caso llamada en curso
// en ambos channels las propiedades state son "Up"




function CallerNumber(){
    // en el navegador se abrirá una ventana emergente en la que se pide 
    // las credenciales para acceder a ari.

    let callerNumber = '6315329325'; //numero por defecto para pruebas

    fetch('http://192.168.100.145:8088/ari/channels', {
        method: 'get',
        credentials: 'include',    
    }).then( response =>{
        if (response.ok) {
            console.log('response is ok');            
            return response.json();
        } else {
            throw new Error('Bad HTTP stuff');
        }
    }).then( jsondata =>{
        // console.log('jsondata');
        // console.log(jsondata);

        jsondata.forEach(channel => {  
            if (channel.state === 'Ringing') {
                callerNumber = channel.connected.number;
            }            
        });
        console.log('callerNumber:', callerNumber);

    }).catch( error =>{
        console.log(error);
        return "error";
    });

    return callerNumber;
};

CallerNumber();

export default CallerNumber;