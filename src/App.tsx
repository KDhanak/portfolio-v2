import './App.css'
import AuraEffect from './plugins/AuraEffect'
import Profile from './components/Profile/Profile'
import Details from './components/Details/Details'

function App() {
	return (
		<>
		<AuraEffect>
		<div className="App mx-20p my-5p flex h-screen">
			<div className='flex-1'>
				<Profile />
			</div>
			<div className='flex-1'>
				<Details />
			</div>
    	</div>
		</AuraEffect>
		</>
	)
}

export default App
