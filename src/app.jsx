import React, {Component} from 'react';
import './app.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'June 7, 2019'
		};
	}

	render(){
		return(
			<section className="App">
				<h1>Countdown to {this.state.deadline}</h1>
				<div className="time">
					<p>Days: 20</p>
					<p>Hours: 20</p>
					<p>Minutes: 20</p>
					<p>Seconds: 20</p>
				</div>
				<div>
					<input placeholder="new date" />
					<button>Update</button>
				</div>
			</section>
		)
	}
}

export default App;