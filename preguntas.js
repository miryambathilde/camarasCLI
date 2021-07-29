module.exports = function (args, callback) {
	// cada pregunta es un objeto individual //
	this.prompt([
		{
			type: 'input',
			message: 'Introduce tu nombre ',
			name: 'nombre',
			default: 'Miryam Bathilde'
		},
		{
			type: 'confirm',
			message: '¿Eres un robot? ',
			name: 'robot'
		},
		{
			type: 'list',
			message: '¿Qué materia del bootcamp te ha gustado más? ',
			name: 'materia',
			choices: ['HTML + CSS', 'Javascript', 'Bootstrap', 'NodeJS']
		},
		{
			type: 'password',
			message: '¿Cuál es tu password? ',
			name: 'password',
		},
		{
			type: 'list',
			message: 'Elige tu país ',
			name: 'pais',
			choices: [
				{ name: 'España ', value: 'es' },
				{ name: 'Italia', value: 'it' },
				{ name: 'Francia', value: 'fr' },
				{ name: 'Alemania', value: 'ge' },
			]
		}
	], function (answers) {
		console.log(answers);
		callback();
	});
};