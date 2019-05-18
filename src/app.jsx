import React, {Component} from 'react';
import Clock from './clock';
import { Box, Button, Field, Input, Title } from 'reactbulma/'
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
			<Box className="app">
				<Title>Countdown to {this.state.deadline}</Title>
				<Clock 
					deadline={this.state.deadline}
				/>
				<Field>
					<Input 
						className="deadline-update-input"
						placeholder="new date" 
						onChange={event => this.setState({newDeadline: event.target.value})}
					/>
					<Button primary onClick={() => this.changeDeadline()}>Update</Button>
					{ /* use anonymous function to prevent loops */ }
				</Field>
			</Box>
		)
	}
}

export default App;