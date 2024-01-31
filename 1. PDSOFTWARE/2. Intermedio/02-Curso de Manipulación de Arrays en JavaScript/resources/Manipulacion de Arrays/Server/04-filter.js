const words = ["spray", "elites", "limit", "apple", "exuberant"]
const newArray = []

// Esta es su forma que se hace para un filtro
for (let index = 0; index < words.length; index++) {
	const item = words[index];
	if (item.length >= 6) {
		newArray.push(item);
	}
}

console.log('newArray', newArray);
console.log('original', words);

// En esta forma hacemos un filtro en una sola linea, lo cual seria mas rapido
const rta = words.filter(item => item.length >= 6);
console.log('rta', rta);
console.log('original', words);

//Otros ejemplos con el filter
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const rta3 = orders.filter(item => item.delivered && item.total >= 100);
console.log('rta3', rta3);

const search = (query) => {
	return orders.filter(item => {
		return item.customerName.includes(query);
	})
}

console.log(search('Nico'));
console.log(search('a'));