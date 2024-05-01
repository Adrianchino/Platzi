import React from 'react'
import { UsuarioContext } from './UsuarioContext'

const usuario = {
	nombre: 'Adrian code',
	Tecnologia: 'Javascrit',
	email: 'adrianrugel34@gmail.com',
	redes: '#Adrian'
}

const UsuarioProvider = ({children}) => {
	return (
		<UsuarioContext.Provider value={{usuario}}>
			{children}
		</UsuarioContext.Provider>
	)
}

export default UsuarioProvider
