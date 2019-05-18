import React, {Component} from 'react';
import './app.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		}
	}

	render() {
		return (
			<div className="time">
				<p>Days: {this.state.days}</p>
				<p>Hours: {this.state.hours}</p>
				<p>Minutes: {this.state.minutes}</p>
				<p>Seconds: {this.state.seconds}</p>
			</div>
		)
	}
}

export default Clock;