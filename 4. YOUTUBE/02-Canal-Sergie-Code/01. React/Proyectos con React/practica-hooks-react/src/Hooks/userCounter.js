import React, { useState } from 'react'

const userCounter = (valorInicial = 0) => {

	const  [contador, setContador]  = useState(valorInicial)

	const incrementar = (valor = 1) => {
		setContador( contador + valor)
	}
	const decrementar = (valor = 1) => {
		setContador( contador - valor)
	}

	/* Condiciom para que no baje de cero en la funcion decrementat

		const decrementar = (valor = 1) => {
			if (!negativo && contador < 0) {
				setContador(0)
				return
			} 
		setContador( contador - valor)
	}
	*/

	const resetear = () => {
		setContador(0)
	}

	return {
		contador,
		incrementar,
		decrementar,
		resetear
	}
}

export default userCounter
