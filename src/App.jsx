import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addChirp } from './features/chirps/chirpsSlice';

const App = props => {
	const [username, setUsername] = useState('');
	const [message, setMessage] = useState('');

	const handleClick = e => {
		e.preventDefault();
		props.addChirp({ username, message, created_at: Date.now() });
		setUsername('');
		setMessage('');
	};

	return (
		<div>
			<form>
				<input value={username} onChange={e => setUsername(e.target.value)} type="text" />
				<input value={message} onChange={e => setMessage(e.target.value)} type="text" />
				<button onClick={handleClick}>Chirp It!</button>
			</form>
			<div>
				{props.chirps.map(chirp => (
					<div key={chirp.id}>
						<h1>{chirp.username} said:</h1>
						<p>{chirp.message}</p>
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = ({ chirps }) => ({ chirps });
const mapDispatchToProps = { addChirp };

export default connect(mapStateToProps, mapDispatchToProps)(App);
