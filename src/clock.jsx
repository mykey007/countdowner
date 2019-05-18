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

	componentWillMount() {
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}

	leading0(num) {
		return num < 10 ? '0' + num : num;
	}

	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		console.log('time', time);
		const seconds = Math.floor((time/1000) % 60);
		const minutes = Math.floor((time/1000/60) % 60);
		const hours = Math.floor(time/(1000*60*60) % 24);
		const days = Math.floor(time/(1000*60*60*24));
		console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
		this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds})
	}

	render() {
		return (
			<div className="time">
				<p>Days: {this.leading0(this.state.days)}</p>
				<p>Hours: {this.leading0(this.state.hours)}</p>
				<p>Minutes: {this.leading0(this.state.minutes)}</p>
				<p>Seconds: {this.leading0(this.state.seconds)}</p>
			</div>
		)
	}
}

export default Clock;