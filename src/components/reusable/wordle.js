const Clock = ({ timerDays, timerHours }) => {
	return (
		<div>
			<span>{timerDays}</span>
			<span>Days</span>
			<span>{timerHours}</span>
			{/* <span>{timerMinutes}</span>
      <span>{timerSeconds}</span> */}
		</div>
	)
}

const App = () => {
	const [timerDays, setTimerDays] = React.useState()
	const [timerHours, setTimerHours] = React.useState()
	const [timerMinutes, setTimerMinutes] = React.useState()
	const [timerSeconds, setTimerSeconds] = React.useState()

	let interval

	const startTimer = () => {
		const countDownDate = new Date('June 30,2022 ').getTime()

		interval = setInterval(() => {
			const now = new Date().getTime()

			const distance = countDownDate - now

			const days = Math.floor(distance / (24 * 60 * 60 * 1000))
			const hours = Math.floor(
				(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
			)
			const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
			const seconds = Math.floor((distance % (60 * 1000)) / 1000)

			if (distance < 0) {
				// Stop Timer

				clearInterval(interval.current)
			} else {
				// Update Timer
				setTimerDays(days)
				setTimerHours(hours)
				setTimerMinutes(minutes)
				setTimerSeconds(seconds)
			}
		})
	}

	React.useEffect(() => {
		startTimer()
	}, [])
	return (
		<div className='App'>
			<h1>Hello React!</h1>
			<Clock timerDays={timerDays} timerHours={timerHours} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))

const Letter = ({ letter, state }) => {
	const className = `letterBox ${state}`
	return <div className={className}>{letter}</div>
}

let id = 0

const defaultLetters = ['', '', '', '', ''].map(() => ({
	letter: '',
	state: '',
	id: ++id,
}))
const Row = ({ letters = defaultLetters }) => {
	return (
		<div className='letterRow'>
			{letters.map((letter) => {
				return (
					<Letter key={letter.id} letter={letter.letter} state={letter.state} />
				)
			})}
		</div>
	)
}

const answer = 'HEORE'

const App = () => {
	const [input, setInput] = React.useState('')
	// const [letters, setLetters] = React.useState(defaultLetters)

	const [lettersArrArr, setLettersArrArr] = React.useState([])

	function reveal(event) {
		event.preventDefault()
		const newLetters = [...input].map((letterToMatch, index) => {
			if (letterToMatch === answer[index]) {
				return {
					letter: letterToMatch,
					state: 'match',
				}
			} else if (answer.includes(letterToMatch)) {
				return {
					letter: letterToMatch,
					state: 'partialMatch',
				}
			}
			return {
				letter: letterToMatch,
				state: 'noMatch',
			}
		})
		setLettersArrArr((arr) => {
			if (arr.length >= 6) return arr
			const newArr = [...arr]
			newArr.push(newLetters)
			return newArr
		})
	}

	function changeInput(event) {
		const newVal = event.target.value.toUpperCase()
		if (newVal.length > 5) return
		setInput(newVal)
	}
	return (
		<div className='App'>
			{[0, 1, 2, 3, 4, 5].map((i) => {
				return <Row letters={lettersArrArr[i]} />
			})}

			<form onSubmit={reveal}>
				<input onChange={changeInput} value={input} />
				<button>Submit</button>
			</form>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))

const App = () => {
	const [myData, setMyData] = React.useState([])
	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
				)
				console.log('res data is', res)
				setMyData(res.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	console.log(typeof myData)
	console.log('myData1 is', myData[1])
	return (
		<div className='App'>
			<h1>Hello React!</h1>
			{myData.map((element) => (
				// console.log(element)
				<li>
					<ul>{element.Nation}</ul>
				</li>
			))}
			{/* <Instructions myData={myData}/> */}
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
