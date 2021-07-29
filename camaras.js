const axios = require('axios');
const parser = require('fast-xml-parser');

module.exports = async (args, callback) => {
	const { data } = await axios.get('https://datos.madrid.es/egob/catalogo/202088-0-trafico-camaras.kml');
	// aqui recibimos los datos en xml //
	//console.log(data);
	// transformamos el dato que recibimos en xml a json //

	// usamos un objeto con varios niveles de anidación con el object destructuring //
	const { kml: { Document: { Placemark: arrPlacemarks } } } = parser.parse(data);

	//console.log(arrPlacemarks);

	// 1. Recuperar del array una cámara aleatoria //
	const camaraRandom = Math.floor(Math.random() * arrPlacemarks.length);
	const camaraSelected = arrPlacemarks[camaraRandom];
	//console.log(camaraRandom);

	// 2. EXTRAER la URL de la imagen //
	// con substring //
	// indicamos donde empieza la url //
	const inicio = camaraSelected.description.indexOf('src=') + 4; // devuelve 36
	// indicamos donde termina la url, que es en el espacio que va al final de inicio //
	const final = camaraSelected.description.indexOf(' ', inicio); // devuelve 96
	// aqui usamos el subtring para indicar donde queremos que empiece y acabe //
	const url = camaraSelected.description.substring(inicio, final);
	//console.log(url);

	// 3. Mostrar por consola el nombre de la cámara y la url //
	const nombre = camaraSelected.ExtendedData.Data[1].Value;

	console.log(nombre);
	console.log(url);

	callback();
};

