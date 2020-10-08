async function getInfo(numero){
    console.log('en getinfo');
    console.log('numero recibido: ',numero);
    let user = {}
    // no buscar en todos los usuarios por el numero vacio
    if (numero === '') {
        return user;
    }
    await fetch("http://127.0.0.1:8000/api/usuarios", {
        method: 'get',
    }).then( response =>{
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Bad HTTP stuff');
        }
    }).then( jsondata =>{
        jsondata.forEach(usuario => {
            if (numero === usuario.telefono) {
                user = usuario;
                return user;
            }            
        });
    }).catch( error =>{
        console.log(error);
        return user;
    });

    return user;
};

export {getInfo};
