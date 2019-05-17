import React, {Component} from 'react';
import './app.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'June 7, 2019',
			newDeadline: '',
		};
	}

	changeDeadline() {
		console.log('state', this.state);
		this.setState({deadline: this.state.newDeadline});
	}

	render(){
		return(
			<section className="app">
				<h1>Countdown to {this.state.deadline}</h1>
				<div className="time">
					<p>Days: 20</p>
					<p>Hours: 20</p>
					<p>Minutes: 20</p>
					<p>Seconds: 20</p>
				</div>
				<div>
					<input 
						placeholder="new date" 
						onChange={event => this.setState({newDeadline: event.target.value})}
					/>
					<button onClick={() => this.changeDeadline()}>Update</button>
					{ /* use anonymous function to prevent loops */ }
				</div>
			</section>
		)
	}
}

export default App;