import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Mint from './pages/Mint'
import Roadmap from './pages/Roadmap'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="" element={<Home />}>
						<Route path="home" element={<Home />} />
					</Route>

					<Route path="mint" element={<Mint />} />

					<Route path="roadmap" element={<Roadmap />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
