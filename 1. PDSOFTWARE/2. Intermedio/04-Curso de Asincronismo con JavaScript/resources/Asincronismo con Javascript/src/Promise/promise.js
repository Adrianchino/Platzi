const promise = new Promise(function (resolve, reject) {
	resolve ('Hey!!!')
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
	if (cows > 15) {
		resolve(`We have ${cows} cows on the fram`);
	} else {
		reject('There is no cows on the farm')
	}
})

countCows.then(resultado => {
	console.log(resultado);
}).catch(error => {
	console.log(error);
}).finally(() => console.log('Finally'));

// Otro Ejemplo
// Crear una promesa
let miPromesa = new Promise((resolver, rechazar) => {
  // Simular una operación asincrónica, como una solicitud HTTP
  setTimeout(() => {
    let exito = false; // Cambiar a false para simular un error
    if (exito) {
      resolver("¡Operación exitosa!");
    } else {
      rechazar("¡Hubo un error!");
    }
  }, 2000); // Simular una operación que lleva 2 segundos
});

// Consumir la promesa
miPromesa.then((resultado) => {
  console.log(resultado); // Se ejecuta si la promesa se cumple
}).catch((error) => {
  console.error(error); // Se ejecuta si la promesa se rechaza
});