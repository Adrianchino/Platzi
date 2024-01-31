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

console.log('original', orders);

// Cuando queremos saber una sola cosa del array
const rta = orders.map(item => item.total);
console.log('rta', rta);

// De esta manera el array orders muta, pot lo que puede generar problemas

const rta2 = orders.map(item => {
	item.tax = .19;
	return rta2;
});

console.log('rta2', rta2);
console.log('original', orders);

// De esta manera el array orders no muta

const rta3 = orders.map(item => {
	return {
		...item,
		tax: .19
	};
});

console.log('rta3', rta3);
console.log('original', orders);