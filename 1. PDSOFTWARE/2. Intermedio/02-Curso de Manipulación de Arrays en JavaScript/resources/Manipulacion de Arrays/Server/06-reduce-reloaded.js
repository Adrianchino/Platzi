const items = [1, 3, 2, 3, 1, 10]

const rta = items.reduce((obj, item) =>{
	if (!obj[item]) {
		obj[item] = 1;
	} else {
		obj[item] += 1;
	}
	return obj;
}, {});

console.log(rta);

//Otros ejemplos con reduce-reloaded
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) =>{
	if (!obj[item]) {
		obj[item] = 1;
	} else {
		obj[item] += 1;
	}
	return obj;
}, {});

console.log(rta1);

// Suma de numeros
function solution(numbers) {
	return numbers.reduce( (a, b)  => a + b, 0)
	}; 