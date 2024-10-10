import './App.css'
import React, { useRef } from 'react';
import AuraEffect from './plugins/AuraEffect'
import Profile from './components/Profile/Profile'
import Details from './components/Details/Details'
import Experience from './components/Details/Experience'

function App() {

	const experienceRef = useRef<HTMLDivElement>(null);

	const scrollToExperience = () => {
		if (experienceRef.current) {
			experienceRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<AuraEffect />
			<div className="App mx-20p  flex h-screen">
				<div className='Profile my-5p flex-1'>
					<Profile onExperienceClick={scrollToExperience} />
				</div>
				<div className='Details flex-1 overflow-y-auto scrollbar-hide pt-16 w-full mb-8'>
					<Details>
						<div className='flex-col'>
							<div className='Experience flex-1 mt-10' ref={experienceRef}>
								<Experience />
							</div>
							<div className='Projects flex-1'>
							</div>
						</div>
					</Details>
				</div>
			</div>
		</>
	)
}

export default App;
