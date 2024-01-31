const letters = ['a', 'b', 'c', 'd', 'e'];

// Hacerlo con el metodo for
for (let index = 0; index < letters.length; index++) {
	const element = letters[index];
	console.log('for', element);
}

// Hcaerlo con el metodo forEach => Manera Rapida
letters.forEach(item => console.log('forEach', item));