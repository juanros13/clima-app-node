// const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima  en ${coors.direccion} es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el clime en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));


/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
        clima.geClima(resp.lat, resp.lng)
            .then(resp => console.log(resp))
            .catch(error => console.log(error));

    })
    .catch(error => console.log(error)); */