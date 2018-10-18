const axios = require('axios');


let getClima = async(lat, lng) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=e28c5f0815a43259d26cb2aed352c910&&units=metric`);
    /* if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    } */
    //console.log(respuesta);

    let clima = respuesta.data.main.temp;

    return clima;
}

module.exports = {
    getClima,
};