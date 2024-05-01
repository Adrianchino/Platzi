import Navbar from './Components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen  from './Routes/HomeScreen'
import AboutScreen from './Routes/AboutScreen'
import ContatcScreen from './Routes/ContatcScreen'

const App = () => {
	return (
		<>
				<Navbar/>
				<Routes>
					<Route path='/' element={<HomeScreen></HomeScreen>}></Route>
					<Route path='/about' element={ <AboutScreen></AboutScreen> }></Route>
					<Route path='/contact' element={ <ContatcScreen></ContatcScreen> }></Route>
					<Route path='/*' element={<Navigate to={'/'}/>}></Route>
				</Routes>
		</>
	)
}

export default App
