const API_URL = 'http://localhost:3500';


//trae a los productos de la base de datos por el metodo get


export async function getProductos() {
    try {
        const response = await fetch(`${API_URL}/productos`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Nuestro error es ', error);
    }
}

//conexion entre front y end para insertar usuario nuevo


//conexion entre front y end para insertar usuario nuevo
export async function RegistrarUsuario(datos){
    
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
       const response= await fetch(`${API_URL}/registrarUsuario`, jsonTextInput)
       const data = await response.json();
       return data;

   }
// LOGIN //

export async function Login(datos) {
    const jsonTextInput = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    };
    try {
        const response = await fetch(`${API_URL}/login`, jsonTextInput);

        const data = await response.json();
        
        console.log('datos del API en servicios', data)
        return data;
    } catch (error) {
        console.log('no funciona la comunicacion con el backend')
    }
}

// AGREGAR PRODUCTOS //

// export async function RegistrarUsuario(datos){
    
//     const jsonTextInput = {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(datos)
//     };
//        const response= await fetch(`${API_URL}/productos`, jsonTextInput)
//        const data = await response.json();
//        return data;

//    }