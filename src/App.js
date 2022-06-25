import './App.css'
import { createContext, useEffect, useState } from 'react'
import ReactSwitch from 'react-switch'
import { formatUserName } from './utils'
import axios from 'axios'
import { Carousel } from './components/reusable/Slider/Carousel'
import { Card } from './components/reusable/Card/Card'
import TrafficLight from './components/TrafficLight/TrafficLight'
export const ThemeContext = createContext(null)

function App() {
	const [theme, setTheme] = useState('dark')
 	const [users, setUsers] = useState([])

	 useEffect(() => {
		let mounted = true;

		const getUsers = async () => {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			if (mounted) {
			setUsers(response.data);
			}
		}
		getUsers()
	},[])
	const toggleTheme = () => {
		setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
	}
	console.log('user is', users)
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className='App' id={theme}>
				{/* <Form /> */}
				<div className='switch'>
					<label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
					<ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
				</div>
				<TrafficLight/>
				<Carousel />
				<div className='user'>
					{users.length ? (
						<ul data-testid='user-list'>
							{users.map((user) => (
								<li key={user.id} data-testid='user-item'>
									<Card user={user} />
									{/* <span>{user.name}</span> (
								<span>{formatUserName(user.username)}</span>) */}
								</li>
							))}
						</ul>
					) : (
						<div>Loading users...</div>
					)}
				</div>
			</div>
		</ThemeContext.Provider>
	)
}

export default App
