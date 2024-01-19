const users = {
	gndx: {
			country: "MX"
	},
	anna: {
			country: "CO"
	}
};

console.log(users.gndx.country);
// No existe
console.log(users.anna.age);
// Esto devuelve algo mas amigable
console.log(users?.ale?.country);
// Nos devuelve algo mas especifico
console.log(users?.usuarioInventado?.country || 'No existe esa información en la base de datos')

// No existe esa información en la base de datos